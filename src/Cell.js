import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props){
        //console.log(props.value)
        super()
        this.state = {
            color: props.value
        }
    }

    colorChange = () => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        //console.log(this.props.value)
        return <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.colorChange}></div>
    }
}

export {Cell}