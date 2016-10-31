let React = require('react');
let ReactDOM = require('react-dom');

let config = require('config/config.json');

import Item from 'components/public/item/item.js';
import content from './content.less';



export default class Content extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            tileList: [],
            canReq: true
        };
    }

    componentDidMount(){
        let data = {
            offset:0,
            limit: 20
        };
        this.requestTile(data,(data)=>{
            let list = [];
            data.forEach((elt,i)=>{
                list.push(<Item key={i} data={elt}/>)
            })
            this.setState({
                tileList: list
            },this.wookmarkLayout);
        });
    }
    // 请求tile
    requestTile(data,cb){
        $.ajax({
            url: `${config.url}?p=home&c=tile&a=getTile`,
            type: 'POST',
            data: data,
            dataType: `json`,
            success: cb
        });
    }

    handlerScroll(ev){
        let $elem = $(ev.target);
        let data = {
            offset: this.refs.tileWrap.children.length,
            limit: 10
        };
        if(detectScrollBar($elem) && this.state.canReq){
            this.state.canReq = false;
            this.requestTile(data,(data)=>{
                this.state.canReq = true;
                if(data.length===0){
                    return;
                }
                data = data.map((elt, i)=>{
                    return (<Item key={Math.random().toString().slice(2)} data={elt}/>);
                });
                let list = this.state.tileList.concat(data);
                this.setState({
                    tileList: list,
                    canReq: true
                },this.wookmarkLayout);

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
            $tiles.wookmarkInstance.layout(true)
        });
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
