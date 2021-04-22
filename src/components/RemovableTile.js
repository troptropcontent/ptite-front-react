import React, { Component } from 'react'
import { X } from 'react-feather';
import './RemovableTile.css'

export class RemovableTile extends Component {
  handleClick = () => {
    this.props.crossFunction(this.props.itemId)
  }

  render() {
    return (
      <div className="tile">
        <X onClick={this.handleClick}/>
        {this.props.tileContent}
      </div>
    )
  }
}

export default RemovableTile
