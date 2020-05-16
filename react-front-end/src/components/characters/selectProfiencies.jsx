import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';

const selectProfiencies = (props) => {
let choose = 2;

  // const [value, setValue] = React.useState('');
  const [proficienciesData,setProficienciesData ] = React.useState([])
  const [chooseState,setChooseData ] = React.useState(0)

    const updateHitDie = (val) => {
      props.setCharacterState( {        
          ...props.characterState, 
            hitDie: val
      }, []) 
    }

    const updateSavingThrows = (val) => {
      props.setCharacterState( {        
          ...props.characterState, 
             saving_throws: val
      }, [])
    }

    const proficienciesSelected = (val) => {
      props.setCharacterState( {        
          ...props.characterState,
          proficienciesSelected: [...props.characterState.proficienciesSelected,val]
      }, []) 
    }


    const getClassesInfo = () => {
      var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = `http://dnd5eapi.co/api/classes/${props.characterState.class_info.name}`
        fetch(proxyUrl + targetUrl)
          .then(blob => blob.json())
          .then(data => {
            setProficienciesData(data.proficiency_choices[0].from)
            setChooseData(data.proficiency_choices[0].choose)
            updateSavingThrows(data.saving_throws)
            updateHitDie(data.hit_die)
        return data;
      })
      .catch(e => {
        console.log(e);
        return e;
      });
    }

    useEffect( () => {
       getClassesInfo();
    }, [])

console.log('character',props.characterState) 
let demo = false;
if (demo){
  return (
  <div className="App">
      <Grid container spacing={1}>
      <Grid item xs={12}> 
        <FormLabel component="legend">Pick {choose}</FormLabel>
        </Grid>
        <Grid item xs={2}/>
        <Grid item xs={2}/>
          <Grid item xs={2}>
              <div><p> Animal Handling<Checkbox onClick = {val => proficienciesSelected('Animal Handling')} /></p><br/> </div>
              <div><p> Athletics<Checkbox onClick = {val => proficienciesSelected('Athletics')}/></p><br/>  </div>
              <div><p> Intimidation<Checkbox onClick = {val => proficienciesSelected('Intimidation')} /></p><br/> </div>
          </Grid>
          <Grid item xs={2}>
          <div><p> Nature<Checkbox onClick = {val => proficienciesSelected('Nature')}/></p><br/> </div>
          <div><p> Perception<Checkbox onClick = {val => proficienciesSelected('Perception')}/></p><br/> </div>
          <div><p> Survival<Checkbox onClick = {val => proficienciesSelected('Survival')}/></p><br/> </div>
          </Grid>
  </Grid>
  </div>
  )}
else if (chooseState > 0){
    return (
    <div className="App">
        <Grid container spacing={1}>
        <Grid item xs={12}> 
          <FormLabel component="legend">Pick {chooseState}</FormLabel>
          </Grid>
            <Grid item xs={12}>
                {proficienciesData.map(proficiency => <div><p> <Checkbox onClick = {val => proficienciesSelected(proficiency)}/> {proficiency.name}</p><br/> </div>)}
            </Grid>
     </Grid>
    </div>
    )
}else  {
  return( 
    <div className="App">
        <p>Loading</p>
        <CircularProgress />
    </div>
    )
    }
}
export default selectProfiencies;