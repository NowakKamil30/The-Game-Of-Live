import React,{Component}from 'react';
import {connect} from "react-redux";

class Footer extends Component{
    renderFooter(start)
    {
            return(
                <footer
                className={`footer ${start?"footer--invisible":""}`}
                >
                    <p 
                    className={`footer__text ${start?"footer__text--invisible":""}`}
                    >
                    all rights reserved &#9400;
                    </p>
                </footer>
            )
    }
    render(){
        const {start}=this.props
        return(
            this.renderFooter(start)
        )
    }
}

const mapStateToProps=state=>{
    return{
        start: state.mainGame.start
    }

}
export default connect(mapStateToProps)(Footer);