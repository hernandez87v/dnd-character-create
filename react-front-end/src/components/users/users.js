import React from 'react';
import axios from 'axios';

export default class UserList extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get(`/api/user`)
      .then(res => {
        // const users = res.data;
        console.log("users test", res)
        this.setState({ users: res.data });
      })
  }

  render() {
    return (
      <ul>
        <li>{console.log('test',this.state.users)}</li>
       <li>{this.state.users.name}</li>
       {/* { this.state.users.map(user => <li>{user.name}</li>)} */}
      </ul>
    )
  }
}