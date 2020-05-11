import React from 'react';
import SignIn from '../components/signin';
import AppBar from '../components/navbar';

const Login = () => {
  return (
    <div className="App">
      <AppBar />
      <SignIn />
    </div>
  );
};

export default Login;
