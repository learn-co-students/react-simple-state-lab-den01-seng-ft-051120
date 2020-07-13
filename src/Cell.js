import React, { Component } from 'react'

export default class Cell extends Component {
  constructor(props) {
    super()
    this.state = {
      color: props.value
    }
  }

  updateState() {
    this.setState({ color: '#333' })
  }
  render() {
    return (
      <div>
        <div className="cell" style={{ backgroundColor: this.state.color }} onClick={updateState}></div>
      </div>
    )
  }
}
