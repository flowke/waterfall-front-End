
let config = require('config/config.json');
let cookie = require('util/cookie.js');
import style from './userEntry.less';

export default class LoginPanel extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            action:'login',
            submitHint: '登陆'
        };

        this.showEntryPanel = this.showEntryPanel.bind(this);
        this.closePanel = this.closePanel.bind(this);
        this.userEntryFadeOut = this.userEntryFadeOut.bind(this);
    }

    /**
     * 显示入口面板
     * 注册与登陆面板的切换逻辑;
     */
    showEntryPanel(msg,data){
        let form = this.refs.form;
        let panel = data.panel;

        $(this.refs.panelWrap).addClass(style.panelFade);
        if(panel==='login'){
            this.setState({
                action:'login',
                submitHint: '登陆'
            });

            $(form.cfpassword).addClass(style.hide);
            $(this.refs.fastGoto).attr('tit','signin');
            $(this.refs.fastGoto).text('去注册');
        }else{
            this.setState({
                action:'register',
                submitHint: '注册'
            });
            $(form.cfpassword).removeClass(style.hide);
            $(this.refs.fastGoto).attr('tit','login');
            $(this.refs.fastGoto).text('去登陆');
        }
    }
    // entry面板退出
    userEntryFadeOut(){
        $(this.refs.panelWrap).removeClass(style.panelFade);
    }
    // 点击关闭按钮
    closePanel(){
        $(this.refs.panelWrap).removeClass(style.panelFade);
        //让在useriicon上hover的时候继续能fadeIn
        PubSub.publish('fadeEntryOn');
    }

    fastGoto(ev){
        if($(ev.target).attr('tit') === 'login'){
            this.showEntryPanel('',{panel: 'login'});
        }else{
            this.showEntryPanel('',{panel: 'signin'})
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
    // 注册时要发起的请求
    ajaxRegister(data){
        $.ajax({
            url: `${config.url}?p=home&c=user&a=register`,
            type: "POST",
            data: data,
            dataType: `json`,
            success:(data)=>{
                if(data.message === 1){
                    $(this.refs.form.reset).click();
                    this.registedDone(data);
                }else if(data.message === 0){
                    alert('不对！！！')
                }
            }
        });
    }
    /**
     * 当注册成功后的状态切换
     */
    registedDone(data){
        PubSub.publish('showEntryPanel',{panel: 'login'});
        this.setState({
            user_id: data.id
        });
    }
    // 登录时发起的请求
    ajaxLogin(data){
        $.ajax({
            url: `${config.url}?p=home&c=user&a=login`,
            type: "POST",
            data: data,
            dataType: `json`,
            success:(data)=>{
                if(data.message === 1){
                    //在content里订阅了
                    PubSub.publish('initTile');
                    cookie.set('user',data.user_id);
                    // 关掉用户入口面板
                    this.closePanel();
                    PubSub.publish('toggleWelcome');
                    PubSub.publish('loginDone',{
                        username: data.user_name,
                        userid: data.user_id,
                        avatarUrl: data.user_icon
                    });
                }
            }
        });
    }

    /**
     * React的生命周期函数
     */
    componentDidMount(){
        PubSub.subscribe('showEntryPanel', this.showEntryPanel);
        PubSub.subscribe('userEntryFadeOut', this.userEntryFadeOut);
        PubSub.subscribe('closeUserEntry',this.closePanel);
    }

    render(){
        return(
            <div className={`${style.panelWrap}`} ref='panelWrap'>
                <div className={`${style.entryPanel}`}>
                    <div className={`${style.entryHint}`}>
                        <h2>那时候没有人帮助他，他就一个人在晚上写代码，写出他心中的世界。</h2>
                    </div>
                    <div className={`${style.inputInfo}`}>
                        <form className='form' ref="form" action="#" method="post" data-action="{this.state.action}" onSubmit={this.submit.bind(this)}>
                            <input className="email" type="text" name="username" placeholder="Username" required=""/>
                            <input className="lock" type="password" name="password" placeholder="Password" required=""/>
                            <input className={`${style.hide}`} type="password" name="cfpassword" placeholder="confirm Password" required=""/>
                            <input name='submit' type="submit" value={this.state.submitHint}/>
                            <input className={style.hide} name='reset' type="reset" value={this.state.submitHint}/>
                        </form>
                        <p className={`${style.fastGoto}`} ref='fastGoto' data-tit="login" onClick={this.fastGoto.bind(this)}>注册</p>
                    </div>
                    <div className={`${style.close}`} onClick={this.closePanel.bind(this)}></div>
                </div>
            </div>
        );
    }
}
