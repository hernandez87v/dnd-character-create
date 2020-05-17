import React, {  useState } from 'react';
import SignIn from '../components/signin';

const Login = (props) => {
  if (props.loginState.login !== true) {
  return (
    <div className="App">
      <SignIn login={props.loginState} setLogin = {props.setLogin}/>
    </div>
  );
  } else {
   return ( <p>hi!</p>)
  }
};

export default Login;
