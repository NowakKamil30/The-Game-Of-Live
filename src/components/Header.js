import React,{Component} from 'react';
import {connect} from "react-redux";
class Header extends Component{

    renderHeader=(start)=>{

            return(
                <header className={`header ${start?"header--invisible":""}`}>
                <h1 
                className={`header__title ${start?"header__title--invisible":""}`}
                >
                The game of life
                </h1>
            </header>
            )

    }
    render(){
        const{start}=this.props;
        return(
            this.renderHeader(start)
        )
    }
}
const mapStateToProps=state=>{
    return{
        start: state.mainGame.start
    }

}
export default connect(mapStateToProps)(Header);