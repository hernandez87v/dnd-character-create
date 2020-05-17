import React from 'react';
import axios from 'axios';
import SignUpShow from '../components/users/signup_show';

export default class SignUp extends React.Component {
  state = {
    name: '',
    nick_name: '',
    email: '',
    password: '',
  };

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleChangeNickName = (event) => {
    this.setState({ nick_name: event.target.value });
  };
  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      nick_name: this.state.nick_name,
      email: this.state.email,
      password: this.state.password,
    };

    axios.post(`/api/user`, { user }).then((res) => {
      console.log(res);
      console.log(res.data);

    });
  };

  render() {
    return (
      <div>
        <SignUpShow />
      </div>
    );
  }
}
