import React,{Component} from "react";

class BoardElement extends Component{


    render(){
        return(
            <div 
            className={`board__element board__element--${this.props.active?"active":"inactive"}`}>
            </div>
        )
        }
}

export default BoardElement;