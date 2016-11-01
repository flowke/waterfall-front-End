
let config = require('config/config.json');

import header from './header.less';
import SharingPanel from '../addSharing/sharingPanel.js';
import LoginPanel from '../login/loginPanel.js';
// import Register from '../login/register.js';


export default class Header extends React.Component{

    constructor(prop){
        super(prop);
        this.state = {
            username: '',
            imgUrl: '',
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

    componentDidMount(){
        $.ajax({
            url: `${config.url}?p=home&c=user&a=autologin`,
            dataType: 'json',
            success:(data)=>{
                if(data.message === 1){
                    this.handleLogin({
                        username: data.user_name,
                        userid: data.user_id,
                        imgUrl: data.user_icon
                    });
                }
            }
        });
    }

    render(){
        return (
            <div className={`${header.header} header`}>
				<div className="wrap">
                    <div className={`${header.share_btn} ${header.btn} share_btn`} onClick={this.toggleSharePanel.bind(this)}>Sharing</div>
                    <div className={`${header.loginPanel}`} ref='loginBtn'>
                        <span className={`${header.login} login`} onClick={this.clickLogin.bind(this)} onMouseEnter={this.loginHover} onMouseLeave={this.loginLeave} data-text="login">Log in</span>
                        <span className={`${header.login} register`} onClick={this.clickLogin.bind(this)} onMouseEnter={this.loginHover} onMouseLeave={this.loginLeave} data-text="signin">Sign Up</span>
                    </div>
                    <div className={`${header.userInfo} ${header.hide} userInfo`} ref='userInfo'>
                        <img src={this.state.imgUrl} />
                        <span>{this.state.username}</span>
                    </div>

                    <SharingPanel ref='panel' userid={this.state.userid}/>

                    <LoginPanel ref='loginPanel' handleLogin={this.handleLogin.bind(this)} switchOn={this.panelSwitchOn.bind(this)} />
			    </div>
                <div className={`${header.progress}`} ref='progressBar'></div>
		    </div>
        );
    }
}
