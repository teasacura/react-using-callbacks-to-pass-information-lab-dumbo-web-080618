import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  updateColor = (color) => {
    this.setState({color: color}, () => console.log(this.state))
  }

  render() {
    // console.log(this.props);
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={() => this.updateColor(this.props.colorChange())}>
      </div>
    )
  }

}
