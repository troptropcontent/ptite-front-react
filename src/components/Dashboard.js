import React from 'react'

const Dashboard = (props) => {  
  // the props is passed after the App Component Did Mount so we need to implement a If statement overwyse it will raise an error
  const events = props.eventList ? props.eventList.map((event)=><p key={event.id}>{event.name}</p>) : null
  console.log(events)
  return (
  <div className="dashboard">
    <h2>Dashboard</h2>
    {events}
  </div>
  )
}

export default Dashboard
