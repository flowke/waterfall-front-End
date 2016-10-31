
let React = require('react');
let ReactDOM = require('react-dom');

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
            userid: ''
        }
    }

    handleAddItem(event){
        event.preventDefault();
        this.refs.panel.handlePanel();
    }

    toggleLogin(ev){
        let $btn = $(ev.target);
        if($btn.hasClass('login')){
            this.refs.loginPanel.btnClick('login');
        }else{
            this.refs.loginPanel.btnClick('register');
        }
    }

    toggleSharePanel(){
        this.refs.panel.handleTogglePanel();
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
                    <div className={`${header.share_btn} ${header.btn}`} onClick={this.toggleSharePanel.bind(this)}>Sharing</div>
                    <div className={`${header.loginPanel}`} ref='loginBtn'>
                        <span className={` ${header.btn} ${header.login} login`} onClick={this.toggleLogin.bind(this)}>登陆</span>
                        <span className={` ${header.btn} ${header.login} register`} onClick={this.toggleLogin.bind(this)}>注册</span>
                    </div>
                    <div className={`${header.userInfo} ${header.hide} userInfo`} ref='userInfo'>
                        <img src={this.state.imgUrl}  />
                        <span>{this.state.username}</span>
                    </div>

                    <SharingPanel ref='panel' userid={this.state.userid}/>
                    {/* <Login/> */}
                    <LoginPanel ref='loginPanel' handleLogin={this.handleLogin.bind(this)}/>
			    </div>
		    </div>
        );
    }
}
