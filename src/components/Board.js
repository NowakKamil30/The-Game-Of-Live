import React,{Component} from 'react';
import BoardElement from "./BoardElement";
import {connect} from "react-redux";
import {game} from "../action/index";

class Board extends Component
{
    getBoardTable=()=>this.props.game();
    boardCreation=(array)=>array.map((elements,i)=>elements.map((element,index)=><BoardElement active={element}  position={i+""+index} key={i+""+index}/>));


     componentDidMount() {
        this.timer= setInterval(()=>{this.getBoardTable();},1000);
     }
     componentWillUnmount()
     {
         clearInterval(this.timer);
     }

    render(){
        return(
            <div className="board">
                {this.boardCreation(this.props.board)}
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        board: state.mainGame.board,
    }
} 
export default connect(mapStateToProps,{game})(Board);