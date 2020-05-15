import React from 'react';
import DropDown from '../../components/dropDown';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
// import AliceCarousel from '../imgUpload';

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

  const updateAvatar = (val) => {
    console.log('test', val);
    setCharacterState({
      ...characterState,
      avatar_url: 'https://i.redd.it/9qvhtum74g911.png',
      // avatar_url: val
    });
  };
    const updateRace = (val) => {
        // setCharacterState( {
        //     ...characterState, 
        //     race: {id: val, name: races[val-1].name },
        //     avatar_url: 'https://i.pinimg.com/originals/ec/57/7c/ec577cf288cc7d9d4b56e859781f1dc9.png',
        // })
        if (races[val-1].name === 'Elf'){
            console.log('here')
            setCharacterState( {
                ...characterState, 
                race: {id: val, name: races[val-1].name },
                avatar_url: 'https://i.pinimg.com/originals/ec/57/7c/ec577cf288cc7d9d4b56e859781f1dc9.png'
                })
          } else if (races[val-1].name === 'Half-Orc'){
            setCharacterState( {
            ...characterState, 
            race: {id: val, name: races[val-1].name },
            avatar_url: 'https://i.pinimg.com/236x/b3/46/6e/b3466e895734b14bc4c020bf11615e88--game-character-character-ideas.jpg'
            })
          }else if (races[val-1].name === 'Dragonborn'){ //change url's
            setCharacterState( {
            ...characterState, 
            race: {id: val, name: races[val-1].name },
            avatar_url: 'https://cdna.artstation.com/p/assets/covers/images/010/438/572/large/daniel-silva-bhaz-avatar.jpg?1524446509'
            })
          } else if (races[val-1].name === 'Dwarf'){ //change url's
          setCharacterState( {
          ...characterState, 
          race: {id: val, name: races[val-1].name },
          avatar_url: 'https://i.pinimg.com/originals/9d/4a/f5/9d4af5cc016e2f98a88757234b789d45.jpg'
          })
        } else if (races[val-1].name === 'Gnome'){ //change url's
        setCharacterState( {
        ...characterState, 
        race: {id: val, name: races[val-1].name },
        avatar_url: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/299/1000/1000/636252771583275655.jpeg'
        })
      } else if (races[val-1].name === 'Half-Elf'){ //change url's
      setCharacterState( {
      ...characterState, 
      race: {id: val, name: races[val-1].name },
      avatar_url: 'https://i.pinimg.com/236x/42/6e/b3/426eb346108fb644cb58a5d7435db2f6.jpg'
      })
    } else if (races[val-1].name === 'Halfling'){ //change url's
    setCharacterState( {
    ...characterState, 
    race: {id: val, name: races[val-1].name },
    avatar_url: 'https://i.pinimg.com/236x/37/84/b3/3784b32ff52263e3d1fc6b3168031bb0--character-concept-character-ideas.jpg'
    })
  } else if (races[val-1].name === 'Human'){ //change url's
  setCharacterState( {
  ...characterState, 
  race: {id: val, name: races[val-1].name },
  avatar_url: 'https://vignette.wikia.nocookie.net/oustomiaworld/images/b/ba/Memes_5.jpg/revision/latest?cb=20170531104756'
  })
} else if (races[val-1].name === 'Tiefling'){ //change url's
setCharacterState( {
...characterState, 
race: {id: val, name: races[val-1].name },
avatar_url: 'https://i.pinimg.com/originals/ba/c2/1d/bac21d16043a7e9d4159333866088040.jpg'
})
}

    }

    return (
    <div className="App">
        <Grid container spacing={0}>
        
            <Grid item xs={2}/>
            <Grid item xs={4}>

            <img src={characterState.avatar_url} className="avatar-img"></img>

            {/* <TextField id="outlined-basic" value = {value} label="URL" variant="outlined" /><br></br> 
            <Button disableElevation variant="contained" color="primary" onClick = {name => updateAvatar(name)}>Submit your avatar</Button> */}

            </Grid>
            <Grid item xs={4}>
                <DropDown {...classOption} value = {characterState.class.name} handleChange = {val => updateClass(val)}
                     /> 
                <DropDown {...raceOption} value = {characterState.race.name} handleChange = {val => updateRace(val)} />
                <DropDown {...backgroundOption} value = {characterState.background.name} handleChange = {val => updateBackground(val)}/>
            </Grid>
            </Grid>
    </div>
  );
};

export default selectAtributes;
