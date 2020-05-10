import React from 'react';
import axios from 'axios';

export default class CharacterList extends React.Component {
  // State will apply to the users object which is set to loading by default
  state = {
    characters: [],
    isLoading: true,
    errors: null,
  };
  // Now we're going to make a request for data using axios
  getCharacters() {
    axios
      // This is where the data is hosted
      .get('/api/character')
      // Once we get a response and store data, let's change the loading state
      .then((response) => {
        console.log('THIS IS THE RESPONSE ', response);
        this.setState({
          characters: response.data.characters,
          isLoading: false,
        });
      })
      // If we catch any errors connecting, let's update accordingly
      .catch((error) => this.setState({ error, isLoading: false }));
  }
  // Let's our app know we're ready to render the data
  componentDidMount() {
    this.getCharacters();
  }
  // Putting that data to use
  render() {
    const { isLoading, characters } = this.state;
    console.log('characters?', characters);
    return (
      <React.Fragment>
        <h2>Characters</h2>
        <div>
          {!isLoading ? (
            characters.map((character) => {
              const { id, user_id, class_id, race_id, background_id, experience, level, alignment, speed, armour_class, total_hit_points, temporary_hit_points, initiative, strength, dexterity, constitution, intelligence, wisdom, charisma, name, avatar_url } = character;
              return (
                <div key={id}>
                  <h2>{name}</h2>
                  <img src={avatar_url}></img>
                  <p>Class: {class_id}</p>
                  <p>Race: {race_id}</p>
                  <p>Background: {background_id}</p>
                  <p>EXP: {experience}</p>
                  <p>Level: {level}</p>
                  <p>Alignment: {alignment}</p>
                  <p>Speed: {speed}</p>
                  <p>Armour Class: {armour_class}</p>
                  <p>Total HP: {total_hit_points}</p>
                  <p>Temp HP: {temporary_hit_points}</p>
                  <p>Initiative: {initiative}</p>
                  <p>Strength: {strength}</p>
                  <p>Dexterity: {dexterity}</p>
                  <p>Constitution: {constitution}</p>
                  <p>Intelligence: {intelligence}</p>
                  <p>Wisdom: {wisdom}</p>
                  <p>Charisma: {charisma}</p>
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