import React from 'react';
import axios from 'axios';

export default class UserList extends React.Component {
  // State will apply to the users object which is set to loading by default
  state = {
    users: [],
    isLoading: true,
    errors: null,
  };
  getUsers() {
    axios
      // This is where the data is hosted
      .get('/api/user')
      // Once we get a response and store data, let's change the loading state
      .then((response) => {
        this.setState({
          users: response.data.user,
          isLoading: false,
        });
      })
      // If we catch any errors connecting, let's update accordingly
      .catch((error) => this.setState({ error, isLoading: false }));
  }
  // Let's our app know we're ready to render the data
  componentDidMount() {
    this.getUsers();
  }
  // Putting that data to use
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
