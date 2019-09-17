import React from "react";

const BoardElement = props=>{
return(
    <div className={`board__element board__element--${props.active?"active":"inactive"}`}>
    </div>
)
}
export default BoardElement;