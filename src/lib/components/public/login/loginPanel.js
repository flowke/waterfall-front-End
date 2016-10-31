let React = require('react');
let ReactDOM = require('react-dom');

let config = require('config/config.json');

import style from './loginPanel.less';

export default class LoginPanel extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            action:'login',
            submitHint: '登陆'
        };
    }

    /**
     * 注册与登陆面板的切换逻辑;
     */
    btnClick(panel){
        let form = this.refs.form;
        $(this.refs.panel).removeClass(style.hide);
        if(panel==='login'){
            this.setState({
                action:'login',
                submitHint: '登陆'
            });

            $(form.cfpassword).addClass(style.hide);
            $(form.submit).val('Login in');
            $(this.refs.fastGoto).attr('tit','signin');
            $(this.refs.fastGoto).text('去注册');
        }else{
            this.setState({
                action:'register',
                submitHint: '注册'
            });
            $(form.cfpassword).removeClass(style.hide);
            $(form.submit).val('Sign up');
            $(this.refs.fastGoto).attr('tit','login');
            $(this.refs.fastGoto).text('去登陆');
        }
    }
    /**
     * 表单提交
     */
    submit(ev){
        ev.preventDefault();
        let form = ev.target;
        if(this.state.action === 'login'){
            this.ajaxLogin({
                username: form.username.value,
                password: form.password.value
            });
        }else{
            this.ajaxRegister({
                username: form.username.value,
                password: form.password.value,
                cfpassword: form.cfpassword.value
            });
        }
    }

    ajaxRegister(data){
        $.ajax({
            url: `${config.url}?p=home&c=user&a=register`,
            type: "POST",
            data: data,
            dataType: `json`,
            success:(data)=>{
                console.log(data)
                if(data.message === 1){
                    $(this.refs.form.reset).click();
                    this.registedState(data);
                }else if(data.message === 0){
                    alert('不对！！！')
                }
            }
        });
    }
    /**
     * 当注册成功后的状态切换
     */
    registedState(data){
        this.btnClick('login');
        this.setState({
            user_id: data.id
        });
    }

    ajaxLogin(data){
        $.ajax({
            url: `${config.url}?p=home&c=user&a=login`,
            type: "POST",
            data: data,
            dataType: `json`,
            success:(data)=>{
                console.log(data);
                if(data.message === 1){
                    this.closePanel();
                    this.props.handleLogin({
                        username: data.user_name,
                        userid: data.user_id,
                        imgUrl: data.user_icon
                    });
                }
            }
        });
    }

    closePanel(){
        $(this.refs.panel).toggleClass(style.hide);
    }

    fastGoto(ev){
        if($(ev.target).attr('tit') === 'login'){
            this.btnClick('login');
        }else{
            this.btnClick('signin')
        }
    }


    render(){
        return(
            <div className={`${style.panel} ${style.hide}`} ref='panel'>
                <div className={`${style.johndoe_left}`}>
                    <div className={`${style.john_img}`}>
                        <img src={require("image/john.png")} alt=""/>
                        <h2>Beckham</h2>
                    </div>
                    <div className={`${style.john_text}`}>
                        <form className='form' ref="form" action="#" method="post" data-action="{this.state.action}" onSubmit={this.submit.bind(this)}>
                            <input className="email" type="text" name="username" placeholder="Username" required=""/>
                            <input className="lock" type="password" name="password" placeholder="Password" required=""/>
                            <input className={`${style.hide}`} type="password" name="cfpassword" placeholder="confirm Password" required=""/>
                            <input name='submit' type="submit" value={this.state.submitHint}/>
                            <input className={style.hide} name='reset' type="reset" value={this.state.submitHint}/>
                        </form>
                        <p className={`${style.fastGoto}`} ref='fastGoto' data-tit="login" onClick={this.fastGoto.bind(this)}>注册</p>
                    </div>
                    <div className={`${style.ico}`} onClick={this.closePanel.bind(this)}></div>
                </div>
            </div>
        );
    }
}