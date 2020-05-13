import React, {  useState } from 'react';
import SignIn from '../components/signin';

const Login = () => {
  const [login , setLogin] = useState({login:  false})
  return (
    <div className="App">
      <SignIn login={login} setLogin = {setLogin}/>
    </div>
  );
};

export default Login;
