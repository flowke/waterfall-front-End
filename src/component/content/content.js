
let imagesLoaded = require('imagesloaded');
let wookmark = require('wookmark');
let config = require('config/config.json');
let cookie = require('util/cookie.js');

import Item from 'component/item/item.js';
import style from './content.less';

export default class Content extends React.Component{

    constructor(props){
        super(props);
        /*
        * typeList 请求分类数据
         */
        this.state = {
            tileList:  [],
            typeList: null,
            belong: 'All'
        };

        // 修改this绑定
        this.userTile = this.userTile.bind(this);
        this.initTile = this.initTile.bind(this);
        this.handlerScroll = this.handlerScroll.bind(this);
        this.toggleWelcome = this.toggleWelcome.bind(this);
        this.updateTile = this.updateTile.bind(this);
        this.tileEidtState = this.tileEidtState.bind(this);
        this.dropTile = this.dropTile.bind(this);
        this.listClick = this.listClick.bind(this);
        // 控制是否可以发起请求
        // 它在发起一次请求后变成false，state更新后变成true
        this.canReq = true;
        // 用于判断向什么角色发起请求，
        // all代表向全局发起请求，
        // 非all向user发起请求，值代表userid， watch_user
        this.filterRole = 'all' ;
        // category_id, 0 代表全部
        this.filterType = 0;
        this.sortBy = 'TIME';
        this.order = 'DESC';

        this.dropList = [];

        // 分类信息, 它是一个保存dom节点的数组
        this.typeListComps = null;
        //
    }

    tile(data){
        return data.map((elt,i)=>{
            if(elt.thumb_status !=1 ){elt.thumb_status =0;};
            return (<Item key={Math.random().toString().slice(2)} indx={i} handleDrop={this.dropTile} data={elt}/>);
        });
    }
    /* 无状态组件-end */

    // 这是一个初始化请求
    // 它应该在访问首页的时候调用一次
    initTile( msg, args={} ){
        // ajax的请求数据
        this.ajaxData = {
            offset:0,
            limit: 20,
            from_user: cookie.get('user') || 0,
            filterType: args.filterType || this.filterType,
            sortBy: args.sortBy || this.sortBy,
            order: args.order || this.order
        };
        // 路由信息
        this.queryString = 'p=home&c=tile&a=getTile';
        this.canReq = true;
        this.filterRole = 'all' ;

        this.setState({ belong: "All" });

        PubSub.publish('progressLoading');
        this.requestTile(this.ajaxData,(data)=>{
            PubSub.publish('progressLoadingDone');
            if(data.length==0){
                PubSub.publish('globalHint',{ rawText: 'Sharing', endText: 'Nothing at all'});
            }
            data = this.tile(data);
            this.editState = true;

            this.setState({
                tileList: null
            },()=>{
                this.setState({
                    tileList: data
                });
            });
        });
    }

    // 处理查看每个user的tile请求, 在你点击用户的时候调用，需要传入用户的id
    userTile(subName,args){

        if(!args.from_user){
            args.from_user = 0
        }
        this.ajaxData = {
            offset:0,
            limit: 20,
            watch_user: args.watch_user,
            from_user: cookie.get('user'),
            filterType: args.filterType || this.filterType,
            sortBy: args.sortBy || this.sortBy,
            order: args.order || this.order
        };

        this.canReq = true;
        this.filterRole = args.watch_user;

        this.setState({ belong: args.userName || '' });

        // 重置queryString
        this.queryString = 'p=home&c=tile&a=userTile';
        PubSub.publish('progressLoading');
        this.requestTile(this.ajaxData,(data)=>{
            PubSub.publish('progressLoadingDone');

            if(data.length==0){
                PubSub.publish('globalHint',{ rawText: 'Sharing', endText: 'Nothing at all'});
            }
            let length = this.state.tileList.length;
            data = this.tile(data);
            this.setState({
                tileList: null
            },()=>{
                this.setState({
                    tileList: data
                },()=>{
                    if(args.editState && args.editState){
                        PubSub.publish('tileEidtState', {message: true});
                    }
                });
            });
        });
    }

