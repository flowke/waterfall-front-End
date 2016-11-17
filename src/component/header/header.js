let config = require('config/config.json');

let cookie = require('util/cookie.js');

import CreazyLetter from 'util/textTransform.js';

import style from './header.less';

export default class Header extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            username: 'Flowke',
            avatarUrl: '',
            userid: '',
            hintText: ''
        };

        this.userClick = this.userClick.bind(this);
        this.userEnter = this.userEnter.bind(this);
        this.userLeave = this.userLeave.bind(this);
        this.fadeEntryOn = this.fadeEntryOn.bind(this);
        this.loginDone = this.loginDone.bind(this);
        this.progressLoading = this.progressLoading.bind(this);
        this.progressLoadingDone = this.progressLoadingDone.bind(this);
        this.globalHint = this.globalHint.bind(this);
        // 控制fadein的开关
        this.userEntrySwitch = false;


    }

    // 用户点击了分享按钮，只涉及到ui上的隐藏和显示
    shareBtnClick(){

        PubSub.publish('togglePanelWrap');
    }

    /**
     * handler for userInfo
     */

    // 点击了用户icon
    userClick(msg,data){
        let panel = data.panel;
        PubSub.publish('showEntryPanel',{panel: panel});
        $(this.refs.loadingLine).addClass(style.progressIn);
        $(this.refs.loadingLine).addClass(style.progressDone);
        $(this.refs.loadingLine).off('transitionend');
        this.userEntrySwitch = true;
    }
    // 在用户icon上hover
    userEnter(){
        if(this.userEntrySwitch){ return };
        PubSub.publish('showEntryPanel',{panel: 'login'});

        let $bar = $(this.refs.loadingLine);
        // 加载线进入
        $bar.addClass(style.progressIn);

        $bar.one('transitionend',()=>{
            this.userEntrySwitch = true;

        });
    }
    // 在用户icon上out
    userLeave(){
        // 如果已经是加载完成就没有此效果
        if(this.userEntrySwitch){ return };
        // 让用户面板消失
        PubSub.publish('userEntryFadeOut');
        console.log('leave')
        let $bar = $(this.refs.loadingLine);

        $bar.removeClass(style.progressIn);
        $bar.off('transitionend');
    }
    // 让entryfade能继续触发, 进度条会重置
    fadeEntryOn(){
        $(this.refs.loadingLine).removeClass(style.progressDone);
        $(this.refs.loadingLine).removeClass(style.progressIn);
        this.userEntrySwitch = false;
    }
    // 用户设置操作
    showUserSetting(){
        $(this.refs.userSetting).addClass(style.bubleHov);
    }
    hideUserSetting(){
        this.timer = setTimeout(()=>{
            $(this.refs.userSetting).removeClass(style.bubleHov);
        },200);
    }
    // 查看我的tile
    watchMine(ev){
        ev.stopPropagation();
        ev.preventDefault();
        // 从content里订阅了
        PubSub.publish('userTile',{
            watch_user:this.state.userid,
            from_user: cookie.get('user'),
            userName: this.state.username
        });
    }
    //编辑我的
    editMine(ev){
        this.watchMine(ev);
        // 从content里订阅了
        PubSub.publish('userTile',{
            watch_user:this.state.userid,
            from_user: cookie.get('user'),
            userName: this.state.username,
            cb: ()=>{
                PubSub.publish('tileEidtState', {message: true});
            }
        });
    }
    // 主页刷新
    homeRefresh(ev){
        if(typeof ev !== 'string' && ev.target !== ev.currentTarget){
            return;
        }
        ev.stopPropagation();
        ev.preventDefault();
        PubSub.publish('initTile');

    }
    // 点击更改头像更改头像
    updateAvatar(){
        this.refs.avatarUpload.click();
    }
    // 头像file变化之后
    AvatarChange(ev){
        ev.stopPropagation();
		ev.preventDefault();
		let fileList = ev.target.files || ev.dataTransfer.files;
        let file = fileList[fileList.length-1];

        let fd = new FormData();
		fd.append('avatar',file);
        $.ajax({
            url: `${config.url}?p=home&c=user&a=changeMyAvatar`,
            type: 'POST',
            dataType: 'json',
            processData: false,
		    contentType: false,
            data: fd,
            success:(data)=>{
                if(data.message ===1){
                    PubSub.publish('globalHint',{rawText: 'Sharing', endText: 'Avatar updated'});
                    this.setState({
                        avatarUrl: data.url
                    });
                }else if(data.message === 2){
                    PubSub.publish('globalHint',{rawText: 'Sharing', endText: 'Avatar update fail'});
                }

            }
        });
    }
    /**
     * 登陆完毕后的回调函数
     * 它应该处理面板的隐藏和显示，修改state
     */
    loginDone(msg,data){
        this.setState(data);
        $(this.refs.userInfo).removeClass(style.hide);
        $(this.refs.userIcon).addClass(style.hide);
    }
    /**
     * 进度条关于tile加载
     */
    progressLoading(){
        $(this.refs.loadingLine).addClass(style.progressLoading);
    }
    progressLoadingDone(){

        $(this.refs.loadingLine).addClass(style.progressLoadingDone);
        setTimeout(()=>{
            $(this.refs.loadingLine).removeClass(style.progressLoading);
            $(this.refs.loadingLine).removeClass(style.progressLoadingDone);
        },100);
    }

    // 全局的bubble提示
    globalHint( msg, data ){
        /* $(this.refs.globalBubble).addClass('bubbleAnima');
        $(this.refs.globalBubble).one('animationend',()=>{
            $(this.refs.globalBubble).removeClass('bubbleAnima');
        }); */
        let rawText = data.rawText,
            endText = data.endText;
        let creazyLetter = new CreazyLetter(this.refs.shareBtn);
        creazyLetter.letterMutting(this.refs.shareBtn,endText,4);
        clearTimeout(this.letterTimer)
        this.letterTimer = setTimeout(()=>{
            creazyLetter.letterMutting(this.refs.shareBtn,rawText,4);
        }, 2500);
    }

    componentDidMount(){

        PubSub.subscribe('fadeEntryOn', this.fadeEntryOn);
        PubSub.subscribe('userClick', this.userClick);
        PubSub.subscribe('loginDone', this.loginDone);
        PubSub.subscribe('progressLoading', this.progressLoading);
        PubSub.subscribe('progressLoadingDone', this.progressLoadingDone);
        PubSub.subscribe('globalHint',this.globalHint);
        $.ajax({
            url: `${config.url}?p=home&c=user&a=autologin`,
            dataType: 'json',
            success:(data)=>{
                if(data.message === 1){
                    cookie.set('user',data.user_id);
                    PubSub.publish('loginDone', {
                        username: data.user_name,
                        userid: data.user_id,
                        avatarUrl: data.user_icon
                    });
                }else{
                    setTimeout(()=>{
                        PubSub.publish('toggleWelcome');
                    },800);
                    cookie.remove('user');
                }
            },
            error:(d)=>{
                console.log(d)
            }
        });
    }

    render(){
        return (
            <header className={`${style['m-header']}`} ref="headerWrap">

                <div className={`${style.topBar}`}>
                    <a href="http://www.flowke.com" className={`${style.home}`}><i className={`icon-home`} ref='loopIcon'></i></a>
                    <button className={`${style.share_btn} u-btn`} onClick={this.shareBtnClick.bind(this)} ref="shareBtn">Sharing</button>

                    <div className={`${style['topBar-info']}`}>
                        <span onClick={()=>{PubSub.publish('userClick',{panel: 'login'})}} onMouseEnter={this.userEnter} onMouseLeave={this.userLeave} ref="userIcon"><i className={`${style.userIcon} icon-user u-btn`}></i></span>
                        <div className={`${style.userInfo} ${style.hide}`} onMouseEnter={this.showUserSetting.bind(this)} onMouseLeave={this.hideUserSetting.bind(this)} ref='userInfo'>
                            <div className={`${style.imgWrap}`}>
                                <img src={this.state.avatarUrl} />
                            </div>
                            <span>{this.state.username}</span>
                            <div className={`${style.arrow_box} ${style.bubleFrame}`} ref='userSetting'>
                                <div className={`${style.bubleWrap}`} onMouseEnter={()=>{clearTimeout(this.timer)}}>
                                    <a href="#" onClick={this.watchMine.bind(this)}>查看我的</a>
                                    <a href="#" onClick={this.editMine.bind(this)}>编辑我的</a>
                                    <a href="#" onClick={this.updateAvatar.bind(this)}>更改头像</a>
                                    <input type="file" className={`${style.hide}`} onChange={this.AvatarChange.bind(this)} ref="avatarUpload"/>
                                    <a onClick = {()=>{cookie.remove('user')}} href={`${config.url}?p=home&c=user&a=logout`}>注销</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${style.progress}`} ref='loadingLine'></div>
                <div className={`${style.globalBubble}`} ref="globalBubble">{this.state.hintText}</div>
            </header>
        );
    }
}
