const logIn = (username,password,functionSetToken) => {
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "email": `${username}`,
  "password": `${password}`
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:4000/api/v1/login", requestOptions)
  .then(response => response.json())
  .then(result => {
    functionSetToken(result.token)
  })
  .catch(error => console.log('error', error));
}
export default logIn