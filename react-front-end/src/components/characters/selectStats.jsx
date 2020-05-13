import React from "react";
import DropDown from '../../components/dropDown'
import Grid from '@material-ui/core/Grid';

const selectStats = (props) => {


  let  statsStrength ={
        title: 'Strength',
        options: props.stats,
        helperText: 'Select a strenght' ,
    }

  let  statsDexterity ={
      title: 'Dexterity',
      options: props.stats,
      helperText: 'Select a Dexterity' ,
    } 

  let  statsCostitution ={
      title: 'Costitution',
      options: props.stats,
      helperText: 'Select a Costitution' ,
    } 

  let  statsInteligence ={
      title: 'Inteligence',
      options: props.stats,
      helperText: 'Select a Inteligence' ,
    } 

  let  statsWidsom ={
      title: 'Widsom',
      options: props.stats,
      helperText: 'Select a Widsom' ,
    } 
  let  statsCharisma ={
      title: 'Charisma',
      options: props.stats,
      helperText: 'Select a Charisma' ,
    }  

  const updateStrength = (val) => {
    props.setCharacterState( {        
        ...props.characterState, 
        strength: props.stats[val].label 
    })
    if (val === 6 ){
        //here i should be add again the element i delete before
        //  props.stats[val+1].label = props.characterState.charisma 
    }
    else {
        delete props.stats[val];
    }
    }
    const updateDexterity = (val) => {
        props.setCharacterState( {        
            ...props.characterState, 
            dexterity: props.stats[val].label 
        })
        if (val === 6 ){
            //here i should be add again the element i delete before
            //  props.stats[val+1].label = props.characterState.charisma 
        }
        else {
            delete props.stats[val];
        }
    }
    const updateCostitution = (val) => {
        props.setCharacterState( {    
        ...props.characterState, 
        costitution: props.stats[val].label 
    })
    if (val === 6 ){
        //here i should be add again the element i delete before
        //  props.stats[val+1].label = props.characterState.charisma 
    }
    else {
        delete props.stats[val];
    }
    }
    const updateInteligence = (val) => {
        props.setCharacterState( {        
            ...props.characterState, 
            inteligence: props.stats[val].label 
        })
        delete props.stats[val];

    }
    const updateWidsom = (val) => {
        props.setCharacterState( {        
            ...props.characterState, 
            widsom: props.stats[val].label 
        })
        if (val === 6 ){
            //here i should be add again the element i delete before
            //  props.stats[val+1].label = props.characterState.charisma 
        }
        else {
            delete props.stats[val];
        }
    }
    const updateCharisma = (val) => {
        props.setCharacterState( {        
            ...props.characterState, 
            charisma: props.stats[val].label 
        })

        if (val === 6 ){
            //here i should be add again the element i delete before
            //  props.stats[val+1].label = props.characterState.charisma 
        }
        else {
            delete props.stats[val];
        }
    }

    return (
    <div className="App">
        <Grid container spacing={1}>
            <Grid item xs={2}/>
            <Grid item xs={4}>
                <DropDown {...statsStrength} value = {props.characterState.strength} handleChange = {val => updateStrength(val)} />
                <DropDown {...statsDexterity} value = {props.characterState.dexterity} handleChange = {val => updateDexterity(val)}/>
                <DropDown {...statsCostitution} value = {props.characterState.costitution} handleChange = {val => updateCostitution(val)}/>
            </Grid>
             <Grid item xs={4}>
                <DropDown {...statsInteligence} value = {props.characterState.inteligence} handleChange = {val => updateInteligence(val)}/>
                <DropDown {...statsWidsom} value = {props.characterState.widsom} handleChange = {val => updateWidsom(val)}/>
                <DropDown {...statsCharisma} value = {props.characterState.charisma} handleChange = {val => updateCharisma(val)}/>
            </Grid>
        </Grid>

    </div>
    )
}

export default selectStats;