import React, { Component } from 'react'
import UserSearchEngineHitsCheckBox from './UserSearchEngineHitsCheckBox'

export class UserSearchEngineHits extends Component {
  render() {
    const hits = this.props.hitsList 
    const hitsList = hits ? hits.map((hit) => <UserSearchEngineHitsCheckBox hit={hit}/>) : null
    
    return (
      <div className="UserSearchEngineHits">
        {hitsList}
      </div>
    )
  }
}

export default UserSearchEngineHits
