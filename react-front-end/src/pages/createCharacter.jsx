import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SelectAtributes from '../components/characters/selectAtributes'
import SelectStats from '../components/characters/selectStats'
import SelectWeapon from '../components/characters/selectWeapon'
import Stepper from '../components/stepper'
import { Container } from '@material-ui/core';


export default function CharacterNew (){
const [state , setState] = useState({backgrounds:[], classes: [], races:[] });
let i = 0
const [stats, setStats] = useState([15,14,13,12,10,8,''].map(stat => ({value: i++, label:stat})))
const [characterState, setCharacterState] = useState({
  background:{id: '0', name:'background'}, 
  class: {id: '0', name:'class'}, 
  race: {id: '0', name:'race'},
  strength: 10,
  dexterity: 10,
  costitution: 10,
  inteligence: 10,
  widsom: 10,
  charisma: 10,
  speed: 0,

})

  const getRaces = () => {
    axios
      .get('/api/race')
      .then((response) => {
          setState({
           ...state,
          ...response.data,   
        });
      })
      .catch((error) => setState({ error }));
  }
  useEffect( () => {
    getRaces();
  }, [])


    return (
      <Container>
      <React.Fragment>
        <h2>Characters</h2>
        <Stepper pages = {[ <SelectAtributes backgrounds={state.backgrounds} classes={state.classes} races={state.races} 
        characterState = {characterState} setCharacterState = {setCharacterState}/>, 
        <SelectStats stats = {stats} characterState = {characterState} setCharacterState = {setCharacterState}/>,  
        <SelectWeapon stats = {stats} characterState = {characterState} setCharacterState = {setCharacterState}/>]}
        />
       
      </React.Fragment>
      </Container>
    );
  }
