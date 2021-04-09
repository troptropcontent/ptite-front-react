const login = (username,password,setToken) => {
  // request exported from postman

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
  "email": "test3@test.com",
  "password": "passwordtest"
  });

  const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
  };

  fetch("http://localhost:4000/api/v1/login", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  }

export default login
