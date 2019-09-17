import React from 'react';
import InputText from "./InputText";
import Button from "./Button";
import {connect} from "react-redux";
import {borderSizeChange, startGame} from "../action";
class TopMenu extends React.Component{
    onBorderSizeChange= e=>this.props.borderSizeChange(e.target.value);
    startGameClick=start=>this.props.startGame(start);
    renderTopMenu(startRender){
        const {boardSize, start}=this.props;
            return(
                        <nav
                        className={`top_menu ${start?"top_menu--invisible":""}`}
                        >
                            <InputText 
                            onChange={this.onBorderSizeChange} 
                            value={boardSize} 
                            placeholder="board size(size x size)" 
                            className="input top_menu__input"
                            >
                            </InputText>
                            <Button 
                            onClick={()=>{this.startGameClick(start)}}
                            className="button top_menu__button"
                            >
                            {start?"stop":"start"}
                            </Button>
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
        start: state.mainGame.start
    }
}
export default connect(mapStateToProps,{borderSizeChange, startGame})(TopMenu);
