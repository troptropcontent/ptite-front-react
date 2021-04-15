import React, { Component } from 'react'
import { PlusCircle } from 'react-feather';
import "./DropDownCreateNew.css"

export class DropDownCreateNew extends Component {
  render() {
    return (
      <a classNme="DropDownCreateNew-link" href="/groups/new">
        <div className="DropDownCreateNew-wrapper">
          <div className="DropDownCreateNew-icon">
            <PlusCircle/>
          </div>
          <div className="DropDownCreateNew-text">
            <p>Create Group</p>
          </div>
        </div>
      </a>
    )
  }
}

export default DropDownCreateNew