    // 滚动后的tile请求，不需要修改,在state设置好路由就行
    // 它绑定在body上
    handlerScroll(ev){
        let $elem = $(window);
        if(detectScrollBar($elem) && this.canReq){
            // 进度条载入
            PubSub.publish('progressLoading');

            if(this.canQuestTile){
                return;
            }
            this.ajaxData.offset = this.refs.tileWrap.children.length;
            this.ajaxData.limit = 10;
            this.canReq = false;

            this.requestTile(this.ajaxData,(data)=>{
                PubSub.publish('progressLoadingDone');
                if(data.length===0){
                    this.canQuestTile = setTimeout( ()=>{
                        this.canReq = true;
                        this.canQuestTile = null;
                    },2000);
                    return;
                }
                let length = this.state.tileList.length;
                data = this.tile(data);
                let list = this.state.tileList.concat(data);
                this.setState({
                    tileList: list
                },()=>{
                    this.canReq = true;
                });
            });
        }

        //检测属否需要请求
        function detectScrollBar($elem){
            if( $elem.scrollTop() + $elem.height() > $(document).height() - 150 ){
                return true;
            }else{
                return false;
            }
        }
    }
    // 一个通用的tile请求请求,需要传入数据
    updateTile(msg, data){
        this.queryString = 'p=home&c=tile&a=getTile';

        $(this.refs.timeArrow).addClass(style.redColor);
        $(this.refs.thumbArrow).removeClass(style.redColor);

        this.setState({ belong: "All" });
        let length =  this.state.tileList.length;
        data = this.tile(data);

        this.setState( {
            tileList: null
        },()=>{
            setTimeout(()=>{
                this.setState({
                    tileList: data
                },()=>{
                    $(this.refs.tileWrap.children[0]).addClass('f-blingbling');
                });
            },300);
        });

    }

    // 通用的tile请求
    requestTile(data,cb){
        this.editState = false;
        $.ajax({
            url: `${config.url}?${this.queryString}`,
            type: 'POST',
            data: data,
            dataType: `json`,
            success: (data)=>{
                cb && cb(data);
            }
        });
    }
    /* handler for aside */

    typeShow(ev){
        // if(ev.target !== ev.currentTarget){ return };

        $(this.refs.typeList).toggleClass(style.hide);

    }

    listClick(ev){
        if(this.refs.typeName.innerText.toUpperCase() === ev.target.innerText.toUpperCase()){
            return;
        };
        this.refs.typeName.innerText = ev.target.innerText ;
        this.filterType = $(ev.target).data('categoryid');
        if(this.filterRole === 'all'){
            PubSub.publish('initTile',{
                filterType: this.filterType,
                sortBy: this.sortBy,
                order: this.order
            });
        }else{
            PubSub.publish('userTile',{
                watch_user: this.filterRole,
                filterType: this.filterType,
                sortBy: this.sortBy,
                order: this.order,
                userName: this.state.belong
            });
        }


    }

    orderThumbs(ev){
        ev.stopPropagation();
        ev.preventDefault();



        if(ev.target.tagName.toUpperCase() === "I"){
            $(this.refs.thumbArrow).toggleClass('icon-arrow-up2');
            if(this.refs.thumbArrow.onOff = !this.refs.thumbArrow.onOff){
                this.order = 'ASC';
            }else{
                this.order = 'DESC';
            }
            this.refs.thumbArrow.order = this.order;

        }else if (this.sortBy === 'THUMBS') {
            return;
        }

        $(this.refs.thumbArrow).addClass(style.redColor);
        $(this.refs.timeArrow).removeClass(style.redColor);

        this.sortBy = 'THUMBS';

        if(this.filterRole === 'all'){
            PubSub.publish('initTile',{
                filterType: this.filterType,
                sortBy: this.sortBy,
                order: this.refs.thumbArrow.order
            });
        }else{
            PubSub.publish('userTile',{
                watch_user: this.filterRole,
                filterType: this.filterType,
                sortBy: this.sortBy,
                order: this.refs.thumbArrow.order,
                userName: this.state.belong
            });
        }
    }

