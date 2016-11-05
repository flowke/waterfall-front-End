
import item from './item.less';
let cookie = require('util/cookie.js');
let config = require('config/config.json');
export default class Item extends React.Component{

	constructor(props){
		super(props);
		this.thumbStatus = ['icon-heart1','icon-heart2'];
		this.state = {
			star: Number(this.props.data.tile_star),
			starClass: this.thumbStatus[this.props.data.thumb_status],
			oldStatus: this.props.data.thumb_status,
			newStatus: this.props.data.thumb_status
		};
		this.timer = null;
		this.requestData = null;
	}

	handleThumb(ev){
		let datas = this.props.data ;
		ev.stopPropagation();
		ev.preventDefault();
		let $wrap = $(ev.currentTarget);
		// 判断是否登陆，否则不能点赞
		if(!cookie.hasIt('user')){
			bubbleHint('先登陆哦');
			return;
		}
		// 判断是否为当前用户，当前用户就不能点击
		if( cookie.get('user') == datas.user_id ){
			bubbleHint('不能thumb自己');
			return;
		}

		datas.thumb_status = datas.thumb_status == 0 ? 1 : 0;
		let stu = datas.thumb_status == 0 ? -1 : 1;
		this.setState({
			star: this.state.star + stu,
			starClass: this.thumbStatus[datas.thumb_status]
		});

		this.requestData = {
			user_id: cookie.get('user'),
			tile_id: datas.tile_id,
			status: datas.thumb_status
		};

		// 延迟两秒发送请求
		if(!this.timer){
			this.timer = setTimeout(()=>{
				this.timer = null;
				console.log(this);
				// 查看status是否有实质改动，否则取消请求
				if(datas.thumb_status === this.state.oldStatus){ return; }

				this.reqThumb(this.requestData);
			},1000);
		}


		function bubbleHint(hint){
			$wrap.append(`<sapn class="f-bubbleHint">${hint}</span>`);
			setTimeout(()=>{
				$('.f-bubbleHint').fadeOut('slow',()=>{
					$('.f-bubbleHint').remove();
				});
			},300);
		}

	}
	//进行更新thumb时的请求
	reqThumb(data,cb){
		$.ajax({
			url:`${config.url}?p=home&c=tile&a=updThumb`,
			type: `POST`,
			data: data,
			success:(data)=>{
				cb && cb(data);
			}
		});
	}

	componentDidUpdate(){

	}

    render(){
        let props = this.props.data;
        return(
            <li className={item.item} data-tileid={props.tile_id} ref='tile'>
	        	<img src={props.tile_cover} width="200" height="214" />
	        	<div className="post-info">
	        		<div className="post-basic-info">
		        		<h3><a href="#">{props.tile_title}</a></h3>
		        		<span><a href="#"><i className={`icon-marker`}> </i>{props.category_name}</a></span>
		        		<p>{props.tile_desc}</p>
	        		</div>
	        		<div className={`${item.rateBar} post-info-rate-share f-clear`}>
						<a href="#" className={`${item.rate}`} ref="thumb" onClick={this.handleThumb.bind(this)}>
							<i className={this.state.starClass}></i>
							<span>{this.state.star}</span>
						</a>
						<a href="#" className={`${item.author}`}>
							<span>By {props.user_name}</span>
							<i className={`icon-link`}></i>
						</a>
	        		</div>
	        	</div>
	        </li>
        );
    }
}
