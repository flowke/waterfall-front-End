let config = require('config/config.json');
let cookie = require('util/cookie.js');
import style from './userList.less';

const propTypes = {
    data: React.PropTypes.array
}

export default Users = ({data})=>{

    const watchMine = (ev)=>{
        ev.stopPropagation();
        ev.preventDefault();
        PubSub.publish('userTile', {
            watch_user: $(ev.currentTarget).data('userid'),
            from_user: cookie.get('user'),
            userName: $(ev.currentTarget).data('username')
        });
    }

    return data.map((elt,i)=>{
        return (
            <li key={i}>
                <a href="#" onClick={watchMine} data-userid={elt.user_id} data-username={elt.user_name}>
                    <div className={`${style.imgWrap}`} > <img src={elt.user_icon}/> </div>
                    <span>{elt.user_name}</span>
                    <span className={`${style.starWrap}`}>
                        <span className={`${style.starNum}`}>{elt.user_star}</span>
                        <i className={`icon-heart2`}></i>
                    </span>
                </a>
            </li>
        );
    });
}

UserList.propTypes = propTypes;
