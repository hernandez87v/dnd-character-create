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
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <br />
            <input type="text" name="name" onChange={this.handleChangeName} />
            <br />
          </label>
          <label>
            Nick Name:
            <br />
            <input
              type="text"
              nick_name="nick_name"
              onChange={this.handleChangeNickName}
            />
            <br />
          </label>
          <label>
            Email:
            <br />
            <input
              type="text"
              email="email"
              onChange={this.handleChangeEmail}
            />
            <br />
          </label>
          <label>
            Password:
            <br />
            <input
              type="password"
              password="password"
              onChange={this.handleChangePassword}
            />
            <br />
          </label>
          <button type="submit">create</button>
        </form>
      </div>
    );
  }
}
