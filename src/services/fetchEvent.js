const fetchEvent = (setEventList, token) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("http://localhost:4000/api/v1/events", requestOptions)
    .then(response => response.json())
    .then(result => {
      setEventList(result.events)
    })
    .catch(error => console.log('error', error));  


}

export default fetchEvent
