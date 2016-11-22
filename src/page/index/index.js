let config = require('config/config.json');
require('style/gen.css');


import Header from 'component/header/header.js';
import Content from 'component/content/content.js';
import WelcomePanel from 'component/welcomePanel/welcomePanel.js';
import ShareingPanel from 'component/shareingPanel/shareingPanel.js';
import UserEntry from 'component/userEntry/userEntry.js';
import UserList from 'component/userList/userList.js';

class Index extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            category: []
        }
    }

    componentDidMount(){
        //请求分类信息
        $.ajax({
            url: `${config.url}?h=home&c=category&a=getCategory`,
            dataType: 'json'
        })
        .done( (data)=>{
            this.setState({ category: data });
        } );
    }

    render(){

        return (
            <div id="index">
                <Header></Header>
                <WelcomePanel/>
                <Content category={this.state.category}></Content>
                <ShareingPanel category={this.state.category}/>
                <UserEntry/>
                <UserList></UserList>
            </div>
        );
    }
}

let root = document.querySelector('#root');

ReactDOM.render(<Index/>, root);
