const login = (username,password,setToken) => {
  // request exported from postman
  console.log("Hello from LogIn service")
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
  "email": `${username}`,
  "password": `${password}`
  });

  const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
  };

  fetch("http://localhost:4000/api/v1/login", requestOptions)
  .then(response => response.json())
  .then(result => {console.log(result)
                  setToken(result)}
  )
  .catch(error => console.log('error', error));

  }

export default login
