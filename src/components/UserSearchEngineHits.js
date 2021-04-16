import React, { Component } from 'react'

export class UserSearchEngineHits extends Component {
  render() {
    const hits = this.props.hitsList 
    const hitsList = hits ? hits.map((hit) => <p>{hit.first_name+" "+hit.last_name}</p>) : null
    
    return (
      <div className="UserSearchEngineHits">
        {hitsList}
      </div>
    )
  }
}

export default UserSearchEngineHits
