
let config = require('config/config.json');

import panel from './panel.less';

export default class SharingPanel extends React.Component{

	constructor(props){
		super(props)
		this.handleTogglePanel = this.handleTogglePanel.bind(this);
		this.state = {
			type : '请选择一种类型',
			typeList: null,
			title: '没有标题哦',
			desc: '没有描述',
			img: null,
			category_id:'0'
		};
	}
	/**
	 * 点击分享时候所发起的ajax请求
	 */
	ajaxRequest(data){
		console.log(data);
		$.ajax({
			url: config.url + '?p=home&c=share&a=share',
			type: 'POST',
			processData: false,
		    contentType: false,
			context: this,
			data: data,
			dataType: 'json',
			success: function(data){
				console.log(data)
				if(data.message === '1'){
					return alert('请登陆');
				}

			}
		});
	}
	/**
	 * 点击分享时做的动作,包括调用ajax方法
	 */
	submit(ev){
		ev.preventDefault();
		let panelBox = this.refs.panel,
			form = ev.target;
		$(panelBox).toggleClass(panel.hide);

		let fd = new FormData();
		fd.append('title',form.title.value);
		fd.append('desc',form.desc.value);
		fd.append('category_id',this.state.category_id);
		fd.append('img',this.state.img);
		fd.append('user_id',this.props.userid);

		this.ajaxRequest(fd);
	}
	/**
	 * 点击关闭按钮时
	 * 隐藏分享面板的处理函数
	 */
	handleTogglePanel(){
		$(this.refs.panel).toggleClass(panel.hide);
	}
	// tile类型的显示和隐藏
	typeBoard(){
		$(this.refs.typeList).toggle(200);
	}

	listIn(event){
		$(event.target).addClass(panel.active);
	}

	listOut(event){
		$(event.target).removeClass(panel.active);
	}
	/**
	 * 选择类型后做的动作
	 */
	listClick(ev){
		this.setState({
			type: ev.target.innerText,
			category_id: ev.target.dataset.categoryid
		});
		$(this.refs.typeList).toggleClass(panel.hide);
		ev.target.className = panel.active;
	}
	// 上传图片
	fileUpload(ev){
		// 阻止文件打开
		ev.stopPropagation();
		ev.preventDefault();
		let fileList = ev.target.files || ev.dataTransfer.files,
			imgWrap = this.refs.imgWrap,
			img = this.refs.uploadImg;

		let file = fileList[fileList.length - 1];

		this.setState({img: file});

		img.src = window.URL.createObjectURL(file);

		img.onload = function(ev){
			window.URL.revokeObjectURL(this.src);
		}

		$(img).removeClass(panel.hide);
		$(this.refs.imgHint).addClass(panel.hide);

	}
	// 防止打开图片
	imgDragover(ev){
		ev.stopPropagation();
		ev.preventDefault();
	}

	componentDidMount(){

		this.refs.imgWrap.addEventListener('drop',this.fileUpload.bind(this),false);
		this.refs.imgWrap.addEventListener('dragover',this.imgDragover.bind(this),false);
		this.refs.imgWrap.onclick = ()=>{
			this.refs.file.click();
		}

		//请求分类
		let list = [];
		$.ajax({
			url: `${config.url}?h=home&c=category&a=getCategory`,
			dataType: 'json',
			success: (data)=>{
				console.log(data);
				data.forEach(function(item, indx){
					list.push(<li key={indx} data-categoryid={item.category_id}  onMouseOut={this.listOut} onMouseOver={this.listIn} onClick={this.listClick.bind(this)}>{item.category_name}</li>)
				} ,this);
				this.setState({typeList: list});
			}
		});

	}


    render(){

		return(
			<div className={`${panel.wrap} ${panel.hide}`} ref="panel">
				<div className={`${panel.mask}`}></div>
				<div className={`${panel.sharePanel} sharePanel`}>
					<div className={``}>
						<form className={`${panel.subForm}`} onSubmit={this.submit.bind(this)}>
							<input type="text" placeholder="title" name='title' onChange={(ev)=>{this.setState({title:ev.target.value});}}/>
							<textarea rows="8" placeholder="说点描述吧" name='desc' onChange={(ev)=>{this.setState({desc:ev.target.value});}}></textarea>
							<div className={`${panel.type} type`} onClick={this.typeBoard.bind(this)}>
								<div className={`f-clear`}>
									<p ref='typeName'>{this.state.type}</p>
								</div>
								<ul className={`${panel.hide} list`} ref='typeList'>
									{this.state.typeList}
								</ul>
							</div>
							<div className={`${panel.upload}`}>
								上传你的封面
								<input className={panel.fadeHide} ref='file' name type="file" onChange={this.fileUpload.bind(this)}/>
							</div>
							<button type='submit'>分享～～～</button>
						</form>
					</div>
				</div>
				<div className={`${panel.tile} tilePreview`}>
					<div className={`${panel.imgWrap} imgWrap`} ref='imgWrap' onDrop={this.fileUpload.bind(this)}>
						<div className={`${panel.imgHint}`} ref='imgHint'>可以把图片拖拽到这里，不大于2M</div>
						<img src='' ref='uploadImg' className={`${panel.hide}`}/>
					</div>
					<div className="post-info">
						<div className="post-basic-info">
							<h3><a href="#">{this.state.title}</a></h3>
							<span><a href="#"><label> </label>{this.state.type}</a></span>
							<p>{this.state.desc}</p>
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
				</div>
			</div>
		);
    }
}
