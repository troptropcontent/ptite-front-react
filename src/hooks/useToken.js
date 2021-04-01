import { useState } from 'react';

const useToken = () => {
  
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken
  }
  
  const [token, setToken] = useState(getToken());
  // setToken()
  console.log("hello from the login hook"+token)

  const saveToken = userToken => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  }
}
export default useToken