import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SelectAtributes from '../components/characters/selectAtributes'
import SelectStats from '../components/characters/selectStats'

import Stepper from '../components/stepper'
import { Container } from '@material-ui/core';


export default function CharacterNew (){
const [state , setState] = useState({backgrounds:[], classes: [], races:[] });

  const getRaces = () => {
    axios
      .get('/api/race')
      .then((response) => {
        console.log('THIS IS THE RESPONSE ', response.data);
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
console.log('background', state.backgrounds)
    return (
      <Container>
      <React.Fragment>
        <h2>Characters</h2>
        <Stepper pages = {[ <SelectAtributes backgrounds={state.backgrounds} classes={state.classes} races={state.races}/>, <SelectStats/>]}/>
       
      </React.Fragment>
      </Container>
    );
  }
