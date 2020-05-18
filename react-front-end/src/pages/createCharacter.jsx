import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SelectAtributes from '../components/characters/selectAtributes';
import SelectStats from '../components/characters/selectStats';
import SelectProfiencies from '../components/characters/selectProfiencies';
import SelectEquipment from '../components/characters/selectequipment';
import SelectName from '../components/characters/selectName';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Stepper from '../components/stepper';
import { Container } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6f0000',
    },
    secondary: {
      main: '#6f0000',
    },
  },
});

export default function CharacterNew(props) {
  console.log('props', props);
  const [state, setState] = useState({
    backgrounds: [],
    classes: [],
    races: [],
  });
  let i = 0;
  const [stats, setStats] = useState(
    [15, 14, 13, 12, 10, 8, ''].map((stat) => ({ value: i++, label: stat }))
  );
  const [alignments, setAlignments] = useState([
    { id: 1, name: 'Lawful good' },
    { id: 2, name: 'Neutral good' },
    { id: 3, name: 'Chaotic good' },
    { id: 4, name: 'Lawful neutral' },
    { id: 5, name: 'Neutral' },
    { id: 6, name: 'Chaotic neutral' },
    { id: 7, name: 'Lawful evil' },
    { id: 8, name: 'Neutral evil' },
    { id: 9, name: 'Chaotic evil' },
  ]);
  const [characterState, setCharacterState] = useState({
    user_id: props.loginState.userId,
    background: { id: '0', name: 'Background' },
    class_info: { id: '0', name: 'Class' },
    race: { id: '0', name: 'Race' },
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
    speed: 0,
    hitDie: 0,
    avatar_url:
      'https://www.underconsideration.com/brandnew/archives/dungeons_and_dragons_40_ampersand_detail_black.jpg',
    proficienciesSelected: [],
    equipmentSelected: [],
    characterName: '',
    alignment: { id: '0', name: 'Alignment' },
  });

  const [raceState, setRaceState] = useState({
    ab_choice: 0,
    charisma_bonus: 0,
    constitution_bonus: 0,
    dexterity_bonus: 0,
    id: 0,
    intelligence_bonus: 0,
    language_choice: 0,
    name: '',
    proficiency_choice: 0,
    size: '',
    speed: 0,
    strength_bonus: 0,
    trait_choice: 0,
    wisdom_bonus: 0,
  });

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

  const getRaceSpecifics = () => {
    axios
      .get(`/api/race/${characterState.race.id}`)
      .then((response) => {
        console.log(response.data.raceData[0]);
        console.log(response.data);
        setRaceState({
          ...state,
          ...response.data.raceData[0],
        });
      })
      .catch((error) => setState({ error }));
  };

  useEffect(() => {
    getRaces();
  }, []);

  useEffect(() => {
    getRaceSpecifics();
  }, [characterState.race.id]);

  return (
    <Container>
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <h2>Characters</h2>
          <Stepper
            raceState={raceState}
            characterState={characterState}
            pages={[
              <SelectAtributes
                backgrounds={state.backgrounds}
                classes={state.classes}
                races={state.races}
                alignments={alignments}
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
              <SelectEquipment
                characterState={characterState}
                setCharacterState={setCharacterState}
              />,
              <SelectName
                characterState={characterState}
                setCharacterState={setCharacterState}
              />,
            ]}
          />
        </MuiThemeProvider>
      </React.Fragment>
    </Container>
  );
}