    orderTime(ev){
        ev.stopPropagation();
        ev.preventDefault();


        if(ev.target.tagName.toUpperCase() === "I"){
            $(this.refs.timeArrow).toggleClass('icon-arrow-up2');
            if(this.refs.timeArrow.onOff = !this.refs.timeArrow.onOff){
                this.order = 'ASC';
            }else{
                this.order = 'DESC';
            }
            this.refs.timeArrow.order = this.order;
        }else if(this.sortBy === 'TIME'){
            return;
        }

        $(this.refs.timeArrow).addClass(style.redColor);
        $(this.refs.thumbArrow).removeClass(style.redColor);

        this.sortBy = 'TIME';

        if(this.filterRole === 'all'){
            PubSub.publish('initTile',{
                filterType: this.filterType,
                sortBy: this.sortBy,
                order: this.refs.timeArrow.order
            });
        }else{
            PubSub.publish('userTile',{
                watch_user: this.filterRole,
                filterType: this.filterType,
                sortBy: this.sortBy,
                order: this.refs.timeArrow.order,
                userName: this.state.belong
            });
        }
    }

    backTohome(){

        PubSub.publish('initTile',{
            filterType: 0,
            sortBy: 'TIME',
            order: 'DESC'
        })
    }


    /* end handler for aside */

    wookmarkLayout(){
        let options = {
            autoResize: true, // This will auto-update the layout when the browser window is resized.
            align: 'center',
            // container: $tiles, // Optional, used for some extra CSS styling
            offset: 20, // Optional, the distance between grid items
            itemWidth:260, // Optional, the width of a grid item
            ignoreInactiveItems: false,
            onLayoutChanged: false,
            direction: 'left'
        };
        let $tiles = $(this.refs.tileWrap);


        $tiles.imagesLoaded()
            .always( ()=>{
                // Destroy the old handler
                if ($tiles.wookmarkInstance) {
                    $tiles.wookmarkInstance.clear();
                }

                // Create a new layout handler.
                // $handler = $('li', $tiles);
                $tiles.wookmark(options);
                $tiles.wookmarkInstance.layout(true);
            } )
            .progress( (instance, image)=>{
                $(image.img).attr('height', image.img.height);
            } );

    }

    toggleWelcome(){
        $(this.refs.content).toggleClass(style.notLogin);
    }
    toggleSpread(ev){
        ev.stopPropagation();
        ev.preventDefault();

        $(this.refs.spreadMenu).toggleClass(style.MenuSpreaded);
        $(this.refs.leftWrap).toggleClass(style.leftSpread);
        $(this.refs.rightWrap).toggleClass(style.rightSpread);
        $(this.refs.icon_cross).toggleClass(style.spreadRotate);
        $(this.refs.outEdit).toggleClass(style.outSpreaded);
        this.wookmarkLayout();

    }

    // 编辑方面的逻辑
	tileEidtState(msg, args){

        if(args.message === true){
            $(this.refs.tileWrap.children).each((i, elt)=>{
                $(elt).css('animation', 'shaking 0.1s '+ Math.random()/5 +'s infinite ease alternate none');
            });
            $(this.refs.outEdit).removeClass(style.hide);
            this.outTileEdit = false;
        }else{
            $(this.refs.tileWrap.children).each((i, elt)=>{
                $(elt).css('animation', '');
            });
            $(this.refs.outEdit).addClass(style.hide);
        }
        PubSub.publish('tileEditUI',{message: args.message});
        this.wookmarkLayout();


	}

