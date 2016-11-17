
let config = require('config/config.json');
let cookie = require('util/cookie.js');
import style from './userEntry.less';
import Validation from 'util/validation.js';
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

        this.validation = new Validation();

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
        let self = this;
        let $username = $(form.username),
            $password = $(form.password),
            $cfpassword = $(form.cfpassword);

        if(this.state.action === 'login'){

            // 开始验证
            let msg = this.validation.valiOneByDom('usernameR');
            let isBreake = false;
            if(msg){
                $username.val('');
                $username.attr('placeholder',msg)
                $username.addClass(style.warning);
                isBreake = true;
                rmWarning($username);
            }

            msg = this.validation.valiOneByDom('passwordR');

            if(msg){
                $password.val('');
                $password.attr('placeholder',msg);
                $password.addClass(style.warning);
                isBreake = true;
                rmWarning($password);
            }

            // 如果验证不通过，退出
            if(isBreake){
                return ;
            }

            this.ajaxLogin({
                username: form.username.value,
                password: form.password.value
            });
        }else{

            // 开始验证
            let isBreake = false;
            let msg = this.validation.valiOneByDom('usernameR');

            if(msg){
                $username.val('');
                $username.addClass(style.warning);
                isBreake = true;
                $username.attr('placeholder',msg);
                rmWarning($username);
            }

            msg = this.validation.valiOneByDom('passwordR');

            if( $password.val() !== $cfpassword.val() ){
                $cfpassword.val('');
                $cfpassword.addClass(style.warning);
                $cfpassword.attr('placeholder',msg);
                rmWarning($cfpassword);
            }

            if(msg){
                $password.val('');
                $password.addClass(style.warning);
                isBreake = true;
                $password.attr('placeholder',msg);
                rmWarning($password);
            }

            console.log(isBreake,this.formBreak);

            // 如果验证不通过，退出
            if(isBreake){
                return;
            }

            this.ajaxRegister({
                username: form.username.value,
                password: form.password.value,
                cfpassword: form.cfpassword.value
            });
        }

        function rmWarning(elt){
            $(elt).one('click', function(){
                let $this = $(this);
                $this.removeClass(style.warning);
                $this.val('');
                $this.attr('placeholder',$this.data('ph'));
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
                let $name = $(this.refs.form.username);

                if(data.message === 0){
                    this.registedDone(data);
                    PubSub.publish('globalHint',{rawText: 'Sharing', endText: 'Done! Please login'});
                }else if(data.message === 1){
                    PubSub.publish('globalHint',{rawText: 'Sharing', endText: 'Fail to register'});
                }else if(data.message === 2){
                    $name.addClass(style.warning);
                    $name.attr('placeholder',data.desc);
                    PubSub.publish('globalHint',{rawText: 'Sharing', endText: 'User already exists'});
                    this.rmWarning($name);
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

                let form = this.refs.form;
                let $username = $(form.username);
                let $password = $(form.password);
                if(data.message === 0){
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
                }else if( data.message===1 ){

                    $username.attr('placeholder',data.desc);
                    $username.val('');
                    $username.addClass(style.warning);
                    this.rmWarning($username);
                    PubSub.publish('globalHint',{rawText: 'Sharing', endText: 'User dose not exist'});

                }else if( data.message === 2 ){
                    $password.attr('placeholder',data.desc);
                    $password.val('');
                    $password.addClass(style.warning);
                    this.rmWarning($password);
                    PubSub.publish('globalHint',{rawText: 'Sharing', endText: 'Invalid password'});
                }
            }
        });
    }

    rmWarning(elt){
        $(elt).one('click', function(){
            let $this = $(this);
            $this.removeClass(style.warning);
            $this.val('');
            $this.attr('placeholder',$this.data('ph'));
        });
    }

    /**
     * React的生命周期函数
     */
    componentDidMount(){
        PubSub.subscribe('showEntryPanel', this.showEntryPanel);
        PubSub.subscribe('userEntryFadeOut', this.userEntryFadeOut);
        PubSub.subscribe('closeUserEntry',this.closePanel);

        let form = this.refs.form;

        this.validation.addByDom(form.username,'usernameR',[
            {strategy: 'isEmpty', errorMsg:'用户名不能为空'},
            {strategy: 'hasSpace', errorMsg:'不能有空格'},
            {strategy: 'isNumberHead', errorMsg:'不能数字开头'}
        ]);

        this.validation.addByDom(form.password,'passwordR',[
            {strategy: 'isEmpty', errorMsg:'密码不能为空'}
        ]);

        this.validation.addByDom(form.username,'usernameL',[
            {strategy: 'isEmpty', errorMsg:'用户名不能为空'},
            {strategy: 'hasSpace', errorMsg:'不能有空格'}
            // {strategy: 'isNumberHead', errorMsg:'不能数字开头'}
        ]);

        this.validation.addByDom(form.password,'passwordL',[
            {strategy: 'isEmpty', errorMsg:'密码不能为空'},
            {strategy: 'hasSpace', errorMsg:'不能有空格'}
        ]);



    }

    render(){
        return(
            <div className={`${style.panelWrap}`} ref='panelWrap'>
                <div className={`${style.entryPanel}`}>
                    <div className={`${style.entryHint}`}>
                        <h2>1982-1983年，他就一个人，写了GCC, GDB, Emacs等一系列软件</h2>
                    </div>
                    <div className={`${style.inputInfo}`}>
                        <form className='form' ref="form" action="#" method="post" data-action="{this.state.action}" onSubmit={this.submit.bind(this)}>
                            <input type="text" name="username" data-type="text" data-ph="Username" placeholder="Username" required=""/>
                            <input type="password" name="password" data-type="password" data-ph="password" placeholder="Password" required=""/>
                            <input className={`${style.hide}`} data-type="password" type="password" name="cfpassword" placeholder="confirm Password" data-ph="confirm Password" required=""/>
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
