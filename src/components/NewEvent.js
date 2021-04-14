import React, { Component } from 'react'
import './NewEvent.css'

export class NewEvent extends Component {
  render() {
    return (
      <div className="new-event-wrapper">
        <form action="/" method="post">
          <label className="new-invent-input what">
            <h1>Quoi ?</h1>
            <input type="text" name="what" />
          </label>
          <label className="new-invent-input who">
            <h1>Qui ?</h1>
            <input type="text" name="who" />
          </label>
          <label className="new-invent-input where">
            <h1>Où ?</h1>
            <input type="text" name="where" />
          </label>
          <label className="new-invent-input when">
            <h1>Quand ?</h1>
            <input type="text" name="when" />
          </label>
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    )
  }
}

export default NewEvent
