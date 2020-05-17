import React, {useEffect , useState} from 'react';
import ExpansionPanel from '../components/panel';
import Button from '../components/addButton';
import { Container } from '@material-ui/core';
import axios from 'axios';

const ShowCharacterByUser = (props) => {

  const [characterState , setCharacterState] = React.useState([])
  console.log('login info on showcharacter',props)
  const getCharacterById = () => {
    axios.get(`/api/character/`, )
      .then((response) => {
        console.log(response.data.characters)
        setCharacterState({
          ...characterState,
          ...response.data.characters
        });
      })
    }
    useEffect(() => {
      getCharacterById();
    }, []);

  return (
    <div className="App">
        <Container>
        <h4>Select one of your character or create a new one! </h4>
          <ExpansionPanel characterState = {characterState} setCharacterState = {setCharacterState} />
          <Button href="/createCharacter">Link</Button>
        </Container>
    </div>
  );
};

export default ShowCharacterByUser;