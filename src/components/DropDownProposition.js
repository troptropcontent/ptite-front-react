import React, { Component } from 'react'
import "./DropDownProposition.css"

export class DropDownProposition extends Component {
  render() {
    return (
      <div className="DropDownProposition">
        <div className="DropDownProposition-Photo">
          {this.props.group.photo}
        </div>
        <div className="DropDownProposition-Name">
          {this.props.group.name}
        </div>
      </div>
    )
  }
}

export default DropDownProposition
