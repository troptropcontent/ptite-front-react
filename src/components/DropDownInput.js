import React, { Component } from 'react'

export class DropDownInput extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  

  render() {
    return (
      <div className="drop-down-input">
        <input type={this.props.type} name={this.props.name} />
        <div className="drop-down-propositions">
          
        </div>
      </div>
    )
  }
}

export default DropDownInput
