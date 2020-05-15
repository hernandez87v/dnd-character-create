import React, { useEffect, useState } from 'react';
import axios from 'axios';
<<<<<<< HEAD
import SelectAtributes from '../components/characters/selectAtributes'
import SelectStats from '../components/characters/selectStats'
import SelectProfiencies from '../components/characters/selectProfiencies'
import SelectEquipment from '../components/characters/selectequipment'
import SelectName from '../components/characters/selectName'

import Stepper from '../components/stepper'
import { Container } from '@material-ui/core';


export default function CharacterNew (){
const [state , setState] = useState({backgrounds:[], classes: [], races:[] });
let i = 0
const [stats, setStats] = useState([15,14,13,12,10,8,''].map(stat => ({value: i++, label:stat})))
const [characterState, setCharacterState] = useState({
  user_id: 1,
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
  hitDie: 0,
  avatar_url: 'https://www.underconsideration.com/brandnew/archives/dungeons_and_dragons_40_ampersand_detail_black.jpg',
  proficienciesSelected: [],
  equipmentSelected: [],
  characterName:'',
})
=======
import SelectAtributes from '../components/characters/selectAtributes';
import SelectStats from '../components/characters/selectStats';
import SelectProfiencies from '../components/characters/selectProfiencies';
import Stepper from '../components/stepper';
import { Container } from '@material-ui/core';

export default function CharacterNew() {
  const [state, setState] = useState({
    backgrounds: [],
    classes: [],
    races: [],
  });
  let i = 0;
  const [stats, setStats] = useState(
    [15, 14, 13, 12, 10, 8, ''].map((stat) => ({ value: i++, label: stat }))
  );
  const [characterState, setCharacterState] = useState({
    user_id: 1,
    background: { id: '0', name: 'background' },
    class: { id: '0', name: 'class' },
    race: { id: '0', name: 'race' },
    strength: 10,
    dexterity: 10,
    costitution: 10,
    inteligence: 10,
    widsom: 10,
    charisma: 10,
    speed: 0,
    hitDie: 0,
    avatar_url: 'https://i.redd.it/9qvhtum74g911.png',
    saving_throws: [],
    proficienciesSelected: [],
    proficienciesSelected2: [],
  });
>>>>>>> 4b7ed2b51f1ce7dfc0cdf42a9d6a15eaec63e739

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
  };
  useEffect(() => {
    getRaces();
  }, []);

  return (
    <Container>
      <React.Fragment>
        <h2>Characters</h2>
<<<<<<< HEAD
        <Stepper pages = {[ <SelectAtributes backgrounds={state.backgrounds} classes={state.classes} races={state.races} 
        characterState = {characterState} setCharacterState = {setCharacterState}/>, 
        <SelectStats stats = {stats} characterState = {characterState} setCharacterState = {setCharacterState}/>,  
        <SelectProfiencies characterState = {characterState} setCharacterState = {setCharacterState}/>,
        <SelectEquipment characterState = {characterState} setCharacterState = {setCharacterState}/>,
        <SelectName characterState = {characterState} setCharacterState = {setCharacterState}/>

      ]}
=======
        <Stepper
          pages={[
            <SelectAtributes
              backgrounds={state.backgrounds}
              classes={state.classes}
              races={state.races}
              characterState={characterState}
              setCharacterState={setCharacterState}
            />,
            <SelectStats
              stats={stats}
              characterState={characterState}
              setCharacterState={setCharacterState}
            />,
            <SelectProfiencies
              characterState={characterState}
              setCharacterState={setCharacterState}
            />,
          ]}
>>>>>>> 4b7ed2b51f1ce7dfc0cdf42a9d6a15eaec63e739
        />
      </React.Fragment>
    </Container>
  );
}
