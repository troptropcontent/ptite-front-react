const fetchUserSearchHits = (token,query, setHitsList) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch(`http://localhost:4000/api/v1/users?query=${query}`, requestOptions)
    .then(response => response.json())
    .then(result => setHitsList(result))
    .catch(error => console.log('error', error));  
}

export default fetchUserSearchHits