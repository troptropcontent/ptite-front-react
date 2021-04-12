import React from 'react'

const Dashboard = (props) => {

  if (props.eventList) {
    const events = props.eventList.map((event)=> <p key={event.id} className="event">{event.name}</p> )
    return (
      <div className="dashboard">
        <h2>Dashboard</h2>
        {events}
      </div>
      )
  }
  
  return (
  <div className="dashboard">
    <h2>Dashboard</h2>
    
  </div>
  )
}

export default Dashboard
