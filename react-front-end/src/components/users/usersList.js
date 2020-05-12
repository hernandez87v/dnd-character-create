import React from 'react';
import axios from 'axios';

export default class UserList extends React.Component {
  state = {
    users: [],
    isLoading: true,
    errors: null,
  };
  getUsers() {
    axios
      .get('/api/user')
      .then((response) => {
        this.setState({
          users: response.data.user,
          isLoading: false,
        });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }
  componentDidMount() {
    this.getUsers();
  }
  render() {
    const { isLoading, users } = this.state;
    return (
      <React.Fragment>
        <h2>Random Post</h2>
        <div>
          {!isLoading ? (
            users.map((user) => {
              const { id, name, email, nick_name, password } = user;
              return (
                <div key={id}>
                  <h2>{name}</h2>
                  <p>{email}</p>
                  <p>{nick_name}</p>
                  <p>{password}</p>
                  <hr />
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </React.Fragment>
    );
  }
}
