 import style from './item.less';
let cookie = require('util/cookie.js');
let config = require('config/config.json');
export default class Item extends React.Component{

	constructor(props){
		super(props);
		this.thumbStatus = ['icon-heart1','icon-heart2'];
		this.state = {
			star: Number(this.props.data.tile_star),
			starClass: this.thumbStatus[this.props.data.thumb_status]
		};

		this.oldStatus = this.props.data.thumb_status;

		this.requestData = null;
		this.thumbTimer = null;

		this.tileEditUI = this.tileEditUI.bind(this);


	}
	//点赞后的动作
	thumbMe(ev){
		let datas = this.props.data ;
		ev.stopPropagation();
		ev.preventDefault();
		let $wrap = $(ev.currentTarget);
		// 判断是否登陆，否则不能点赞
		if(!cookie.hasIt('user')){
			bubbleHint.call(this,'先登陆哦');
			return;
		}
		// 判断是否为当前用户，当前用户就不能点击
		if( cookie.get('user') == datas.user_id ){
			bubbleHint.call(this,'不能thumb自己');
			return;
		}

		datas.thumb_status = datas.thumb_status == 0 ? 1 : 0;
		let stu = datas.thumb_status == 0 ? -1 : 1;


		this.requestData = {
			user_id: cookie.get('user'),
			tile_id: datas.tile_id,
			status: datas.thumb_status
		};
		this.setState({
			star: this.state.star + stu,
			starClass: this.thumbStatus[datas.thumb_status]
		});
		// 延迟1秒发送请求
		if(!this.requestTimer){
			this.requestTimer = setTimeout(()=>{
				this.requestTimer = null;
				// 查看status是否有实质改动，否则取消请求
				if(datas.thumb_status == this.oldStatus){ return; }
				this.reqThumb(this.requestData,(data)=>{
					this.oldStatus = datas.thumb_status;
					bubbleHint.call(this,'thumb更新成功');
				});
			},1000);
		}

		function bubbleHint(hint){
			if(this.thumbTimer){return;};
			$wrap.append(`<sapn class="u-bubbleHint">${hint}</span>`);
			this.thumbTimer = setTimeout(()=>{
				$('.u-bubbleHint').fadeOut('slow',()=>{
					$('.u-bubbleHint').remove();
					this.thumbTimer = null;
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

	tileEditUI(msg, args){
		if(args.message === true){
			$(this.refs.editIcon).removeClass(style.hide);
			$(this.refs.imgWrap).addClass(style.editHeight);
		}else{
			$(this.refs.editIcon).addClass(style.hide);
			$(this.refs.imgWrap).removeClass(style.editHeight);
		}

	}

	dropTile(ev){
		ev.stopPropagation();
		ev.preventDefault();

		this.props.handleDrop(this.props.indx, $(this.refs.tile).data('tileid') );

	}

	componentDidMount(){
		PubSub.subscribe('tileEditUI',this.tileEditUI);
	}

    render(){
        let props = this.props.data;
        return(
            <li className={`${style.tileWrap} `} data-tileid={props.tile_id} data-indx={this.props.indx} ref='tile'>
                <i className={`${style.editIcon} ${style.hide} icon-cross`} onClick={this.dropTile.bind(this)} ref="editIcon"></i>
				<div ref="imgWrap" className={`${style.imgWrap}`}>
					<img src={props.tile_cover} width="200" height="214" />
				</div>
	        	<div className={`${style.postInfo}`}>
	        		<div className={`${style.basicInfo}`}>
		        		<h3><a href="#">{props.tile_title}</a></h3>
		        		<span><a href="#"><i className={`icon-marker`}> </i>{props.category_name}</a></span>
		        		<p>{props.tile_desc}</p>
	        		</div>
	        		<div className={`${style.rateBar} f-clear`}>
						<a href="#" className={`${style.rate}`} ref="thumb" onClick={this.thumbMe.bind(this)}>
							<i className={this.state.starClass}></i>
							<span>{this.state.star}</span>
						</a>
						<a href="#" className={`${style.author}`}>
							<span>By {props.user_name}</span>
							<i className={`icon-link`}></i>
						</a>
	        		</div>
	        	</div>
	        </li>
        );
    }
}
