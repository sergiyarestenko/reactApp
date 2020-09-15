import React, { Component } from 'react';

class Button extends Component {
    handleClick(e) {
        e.preventDefault();
        
        console.log('handleClick');
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                handleClick
            </button>
        )
    }
}

export default Button
