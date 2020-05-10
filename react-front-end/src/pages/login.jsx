import React from 'react';
import UserLIst from '../components/users/usersList';
import SignIn from '../components/signin';
const Login = () => {
  return (
    <div className="App">
      <ul>
        <SignIn />
        <UserLIst />
      </ul>
    </div>
  );
};

export default Login;
