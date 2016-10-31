
require('style/style.css');
require('style/main.css');

let React = require('react');
let ReactDOM = require('react-dom');

import Header from 'components/public/header/header.js'
import Content from 'components/contentBox/content.js'

class Index extends React.Component{
    render(){
        return(
            <div id="index">
                <Header/>
                <Content/>
            </div>
        );
    }
}

let root = document.querySelector('#root');

ReactDOM.render(<Index />, root);
