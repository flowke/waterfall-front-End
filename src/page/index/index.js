
require('style/gen.css');


import Header from 'component/header/header.js';
import Content from 'component/content/content.js';
import WelcomePanel from 'component/welcomePanel/welcomePanel.js';
import ShareingPanel from 'component/shareingPanel/shareingPanel.js';
import UserEntry from 'component/userEntry/userEntry.js';
import UserList from 'component/userList/userList.js';


class Index extends React.Component{
    render(){
        return (
            <div id="index">
                <Header></Header>
                <WelcomePanel/>
                <Content></Content>
                <ShareingPanel/>
                <UserEntry/>
                <UserList></UserList>
            </div>
        );
    }
}

let root = document.querySelector('#root');

ReactDOM.render(<Index/>, root);
