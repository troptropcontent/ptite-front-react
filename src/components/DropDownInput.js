import React, { Component } from 'react'
import "./DropDown.css"

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
    const dropDownPropositions = this.state.open ? "drop-down-propositions open" : "drop-down-propositions"
    return (
      <div className="drop-down-input">
        <input type={this.props.type} name={this.props.name} onClick={this.handleClick}/>
        <div className={dropDownPropositions} >
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
