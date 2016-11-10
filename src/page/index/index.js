
require('style/gen.css');


import Header from 'components/public/header/header.js'
import Content from 'components/contentBox/content.js'

class Index extends React.Component{
    render(){
        return;
    }
}

let root = document.querySelector('#root');

ReactDOM.render((
    <Index>
        <Header/>
        <Content/>
    </Index>
), root);
