import React, {useEffect, useState} from 'react';
import DropDown from '../../components/dropDown'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';


import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';

const selectProfiencies = (props) => {
let choose = 2;

  const [value, setValue] = React.useState('');
  const [proficienciesData,setProficienciesData ] = React.useState([])

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
      console.log('character',props.characterState) 
    }

    const proficienciesSelected = (val) => {
      props.setCharacterState( {        
          ...props.characterState,
          // ...props.characterState.proficienciesSelected, 
          proficienciesSelected: val
      }, []) 
    }
    const proficienciesSelected2 = (val) => {
      props.setCharacterState( {        
          ...props.characterState,
          // ...props.characterState.proficienciesSelected, 
          proficienciesSelected2: val
      }, []) 
    }

    const getClassesInfo = () => {
      var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = `http://dnd5eapi.co/api/classes/${props.characterState.class.name}`
        fetch(proxyUrl + targetUrl)
          .then(blob => blob.json())
          .then(data => {
            setProficienciesData(data.proficiency_choices[0].from)
            console.log(data.proficiency_choices[0].from)
            choose = data.proficiency_choices[0].choose
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
      // getClassesInfo();
    }, [])

  const handleChange = (event) => {
    setValue(event.target.value);
    if (props.handleChange) {
      props.handleChange(event.target.value)
    }
};
console.log('character',props.characterState) 

//     return (
//     <div className="App">
//         <Grid container spacing={1}>
//         <Grid item xs={12}> 
//           <FormLabel component="legend">Pick {choose}</FormLabel>
//           </Grid>
//             <Grid item xs={12}>
//                 {proficienciesData.map(proficiency => <div><p> <Checkbox onClick = {val => proficienciesSelected(proficiency)}/> {proficiency.name}</p><br/> </div>)}
//             </Grid>
//      </Grid>

//     </div>
//     )
// }
return (
      <div className="App">
          <Grid container spacing={1}>
          <Grid item xs={12}> 
            <FormLabel component="legend">Pick {choose}</FormLabel>
            </Grid>
            <Grid item xs={2}/>
            <Grid item xs={2}/>

              <Grid item xs={2}>
                   <div><p> Animal Handling <Checkbox onCheck = {val => proficienciesSelected('Animal Handling')} /></p><br/> </div>
                   <div><p> Athletics       <Checkbox onClick = {val => proficienciesSelected('Athletics')}/></p><br/>  </div>
                   <div><p> Intimidation    <Checkbox onClick = {val => proficienciesSelected('Intimidation')} /></p><br/> </div>

              </Grid>
              <Grid item xs={2}>
              <div><p> Nature<Checkbox onClick = {val => proficienciesSelected2('Nature')}/></p><br/> </div>
              <div><p> Perception<Checkbox onClick = {val => proficienciesSelected2('Perception')}/></p><br/> </div>
              <div><p> Survival<Checkbox onClick = {val => proficienciesSelected2('Survival')}/></p><br/> </div>

              </Grid>
       </Grid>
  
      </div>
      )
  }
  

export default selectProfiencies;