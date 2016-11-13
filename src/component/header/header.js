let config = require('config/config.json');

let cookie = require('util/cookie.js');

import style from './header.less';

export default class Header extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            username: 'Flowke',
            avatarUrl: '',
            userid: ''
        };

        this.userClick = this.userClick.bind(this);
        this.userEnter = this.userEnter.bind(this);
        this.userLeave = this.userLeave.bind(this);
        this.fadeEntryOn = this.fadeEntryOn.bind(this);
        this.loginDone = this.loginDone.bind(this);
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
    // 让entryfade能继续触发
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
            from_user: cookie.get('user')
        });
    }
    // 主页刷新
    homeRefresh(ev){
        if(ev.target !== ev.currentTarget){
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
                this.setState({
                    avatarUrl: data.url
                });
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

    componentDidMount(){
        PubSub.subscribe('fadeEntryOn', this.fadeEntryOn);
        PubSub.subscribe('userClick', this.userClick);
        PubSub.subscribe('loginDone', this.loginDone);

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
            <header className={`${style['m-header']}`}>

                <div className={`${style.topBar}`}>
                    <button className={`${style.share_btn} u-btn`} onClick={this.shareBtnClick.bind(this)}>Sharing</button>

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
                                    <a href="#" onClick={this.updateAvatar.bind(this)}>更改头像</a>
                                    <input type="file" className={`${style.hide}`} onChange={this.AvatarChange.bind(this)} ref="avatarUpload"/>
                                    <a onClick = {()=>{cookie.remove('user')}} href={`${config.url}?p=home&c=user&a=logout`}>注销</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${style.progress}`} ref='loadingLine'></div>
            </header>
        );
    }
}