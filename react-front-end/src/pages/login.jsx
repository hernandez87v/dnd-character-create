import React, {  useState } from 'react';
import SignIn from '../components/signin';

const Login = (props) => {
console.log('login.jsx page',props.loginState)
  return (
    <div className="App">
      <SignIn login={props.loginState} setLogin = {props.setLogin}/>
    </div>
  );
};

export default Login;
