import React, { Component } from 'react'
import "./DropDownInput.css"
import DropDownProposition from './DropDownProposition'
import DropDownCreateNew from './DropDownCreateNew'

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
          <DropDownProposition group={{name: "group 1", photo: "photo 1"}}/>
          <DropDownProposition group={{name: "group 2", photo: "photo 2"}}/>
          <DropDownProposition group={{name: "group 3", photo: "photo 3"}}/>
          <DropDownProposition group={{name: "group 4", photo: "photo 4"}}/>
          <DropDownProposition group={{name: "group 5", photo: "photo 5"}}/>
          <DropDownProposition group={{name: "group 6", photo: "photo 6"}}/>
          <DropDownCreateNew/>
        </div>
      </div>
    )
  }
}

export default DropDownInput
