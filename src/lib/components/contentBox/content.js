
let config = require('config/config.json');
let cookie = require('util/cookie.js');
import Item from 'components/public/item/item.js';
import content from './content.less';

let imagesLoaded = require('imagesloaded');
let wookmark = require('wookmark');

export default class Content extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            tileList: [],
            data: {}
        };
        // 修改this绑定
        this.userTile = this.userTile.bind(this);
        this.initTile = this.initTile.bind(this);
        this.canReq = true;

    }

    componentDidMount(){
        // 订阅userTile
        PubSub.subscribe('userTile',this.userTile);
        PubSub.subscribe('initTile',this.initTile);
        this.initTile();
    }

    initTile(){
        let data = {
            offset:0,
            limit: 20,
            from_user: cookie.get('user') || 0
        };
        this.queryString = 'p=home&c=tile&a=getTile';

        this.requestTile(data,(data)=>{
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
        let data = {
            offset:0,
            limit: 20,
            watch_user: args.watch_user,
            from_user: args.from_user
        };
        // 重置queryString
        this.queryString = 'p=home&c=tile&a=userTile';

        this.requestTile(data,(data)=>{
            data = data.map((elt,i)=>{
                if(elt.thumb_status !=1 ){elt.thumb_status =0;};
                console.log(elt)
                return (<Item key={i} data={elt}/>);
            });
            this.setState({
                tileList: data
            });
        });
    }

    // 通用的tile请求
    requestTile(data,cb){
        $.ajax({
            url: `${config.url}?${this.queryString}`,
            type: 'POST',
            data: data,
            dataType: `json`,
            success: cb
        });
    }
    // 滚动后的tile请求，不需要修改,在state设置好路由就行
    handlerScroll(ev){
        let $elem = $(ev.target);
        let data = {
            offset: this.refs.tileWrap.children.length,
            limit: 10
        };
        if(detectScrollBar($elem) && this.state.canReq){
            this.canReq = false;
            this.requestTile(data,(data)=>{
                this.canReq = true;
                if(data.length===0){
                    return;
                }
                data = data.map((elt, i)=>{
                    if(elt.thumb_status !=1 ){elt.thumb_status =0;};
                    return (<Item key={Math.random().toString().slice(2)} data={elt}/>);
                });
                let list = this.state.tileList.concat(data);
                this.setState({
                    tileList: list,
                    canReq: true
                });

            });
        }

        //检测属否需要请求
        function detectScrollBar($elem){
            if( $elem.scrollTop() + $elem.height() > $elem.prop('scrollHeight') - 150 ){
                return true;
            }else{
                return false;
            }
        }
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
    componentDidUpdate(){
        this.wookmarkLayout();
    }

    render(){
        return(
            <div className={`${content.content} content`} onScroll={this.handlerScroll.bind(this)}>
			    <div className="wrap">
			        <div id="main" className={content.main} role="main">
                        <ul id="tiles" ref='tileWrap' className={content.tiles}>
                            {this.state.tileList}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
