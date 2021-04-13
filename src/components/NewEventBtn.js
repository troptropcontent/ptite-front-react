import React from 'react'
import { PlusCircle } from 'react-feather';
import './NewEventBtn.css'

const NewEventBtn = () => {
  return (
    <div className="newEventBtn">
      <a href="/events/new">
        <PlusCircle size={48} color="#28527a"/>
      </a>
    </div>
  )
}

export default NewEventBtn
