
let config = require('config/config.json');
let cookie = require('util/cookie.js');
import style from './userList.less';

export default class UserList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userList: []
        };
        this.handleRefresh = this.handleRefresh.bind(this);
        this.handleListPanel = this.handleListPanel.bind(this);
        this.updateList = this.updateList.bind(this);
    }

    handleListPanel(){
        let elems = this.refs;
        $(elems.panel).toggleClass(style.panelShow);
        $(elems.mask).toggleClass(style.maskShow);
        $(elems.listWrap).toggleClass(style.listShow);
    }

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

    watchMine(ev){
        ev.stopPropagation();
        ev.preventDefault();
        PubSub.publish('userTile', {
            watch_user:$(ev.currentTarget).data('userid'),
            from_user:cookie.get('user')
        });
    }

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

    handleRefresh(ev){
        ev.stopPropagation();
        ev.preventDefault();
        $(this.refs.loopIcon).addClass('f-refreshing');
        this.reqUser(null,this.updateList);
    }

    componentDidMount(){
        this.reqUser(null,this.updateList);
    }


    render(){
        return (
            <div className={`${style.panel} userList`} ref = 'panel'>
                <i className={`${style.mask}`} ref='mask' onClick={this.handleRefresh}></i>
                <div className={`${style.listWrap}`} ref='listWrap'>
                    <i className={`icon-loop2 ${style.refresh}`} onClick={this.handleRefresh} ref='loopIcon'></i>
                    <ul>
                        {this.state.userList}
                    </ul>
                </div>
            </div>
        );
    }
}
