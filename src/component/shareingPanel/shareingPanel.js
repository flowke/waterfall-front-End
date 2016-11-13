
let config = require('config/config.json');
let cookie = require('util/cookie.js');
import style from './shareingPanel.less';

export default class ShareingPanel extends React.Component{
	constructor(props){
		super(props)
		this.togglePanelWrap = this.togglePanelWrap.bind(this);
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
		$.ajax({
			url: config.url + '?p=home&c=share&a=share',
			type: 'POST',
			processData: false,
		    contentType: false,
			context: this,
			data: data,
			dataType: 'json',
			success: function(data){

				if(data.message === 1){
					return alert('请登陆');
				}

			}
		});
	}
	/**
	 * 点击分享时做的动作,包括调用ajax方法
	 * 表单会触发此submit事件
	 */
	submit(ev){
		ev.preventDefault();
		let panelBox = this.refs.panelWrap,
			form = ev.target;
		$(panelBox).toggle(100);

		let fd = new FormData();
		fd.append('title',form.title.value);
		fd.append('desc',form.desc.value);
		fd.append('category_id',this.state.category_id);
		fd.append('img',this.state.img);
		fd.append('user_id',cookie.get('user'));

		this.ajaxRequest(fd);
	}

	/**
	 * 点击分享按钮时，它会在header里被发布
	 * toggle分享面板的处理函数
	 */
	togglePanelWrap(){
		$(this.refs.panelWrap).toggle(180);
	}
	// tile类型的显示和隐藏
	typeBoard(){
		$(this.refs.typeList).toggle(200);
	}
	// 鼠标在分类上hover
	listIn(event){
		$(event.target).addClass(style.active);
	}
	// 鼠标在分类上leave
	listOut(event){
		$(event.target).removeClass(style.active);
	}


	/**
	 * 选择类型后做的动作
	 */
	listClick(ev){
		this.setState({
			type: ev.target.innerText,
			category_id: ev.target.dataset.categoryid
		});
		$(this.refs.typeList).toggleClass(style.hide);
		ev.target.className = style.active;
	}
	// 上传图片前的处理动作
	// 会在file input 点击的时候被change的时候被触发
	// 会在图片拖入的时候触发
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

		$(img).removeClass(style.hide);
		$(this.refs.imgHint).addClass(style.hide);

	}
	// 防止打开图片
	imgDragover(ev){
		ev.stopPropagation();
		ev.preventDefault();
	}
	/**
	 * 	React 组件生命周期的函数在下方声明
	 */
	componentDidMount(){
		// 订阅分享按钮的点击，header可能会订阅它
		PubSub.subscribe('togglePanelWrap',this.togglePanelWrap);

		// 图片上传动作处理
		this.refs.imgWrap.addEventListener('drop',this.fileUpload.bind(this),false);
		this.refs.imgWrap.addEventListener('dragover',this.imgDragover.bind(this),false);
		this.refs.imgWrap.onclick = ()=>{
			this.refs.file.click();
		}

		//请求分类信息
		$.ajax({
			url: `${config.url}?h=home&c=category&a=getCategory`,
			dataType: 'json',
			success: (data)=>{
				data = data.map((elt,indx)=>{
					return (<li key={indx} data-categoryid={elt.category_id}  onMouseOut={this.listOut} onMouseOver={this.listIn} onClick={this.listClick.bind(this)}>{elt.category_name}</li>);
				});
				this.setState({typeList: data});
			}
		});
	}
    render(){
        return (
            <div className={`${style.panelWrap} f-hide`} ref="panelWrap">
				<div className={`${style.mask}`} onClick={this.togglePanelWrap}></div>
				<div className={`${style.sharePanel} sharePanel`}>
					<div className={``}>
						<form className={`${style.subForm}`} onSubmit={this.submit.bind(this)}>
							<input type="text" placeholder="title" name='title' onChange={(ev)=>{this.setState({title:ev.target.value});}}/>
							<textarea rows="8" placeholder="说点描述吧" name='desc' onChange={(ev)=>{this.setState({desc:ev.target.value});}}></textarea>
							<div className={`${style.type} type`} onClick={this.typeBoard.bind(this)}>
								<div className={`f-clear`}>
									<p ref='typeName'>{this.state.type}</p>
								</div>
								<ul className={`${style.hide} ${style.typeList}`} ref='typeList'>
									{this.state.typeList}
								</ul>
							</div>
							<div className={`${style.upload}`}>
								上传你的封面
								<input className={style.fadeHide} ref='file' name type="file" onChange={this.fileUpload.bind(this)}/>
							</div>
							<button type='submit'>分享～～～</button>
						</form>
					</div>
				</div>
				<div className={`${style.tilePreview} tilePreview`}>
					<div className={`${style.imgWrap} imgWrap`} ref='imgWrap' onDrop={this.fileUpload.bind(this)}>
						<div className={`${style.imgHint}`} ref='imgHint'>可以把图片拖拽到这里，不大于2M</div>
						<img src='' ref='uploadImg' className={`${style.hide}`}/>
					</div>
					<div className={`${style.postInfo}`}>
						<div className={`${style.basicInfo}`}>
							<h3><a href="#">{this.state.title}</a></h3>
							<span><a href="#"><label> </label>{this.state.type}</a></span>
							<p>{this.state.desc}</p>
                        </div>
                        <div className={`${style.rateBar} f-clear`}>
                            <a href="#" className={`${style.rate}`} ref="thumb">
                                <i className={`icon-heart1`}></i>
                                <span>0</span>
                            </a>
                            <a href="#" className={`${style.author}`}>
                                <span>By You</span>
                                <i className={`icon-link`}></i>
                            </a>
                        </div>
					</div>
				</div>
			</div>
        );
    }
}
