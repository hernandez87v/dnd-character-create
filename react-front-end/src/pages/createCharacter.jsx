import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SelectAtributes from '../components/characters/selectAtributes'
import SelectStats from '../components/characters/selectStats'
import SelectWeapon from '../components/characters/selectWeapon'

import Stepper from '../components/stepper'
import { Container } from '@material-ui/core';


export default function CharacterNew (){
const [state , setState] = useState({backgrounds:[], classes: [], races:[] });
const [stats, setStats] = useState([15,14,13,12,10,8,''].map(stat => ({value: stat, label:stat})))

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
  console.log(state.races)
  useEffect( () => {
    getRaces();
  }, [])


    return (
      <Container>
      <React.Fragment>
        <h2>Characters</h2>
        <Stepper pages = {[ <SelectAtributes backgrounds={state.backgrounds} classes={state.classes} races={state.races}/>, 
        <SelectStats stats = {stats}/>,  
        <SelectWeapon stats = {stats}/>]}
        />
       
      </React.Fragment>
      </Container>
    );
  }
