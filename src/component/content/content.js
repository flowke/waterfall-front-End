
let imagesLoaded = require('imagesloaded');
let wookmark = require('wookmark');
let config = require('config/config.json');
let cookie = require('util/cookie.js');

import Item from 'component/item/item.js';
import style from './content.less';

export default class Content extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            tileList: null,
            data: {}
        };
        // 修改this绑定
        this.userTile = this.userTile.bind(this);
        this.initTile = this.initTile.bind(this);
        this.handlerScroll = this.handlerScroll.bind(this);
        this.toggleWelcome = this.toggleWelcome.bind(this);
        // 控制是否可以发起请求
        // 它在发起一次请求后变成false，state更新后变成true
        this.canReq = true;
    }
    // 这是一个初始化请求
    // 它应该在访问首页的时候调用一次
    initTile(){
        // ajax的请求数据
        this.ajaxData = {
            offset:0,
            limit: 20,
            from_user: cookie.get('user') || 0
        };
        // 路由信息
        this.queryString = 'p=home&c=tile&a=getTile';
        this.canReq = true;

        this.requestTile(this.ajaxData,(data)=>{
            data = data.map((elt,i)=>{
                if(elt.thumb_status !=1 ){elt.thumb_status =0;};
                return (<Item key={i} data={elt}/>);
            });

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
            from_user: args.from_user
        };
        this.canReq = true;
        // 重置queryString
        this.queryString = 'p=home&c=tile&a=userTile';
        this.requestTile(this.ajaxData,(data)=>{
            data = data.map((elt,i)=>{
                if(elt.thumb_status !=1 ){elt.thumb_status =0;};
                return (<Item key={i} data={elt}/>);
            });
            this.setState({
                tileList: null
            },()=>{
                this.setState({
                    tileList: data
                });
            });
        });
    }

    // 滚动后的tile请求，不需要修改,在state设置好路由就行
    // 它绑定在body上
    handlerScroll(ev){
        let $elem = $(window);
        console.log(detectScrollBar($elem),this.canReq)
        if(detectScrollBar($elem) && this.canReq){

            this.ajaxData.offset = this.refs.tileWrap.children.length;
            this.ajaxData.limit = 10;
            this.canReq = false;
            this.requestTile(this.ajaxData,(data)=>{
                if(data.length===0){
                    return;
                }
                data = data.map((elt, i)=>{
                    if(elt.thumb_status !=1 ){elt.thumb_status =0;};
                    return (<Item key={Math.random().toString().slice(2)} data={elt}/>);
                });
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

    // 通用的tile请求
    requestTile(data,cb){
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

    wookmarkLayout(){
        let options = {
            autoResize: true, // This will auto-update the layout when the browser window is resized.
            align: 'center',
            // container: $tiles, // Optional, used for some extra CSS styling
            offset: 20, // Optional, the distance between grid items
            itemWidth:260, // Optional, the width of a grid item
            ignoreInactiveItems: false,
            onLayoutChanged: false,
        };
        let $tiles = $(this.refs.tileWrap);
        imagesLoaded($tiles,function() {
            // Destroy the old handler
            if ($tiles.wookmarkInstance) {
                $tiles.wookmarkInstance.clear();
            }

            // Create a new layout handler.
            // $handler = $('li', $tiles);
            $tiles.wookmark(options);
            $tiles.wookmarkInstance.layout(true);
        });
    }

    toggleWelcome(){
        $(this.refs.content).toggleClass(style.notLogin);
    }

    /**
     * react的生命周期函数
     */
    componentDidMount(){
        // 订阅订阅tile请求
        PubSub.subscribe('userTile',this.userTile);
        PubSub.subscribe('initTile',this.initTile);
        PubSub.subscribe('toggleWelcome', this.toggleWelcome);
        this.initTile();
    }

    componentDidUpdate(){
        this.wookmarkLayout();
        $(window).on('scroll', this.handlerScroll);
    }

    render(){
        return(
            <section className={`${style.contentBox}`} ref="content">
                <div className={`${style.layoutWrap}`}>
                    <ul ref="tileWrap">
                        {this.state.tileList}
                    </ul>
                </div>
            </section>
        );
    }
}
