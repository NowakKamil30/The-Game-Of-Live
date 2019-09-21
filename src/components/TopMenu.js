import React from 'react';
import InputText from "./InputText";
import Button from "./Button";
import {connect} from "react-redux";
import {borderSizeChange,
        startGame,
        resetGame} from "../action";
class TopMenu extends React.Component{
    onBorderSizeChange= e=>this.props.borderSizeChange(e.target.value);
    startGameClick=start=>this.props.startGame(start);
    resetGameClick=()=>this.props.resetGame();
    showMenu=(start,show,mobile)=>{
        console.log("m",mobile);
        if(mobile)
        {
            return true
        }
        if(!start)
        {
            return true;
        }
        else if(show)
        {
            return true;
        }
        return false;
    }
    renderTopMenu(){
        const {boardSize, start,show,mobile}=this.props;
            return(
                    <nav
                    className={`top_menu ${this.showMenu(start,show,mobile)?"":"top_menu--invisible"}`}
                    >
                        <InputText 
                        onChange={this.onBorderSizeChange} 
                        value={boardSize} 
                        placeholder={`max size: ${mobile?"50":"99"}`} 
                        className="input top_menu__input"
                        >
                        </InputText>
                        <div className="top_menu__button-container">
                            <Button 
                            onClick={()=>{this.startGameClick(start)}}
                            className="button top_menu__button"
                            >
                            {start?"stop":"start"}
                            </Button>
                            {start?
                            <Button
                            className="button top_menu__button"
                            onClick={this.resetGameClick}
                            >
                            reset
                            </Button>:null}
                        </div>
                    </nav>
            )
    }


    render(){
        const {start}=this.props;
    return(
     this.renderTopMenu(start)
    )
    }
}   
const mapStateToProps=state=>{
    return{
        boardSize: state.mainGame.boardSize,
        start: state.mainGame.start,
        show: state.showMenu.showTopMenu,
        mobile: state.mainGame.mobile
    }
}
export default connect(mapStateToProps,{borderSizeChange, startGame, resetGame})(TopMenu);
