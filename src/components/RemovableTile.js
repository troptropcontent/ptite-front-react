import React, { Component } from 'react'

export class RemovableTile extends Component {
  render() {
    return (
      <div className="tile">
        {this.props.tileContent}
      </div>
    )
  }
}

export default RemovableTile
