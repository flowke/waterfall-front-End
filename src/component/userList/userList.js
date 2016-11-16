let config = require('config/config.json');
let cookie = require('util/cookie.js');
import style from './userList.less';

export default class UserList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userList: []
        };
        this.userListRefresh = this.userListRefresh.bind(this);
        this.toggleUserList = this.toggleUserList.bind(this);
        this.updateList = this.updateList.bind(this);
    }

    // 点击用户菜单按钮，只涉及到ui上的隐藏和显示
    menuClick(){
        $(this.refs.lineWrap).toggleClass(style['menu-in']);
        PubSub.publish('toggleUserList');
    }
    // 点击menu后调用，主要处理用户列表的隐藏和显示
    toggleUserList(){
        let elems = this.refs;
        $(elems.panel).toggleClass(style.panelShow);
        $(elems.mask).toggleClass(style.maskShow);
        $(elems.listWrap).toggleClass(style.listShow);
        // 分享面板的关闭
        PubSub.publish('closePanelWrap');
        // 用户入口的关闭
        PubSub.publish('closeUserEntry');
        if(elems.panel.onOff = !elems.panel.onOff){
            this.reqUser(null,this.updateList);
        }
    }

    watchMine(ev){
        ev.stopPropagation();
        ev.preventDefault();
        PubSub.publish('userTile', {
            watch_user:$(ev.currentTarget).data('userid'),
            from_user:cookie.get('user')
        });
    }
    // 请求后的回调
    updateList(data){
        let list = data.map((elt,i)=>{
            return (
                <li key={i}>
                    <a href="#" onClick={this.watchMine.bind(this)} data-userid={elt.user_id}>
                        <img src={elt.user_icon}/>
                        <span>{elt.user_name}</span>
                        <span className={`${style.starWrap}`}>
                            <span className={`${style.starNum}`}>{elt.user_star}</span>
                            <i className={`icon-heart2`}></i>
                        </span>
                    </a>
                </li>
            );
        });

        this.setState({
            userList: list
        },()=>{
            setTimeout(()=>{
                $(this.refs.loopIcon).removeClass('f-refreshing');
            },1000)
        });
    }

    userListRefresh(ev){
        ev.stopPropagation();
        ev.preventDefault();
        // $(this.refs.loopIcon).addClass('f-refreshing');
        this.reqUser(null,this.updateList);
    }

    homeRefresh(){
        PubSub.publish('initTile',{
            filterType: 0,
            sortBy: 'TIME',
            order: 'DESC'
        })
    }

    // 处理user的请求
    reqUser(data,cb){
        $.ajax({
            url: `${config.url}?p=home&c=user&a=getList`,
            dataType: `json`,
            success: (data)=>{
                cb && cb(data);
            },
            error: (data)=>{
                console.log(data)
            }
        });
    }


    componentDidMount(){
        this.reqUser(null,this.updateList);
        PubSub.subscribe('toggleUserList', this.toggleUserList);
    }

    render(){
        return (
            <div className={`${style.panel} userList`} ref = 'panel'>
                <div className={`${style.menu}`} onClick={this.menuClick.bind(this)}>
                    <div ref='lineWrap'>
                        <i className={`${style.line_1} ${style.reformLine1}`}></i>
                        <i className={`${style.line_2} ${style.reformLine2}`}></i>
                        <i className={`${style.line_3} ${style.reformLine3}`}></i>
                    </div>
                </div>
                <i className={`${style.mask}`} ref='mask' onClick={this.userListRefresh}></i>
                <div className={`${style.listWrap}`} ref='listWrap'>
                    <a href="http://www.flowke.com" className={`${style.home}`}><i className={`icon-home`} ref='loopIcon'></i></a>
                    <h3 className={`${style.listTitle}`}>Users Whome Shared</h3>
                    <ul>
                        {this.state.userList}
                    </ul>
                </div>
            </div>
        );
    }
}
