
let React = require('react');
let ReactDOM = require('react-dom');

import App from 'components/hello/app.js'

let Hello = React.createClass({
    render: function() {
        return <div><App />2dfds22</div>
    }
});

var div1 = document.createElement('div');
document.body.appendChild(div1);

ReactDOM.render(<Hello />, div1);