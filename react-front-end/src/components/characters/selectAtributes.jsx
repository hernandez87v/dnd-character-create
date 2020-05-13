import React from 'react';
import DropDown from '../../components/dropDown';

import Grid from '@material-ui/core/Grid';
import AliceCarousel from '../imgUpload';

const selectAtributes = ({
  backgrounds,
  classes,
  races,
  //   avatar,
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

  //   let avatarOption = {
  //     title: 'Avatar',
  //     options: generateCharacterAtributes(avatar),
  //     helperText: 'Select avatar',
  //   };

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

  //   const updateAvatar = (val) => {
  //     setCharacterState({
  //       ...characterState,
  //       avatar: { id: val, name: avatar[val - 1].avatar_url },
  //     });
  //   };

  return (
    <div className="App">
      <Grid container spacing={0}>
        <Grid item xs={2} />
        <Grid item xs={5}>
          <AliceCarousel
          // {...avatarOption}
          // value={characterState.avatar.avatar_url}
          // handleChange={(val) => updateAvatar(val)}
          />
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
