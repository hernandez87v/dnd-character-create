import React from 'react';
import axios from 'axios';

export default class CharacterNew extends React.Component {

  getRaces() {
    axios
      .get('/api/race')
      .then((response) => {
        console.log('THIS IS THE RESPONSE ', response.data);
        this.setState({
          race: response.data,
          
        });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }
  componentDidMount() {
    this.getRaces();
  }

  render() {

    return (
      <React.Fragment>
        <h2>Characters</h2>
      </React.Fragment>
    );
  }
}