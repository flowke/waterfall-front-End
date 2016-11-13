
import style from './welcomePanel.less';


export default class WelcomePanel extends React.Component{

    loginClick(){
        PubSub.publish('userClick', {panel: 'signin'});
    }

    render(){
        return (
            <div className={`${style.hintPanel}`}>
                <h1 className={`${style.hintTitle}`}>分享你心中的世界</h1>
                <span className={`${style.loginBtn} u-btn`} onClick={this.loginClick}>注 册</span>
            </div>
        );
    }
}
