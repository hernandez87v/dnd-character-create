import React from 'react';
import DropDown from '../../components/dropDown';

import Grid from '@material-ui/core/Grid';
import AliceCarousel from '../imgUpload';

const selectAtributes = ({
  backgrounds,
  classes,
  races,
  characterState,
  setCharacterState,
}) => {
  const generateCharacterAtributes = (characterAtributes) =>
    characterAtributes.map((characterAtribute) => ({
      value: characterAtribute.id,
      label: characterAtribute.name,
    }));

  let backgroundOption = {
    title: 'Background',
    options: generateCharacterAtributes(backgrounds),
    helperText: 'Select a background',
  };

  let classOption = {
    title: 'Classes',
    options: generateCharacterAtributes(classes),
    helperText: 'Select a class',
  };

  let raceOption = {
    title: 'Races',
    options: generateCharacterAtributes(races),
    helperText: 'Select a race',
  };

  const updateBackground = (val) => {
    setCharacterState({
      ...characterState,
      background: { id: val, name: backgrounds[val - 1].name },
    });
  };

  const updateClass = (val) => {
    setCharacterState({
      ...characterState,
      class: { id: val, name: classes[val - 1].name },
    });
  };

  const updateRace = (val) => {
    setCharacterState({
      ...characterState,
      race: { id: val, name: races[val - 1].name },
    });
  };

  // const updateAvatar = (val) => {
  //   setCharacterState({
  //     ...characterState,
  //     avatar_url: { avatar_url: [val - 1].avatar_url },
  //   });
  // };

  // <img src={characterState.avatar_url} className="avatar-img"></img>
  //   <input type="text" id="fname" name="fname" /><br></br>
  //   <button onClick={name => updateAvatar(name)}>i'm a buttom</button>
  return (
    <div className="App">
      <Grid container spacing={0}>
        <Grid item xs={2} />
        <Grid item xs={5}>
          <AliceCarousel />
          {/* <img src={characterState.avatar_url} className="avatar-img"></img> */}
          {/* <input type="text" id="fname" name="fname" />
          <br></br>
          <input type="text" ref={(input) => this.textInput = input} />  */}
          {/* <input name="name" />
          <button onClick={(name) => updateAvatar(name)}>i'm a buttom</button> */}
        </Grid>
        <Grid item xs={4}>
          <DropDown
            {...classOption}
            value={characterState.class.name}
            handleChange={(val) => updateClass(val)}
          />
          <DropDown
            {...raceOption}
            value={characterState.race.name}
            handleChange={(val) => updateRace(val)}
          />
          <DropDown
            {...backgroundOption}
            value={characterState.background.name}
            handleChange={(val) => updateBackground(val)}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default selectAtributes;
