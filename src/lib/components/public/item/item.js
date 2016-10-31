
let React = require('react');
let ReactDOM = require('react-dom');

import item from './item.less';

export default class Item extends React.Component{
    render(){
        let props = this.props.data;
        return(
            <li className={item.item}>
	        	<img src={props.tile_cover} width="200" height="214" />
	        	<div className="post-info">
	        		<div className="post-basic-info">
		        		<h3><a href="#">{props.tile_title}</a></h3>
		        		<span><a href="#"><label> </label>{props.category_name}</a></span>
		        		<p>{props.tile_desc}</p>
	        		</div>
	        		<div className="post-info-rate-share">
	        			<div className="rateit">
	        				<span> </span>
	        			</div>
	        			<div className="post-share">
	        				<span> </span>
	        			</div>
	        			<div className="clear"> </div>
	        		</div>
	        	</div>
	        </li>
        );
    }
}
