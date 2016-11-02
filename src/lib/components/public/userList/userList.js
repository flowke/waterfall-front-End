
import style from './userList.less';

export default class UserList extends React.Component{

    constructor(props){
        super(props);
        this.handleListPanel = this.handleListPanel.bind(this);
    }

    handleListPanel(){
        let elems = this.refs;
        $(elems.panel).toggleClass(style.panelShow);
        $(elems.mask).toggleClass(style.maskShow);
        $(elems.listWrap).toggleClass(style.listShow);
    }

    render(){
        return (
            <div className={`${style.panel} userList`} ref = 'panel'>
                <i className={`${style.mask}`} ref='mask'></i>
                <div className={`${style.listWrap}`} ref='listWrap'>
                    <ul>
                        <li>
                            <a href="#">
                                <img src="/public/assets/john.png"/>
                                <span>Flowke</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/public/assets/john.png"/>
                                <span>Flowke</span>
                                <span className={`${style.starWrap}`}>
                                    <span className={`${style.starNum}`}>200</span>
                                    <i className={`icon-heart2`}></i>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
