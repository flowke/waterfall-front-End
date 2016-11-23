
let config = require('config/config.json');
let cookie = require('util/cookie.js');

import Validation from 'util/validation.js';

import style from './shareingPanel.less';

export default class ShareingPanel extends React.Component{
	constructor(props){
		super(props);

		this.validation = new Validation();

		this.togglePanelWrap = this.togglePanelWrap.bind(this);
		this.closePanelWrap = this.closePanelWrap.bind(this);
		this.state = {
			type : '请选择一种类型',
			title: '没有标题哦',
			desc: '没有描述',
			img: null,
			category_id:'0'
		};

		// 注册验证
		this.validation.addByValue('title',[
			{strategy: 'isEmpty', errorMsg:'title不能是空'}
		]);
		this.validation.addByValue('desc',[
			{strategy: 'isEmpty', errorMsg:'输入点描述吧'}
		]);
        // 创建category
		this.category = null;
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

				if(data.message == 0){
					$(this.refs.panelWrap).toggle(100);
					PubSub.publish('globalHint',{rawText: 'Sharing', endText: 'Succeed in Sharing'});
					PubSub.publish('updateTile', data.data);


				}else if(data.message == 1){
					this.bubbleHint('先登录哦',this.refs.submitBtn);
				}else if(data.message == 2){
					PubSub.publish('globalHint',{ rawText: 'Sharing', endText: 'Fail to share'});
				}else if (data.message == 3) {
					PubSub.publish('globalHint',{ rawText: 'Sharing', endText: 'Fail to share'});
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
		let form = ev.target;
		// 进入验证步骤
		let msg;

		msg = this.validation.valiOneByValue('title', form.title.value);
		if(msg){
			$(form.title).addClass(style.warning);
		}

		msg = this.validation.valiOneByValue('desc', form.desc.value);
		if(msg){
			$(form.desc).addClass(style.warning);
		}

		if(this.state.category_id == 0){
			$(this.refs.typeWrap).addClass(style.warning);
			msg = true;
		}

		if(this.state.img == null){
			$(this.refs.coverBtn).addClass(style.warning);
			msg = true;
		}

		if(msg){
			return;
		}

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
	togglePanelWrap(ev){
		if(ev.stopPropagation){
			if(ev.target === ev.currentTarget){
				$(this.refs.panelWrap).toggle(180);
			}
			return;
		}

		$(this.refs.panelWrap).toggle(180);

	}
	closePanelWrap(){
		$(this.refs.panelWrap).hide(100);
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

	titleFocus(ev){
		$(ev.target).removeClass(style.warning);
	}
	descFocus(ev){
		$(ev.target).removeClass(style.warning);
	}
	/**
	 * 选择类型后做的动作
	 */
	listClick(ev){
		$(this.refs.typeWrap).removeClass(style.warning);
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

		$(this.refs.coverBtn).removeClass(style.warning);

		let fileList = ev.target.files || ev.dataTransfer.files,
			imgWrap = this.refs.imgWrap,
			img = this.refs.uploadImg;

		let file = fileList[fileList.length-1];

		if(file.type.search(/^image/) == -1){
			PubSub.publish('globalHint',{rawText: 'Sharing', endText: 'Invalid image type'});
			return;
		}

		if(file.size >=2097152){
			PubSub.publish('globalHint',{rawText: 'Sharing', endText: 'Image size overflow'});
			return;
		}



		if(!file){ return; }
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
	//
	bubbleHint(hint, wrap){
		if(this.hintTimer){return;};
		$(wrap).append(`<sapn class="${style.bubbleHint} ${style.ipt} u-bubbleHint">${hint}</span>`);
		this.hintTimer = setTimeout(()=>{
			$('.u-bubbleHint').fadeOut('slow',()=>{
				$('.u-bubbleHint').remove();
				this.hintTimer = null;
			});
		},500);
	}
	/**
	 * 	React 组件生命周期的函数在下方声明
	 */



	componentWillReceiveProps(nextProps){
		if( !this.category ){
			this.category = nextProps.category.map((elt,indx)=>{
				return (<li key={indx} data-categoryid={elt.category_id}  onMouseOut={this.listOut} onMouseOver={this.listIn} onClick={this.listClick.bind(this)}>{elt.category_name}</li>);
			});
			this.forceUpdate();
		}
	}


	componentDidMount(){
		// 订阅分享按钮的点击，header可能会订阅它
		PubSub.subscribe('togglePanelWrap',this.togglePanelWrap);
        // 分享面板的关闭
		PubSub.subscribe('closePanelWrap', this.closePanelWrap);
		// 图片上传动作处理
		this.refs.imgWrap.addEventListener('drop',this.fileUpload.bind(this),false);
		this.refs.imgWrap.addEventListener('dragover',this.imgDragover.bind(this),false);
		this.refs.imgWrap.onclick = ()=>{
			this.refs.file.click();
		}
	}


    render(){
        return (
            <div className={`${style.panelWrap} f-hide`} ref="panelWrap" >
				<div className={`${style.mask}`} onClick={this.togglePanelWrap}></div>
				<div className={`${style.eltWrap}` } onClick={this.togglePanelWrap}>
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
					<div className={`${style.sharePanel} sharePanel`}>
						<div className={``}>
							<form className={`${style.subForm}`} onSubmit={this.submit.bind(this)}>
								<input type="text" placeholder="title" name='title' onChange={(ev)=>{this.setState({title:ev.target.value});}} onFocus={this.titleFocus.bind(this)}/>
								<textarea rows="8" placeholder="说点描述吧" name='desc' onChange={(ev)=>{this.setState({desc:ev.target.value});}} onFocus={this.descFocus.bind(this)}></textarea>
								<div className={`${style.type} type`} onClick={this.typeBoard.bind(this)} ref="typeWrap">
									<div className={`f-clear`}>
										<p ref='typeName'>{this.state.type}</p>
									</div>
									<ul className={`${style.hide} ${style.typeList}`} ref='typeList'>
										{this.category}
									</ul>
								</div>
								<div className={`${style.upload}`} ref="coverBtn">
									上传你的封面
									<input className={style.fadeHide} ref='file' name type="file" onChange={this.fileUpload.bind(this)}/>
								</div>
								<button type='submit' ref="submitBtn">分享～～～</button>
							</form>
						</div>
					</div>

				</div>

			</div>
        );
    }
}