    outTileEidt(ev){
        ev.stopPropagation();
        ev.preventDefault();
        if(ev.currentTarget === ev.target){
            PubSub.publish('tileEidtState', {message: false});
        }
    }

    dropTile(indx,tileid){
        this.outTileEdit = false;
        $.ajax({
            url: `${config.url}?h=home&c=tile&a=dropTile`,
            data:{tileid: tileid},
            dataType: 'JSON'
        })
        .done( (data)=>{
            if(data.message === 1){
                PubSub.publish('globalHint',{rawText: 'Sharing', endText: 'Fail to delete'});
            }else if(data.message === 0){
                PubSub.publish('globalHint',{rawText: 'Sharing', endText: 'Drop tile done!'});
                this.state.tileList.splice(indx,1);
                this.setState( {
                    tileList: this.state.tileList
                } );
            }
        } );
    }

    /**
     * react的生命周期函数
     */

    componentWillReceiveProps(nProps){

        // 更新typelist
        // if( !this.typeListComps ){
        //     this.typeListComps = this.typeList(nProps);
        //     this.forceUpdate();
        // }
    }

    componentDidUpdate(){
        this.wookmarkLayout();
        if(this.outTileEdit){
           $(this.refs.outEdit).addClass(style.hide);
        }
        this.outTileEdit = true;

    }

    componentDidMount(){
        $(window).on('scroll', this.handlerScroll);
        // 订阅订阅tile请求
        PubSub.subscribe('userTile',this.userTile);
        PubSub.subscribe('initTile',this.initTile);
        PubSub.subscribe('toggleWelcome', this.toggleWelcome);
        PubSub.subscribe('updateTile', this.updateTile);
        PubSub.subscribe('tileEidtState', this.tileEidtState);
        this.initTile();

        this.outTileEidt = this.outTileEidt.bind(this);
        $(this.refs.timeArrow).addClass(style.redColor);



    }


    render(){

        let {category} = this.props,
            { tileList } = this.state;

        let typeList = category.map((elt,indx)=>{
            return ( <li key={indx} data-categoryid={ elt.category_id } onClick={this.listClick}> {elt.category_name} </li>) ;
        });
        category.unshift(<li key={ Math.random().toString().slice(2) } data-categoryid={0} onClick={this.listClick}>All</li>);

        return(
            <section className={`${style.contentBox}`} ref="content">
                <div className={`${style["g-left"]}`} ref="leftWrap" onClick={this.outTileEidt}>
                    <div className={`${style.layoutWrap}`} onClick={this.outTileEidt}>
                        <ul ref="tileWrap" onClick={this.outTileEidt}>
                            { tileList }
                        </ul>
                    </div>
                </div>
                <div className={`${style["g-right"]}`} ref="rightWrap">
                    <aside className={`${style.aside}`}>
                        <h4 className={`${style.userHint}`} onClick={this.backTohome.bind(this)}>{this.state.belong}</h4>
                        <h3>FILTER BY</h3>
                        <ul className={`${style.sortElement}`}>
                            <li onClick={this.orderThumbs.bind(this)}><span>THUMBS</span> <i className="icon-arrow-down2" ref="thumbArrow"></i></li>
                            <li onClick={ this.typeShow.bind(this) }>
                                TYPE: <span ref="typeName" >All</span>
                                <ul className={`${style.typeList} ${style.hide}`} ref="typeList">
                                    {typeList}
                                </ul>
                            </li>
                            <li onClick={this.orderTime.bind(this)}><span>TIME</span><i className="icon-arrow-down2" ref="timeArrow"></i></li>
                        </ul>
                    </aside>
                </div>
                <span ref="spreadMenu" className={`${style.spreadMenu}`} onClick={this.toggleSpread.bind(this)}>
                    <i className="icon-cross" ref="icon_cross"></i>
                </span>
                <span ref="outEdit" className={`${style.spreadMenu} ${style.outEdit} ${style.hide}`} onClick={this.outTileEidt}>
                    完成
                </span>
            </section>
        );
    }
}
