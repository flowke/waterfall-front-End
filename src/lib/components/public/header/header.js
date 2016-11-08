
let config = require('config/config.json');

let cookie = require('util/cookie.js');

import header from './header.less';
import SharingPanel from '../addSharing/sharingPanel.js';
import LoginPanel from '../login/loginPanel.js';
import UserListPanel from '../userList/userList.js';


export default class Header extends React.Component{

    constructor(prop){
        super(prop);
        this.state = {
            username: 'Flowke',
            imgUrl: '/public/assets/john.png',
            userid: '',
            panelSwitch: true
        };
        this.loginHover = this.loginHover.bind(this);
        this.loginLeave = this.loginLeave.bind(this);
    }

    handleAddItem(event){
        event.preventDefault();
        this.refs.panel.handlePanel();
    }

    clickLogin(ev){
        this.setState({
            panelSwitch: false
        });
        let $btn = $(ev.target);
        $(this.refs.progressBar).addClass(header.progressDone);
        this.refs.loginPanel.btnClick($btn.data('text'));
        $(this.refs.progressBar).off('transitionend')
    }

    toggleSharePanel(){
        this.refs.panel.handleTogglePanel();
    }

    loginHover(ev){
        if(!this.state.panelSwitch){ return };
        let pnStr = ev.target.dataset.text;
        let $bar = $(this.refs.progressBar);
        this.refs.loginPanel.panelFadeIn(ev.target.dataset.text);
        $bar.addClass(header.progressIn);
        $bar.one('transitionend',()=>{
            this.setState({
                panelSwitch: false
            });
            this.refs.loginPanel.btnClick(pnStr);
        });

    }
    loginLeave(){
        if(!this.state.panelSwitch){ return };
        let $bar = $(this.refs.progressBar);
        this.refs.loginPanel.panelFadeOut();
        $bar.removeClass(header.progressIn);
        $bar.off('transitionend');
    }

    panelSwitchOn(){
        $(this.refs.progressBar).removeClass(header.progressDone);
        $(this.refs.progressBar).removeClass(header.progressIn);
        this.setState({
            panelSwitch: true
        });
    }

    /**
     * 当登陆成功后会被调用
     */
    handleLogin(state){
        this.setState(state);
        $(this.refs.userInfo).toggleClass(header.hide);
        $(this.refs.loginBtn).toggleClass(header.hide);
    }
    // 用户注销界面
    showUserSetting(){
        $(this.refs.userSetting).addClass(header.bubleHov);
    }
    hideUserSetting(){
        this.timer = setTimeout(()=>{
            $(this.refs.userSetting).removeClass(header.bubleHov);
        },200);
    }
    // 点击menu后的toggle作用
    menuClick(){
        let $lines = $(this.refs.lineWrap.children);
        $lines.eq(0).toggleClass(header.reformLine1);
        $lines.eq(1).toggleClass(header.reformLine2);
        $lines.eq(2).toggleClass(header.reformLine3);
        this.refs.listPanel.handleListPanel();
    }

    watchMine(ev){
        ev.stopPropagation();
        ev.preventDefault();
        // 从content里订阅了
        PubSub.publish('userTile',{
            watch_user:this.state.userid,
            from_user: cookie.get('user')
        });
    }

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
        console.log(file)
        $.ajax({
            url: `${config.url}?p=home&c=user&a=changeMyAvatar`,
            type: 'POST',
            dataType: 'json',
            processData: false,
		    contentType: false,
            data: fd,
            success:(data)=>{
                this.setState({
                    imgUrl: data.url
                });
            }
        });
    }

    componentDidMount(){
        $.ajax({
            url: `${config.url}?p=home&c=user&a=autologin`,
            dataType: 'json',
            success:(data)=>{
                if(data.message === 1){
                    cookie.set('user',data.user_id);
                    this.handleLogin({
                        username: data.user_name,
                        userid: data.user_id,
                        imgUrl: data.user_icon
                    });
                }else{
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
            <div className={`${header.header} header`} ref='header' onClick={this.homeRefresh.bind(this)}>
				<div className="wrap">
                    <div className={`${header.share_btn} ${header.btn} share_btn`} onClick={this.toggleSharePanel.bind(this)}>Sharing</div>
                    <div className={`${header.loginPanel}`} ref='loginBtn'>
                        <span className={`${header.login} login`} onClick={this.clickLogin.bind(this)} onMouseEnter={this.loginHover} onMouseLeave={this.loginLeave} data-text="login">Log in</span>
                        <span className={`${header.login} register`} onClick={this.clickLogin.bind(this)} onMouseEnter={this.loginHover} onMouseLeave={this.loginLeave} data-text="signin">Sign Up</span>
                    </div>
                    <div className={`${header.userInfo} ${header.hide} userInfo`} onMouseEnter={this.showUserSetting.bind(this)} onMouseLeave={this.hideUserSetting.bind(this)} ref='userInfo'>
                        <img src={this.state.imgUrl} />
                        <span>{this.state.username}</span>
                        <div className={`${header.arrow_box} ${header.bubleFrame}`} ref='userSetting'>
                            <div className={`${header.bubleWrap}`} onMouseEnter={()=>{clearTimeout(this.timer)}}>
                                <a href="#" onClick={this.watchMine.bind(this)}>查看我的</a>
                                <a href="#" onClick={this.updateAvatar.bind(this)}>更改头像</a>
                                <input type="file" className={`${header.hide}`} onChange={this.AvatarChange.bind(this)} ref="avatarUpload"/>
                                <a onClick = {()=>{cookie.remove('user')}} href={`${config.url}?p=home&c=user&a=logout`}>注销</a>
                            </div>
                        </div>
                    </div>
                    <SharingPanel ref='panel' userid={this.state.userid}/>

                    <LoginPanel ref='loginPanel' handleLogin={this.handleLogin.bind(this)} switchOn={this.panelSwitchOn.bind(this)} />

                    <UserListPanel ref='listPanel'/>
                    <div className={`${header.menu}`} onClick={this.menuClick.bind(this)}>
                        <div ref='lineWrap'>
                            <i className={`${header.line_1}`}></i>
                            <i className={`${header.line_2}`}></i>
                            <i className={`${header.line_3}`}></i>
                        </div>
                    </div>
			    </div>
                <div className={`${header.progress}`} ref='progressBar'></div>
		    </div>
        );
    }
}
