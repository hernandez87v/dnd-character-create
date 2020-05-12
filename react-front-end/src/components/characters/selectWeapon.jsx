import React from "react";
import DropDown from '../../components/dropDown'
import Grid from '@material-ui/core/Grid';

const selectAtributes = (props) => {
let strength = props.stats;
let dexterity = props.stats;
let costitution = props.stats;
let widsom = props.stats;
let charisma = props.stats;

  let  statsStrength ={
        title: 'Strength',
        options: strength,
        helperText: 'Select a strenght' ,
      }

  let  statsDexterity ={
      title: 'Dexterity',
      options: dexterity,
      helperText: 'Select a Dexterity' ,
      } 

  let  statsCostitution ={
      title: 'Costitution',
      options: costitution,
      helperText: 'Select a Costitution' ,
  } 

  let  statsInteligence ={
      title: 'Inteligence',
      options: props.stats,
      helperText: 'Select a Inteligence' ,
  } 

  let  statsWidsom ={
      title: 'Widsom',
      options: widsom,
      helperText: 'Select a Widsom' ,
  } 
  let  statsCharisma ={
      title: 'Charisma',
      options: charisma,
      helperText: 'Select a Charisma' ,
  }  

    return (
    <div className="App">
        <Grid container spacing={1}>
            <Grid item xs={6}>
text
            </Grid>
             <Grid item xs={6}>
              <DropDown {...statsInteligence} />
              <DropDown {...statsWidsom} />
              <DropDown {...statsCharisma} />
         </Grid>
     </Grid>

    </div>
    )
}

export default selectAtributes;