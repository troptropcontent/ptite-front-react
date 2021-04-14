import React, { Component } from 'react'

export class DropDownInput extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      open: false
    }
  }

  handleClick = () => {
    console.log(this.props.name+" has been clicked")
    this.setState({open: !this.state.open})
  }
  

  render() {
    return (
      <div className="drop-down-input">
        <input type={this.props.type} name={this.props.name} onClick={this.handleClick}/>
        <div className="drop-down-propositions">
          <p>Proposition #1</p>
          <p>Proposition #2</p>
          <p>Proposition #3</p>
          <p>Proposition #4</p>
        </div>
      </div>
    )
  }
}

export default DropDownInput
