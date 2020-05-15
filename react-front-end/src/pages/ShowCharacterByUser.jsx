import React, {useEffect , useState} from 'react';
import ExpansionPanel from '../components/panel';
import Button from '../components/addButton';
import { Container } from '@material-ui/core';
import axios from 'axios';

const ShowCharacterByUser = (props) => {

  const [characterState , setCharacterState] = React.useState([])

  const getCharacterById = () => {
    axios.get(`/api/character/`, )
      .then((response) => {
        console.log(response.data.characters)
        setCharacterState({
          ...characterState,
          ...response.data.characters
        });
        //setCharacterState(response.data.characters)
        console.log(response.data.characters)
        console.log(characterState)
      })
    }
    useEffect(() => {
      getCharacterById();
    }, []);
    console.log('character',characterState)

  return (
    <div className="App">
        <Container>
        <h4>Select one of your character or create a new one! </h4>
          <ExpansionPanel characterState = {characterState} setCharacterState = {setCharacterState} />
          <Button href="/createCharacter">Link</Button>
          {/* <Button href="/createCharacter" type= 'submit'/> */}
        </Container>
    </div>
  );
};

export default ShowCharacterByUser;