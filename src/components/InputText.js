import React, { Component } from 'react'


class InputText extends Component
{
    render(){
        return (
            <input
             value={this.props.value}
             onChange={this.props.onChange} 
             placeholder={this.props.placeholder}
             className={this.props.className} 
             type="text"
            />
        )
    }
}

export default InputText;