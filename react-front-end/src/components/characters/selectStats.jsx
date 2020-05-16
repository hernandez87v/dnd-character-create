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

  let  statsConstitution ={
      title: 'Constitution',
      options: props.stats,
      helperText: 'Select a Constitution' ,
    } 

  let  statsIntelligence ={
      title: 'Intelligence',
      options: props.stats,
      helperText: 'Select a Intelligence' ,
    } 

  let  statsWidsom ={
      title: 'Wisdom',
      options: props.stats,
      helperText: 'Select a Wisdom' ,
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
    const updateConstitution = (val) => {
        props.setCharacterState( {    
        ...props.characterState, 
        constitution: props.stats[val].label 
    })
    if (val === 6 ){
        //here i should be add again the element i delete before
        //  props.stats[val+1].label = props.characterState.charisma 
    }
    else {
        delete props.stats[val];
    }
    }
    const updateIntelligence = (val) => {
        props.setCharacterState( {        
            ...props.characterState, 
            intelligence: props.stats[val].label 
        })
        delete props.stats[val];

    }
    const updateWisdom = (val) => {
        props.setCharacterState( {        
            ...props.characterState, 
            wisdom: props.stats[val].label 
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
                <DropDown {...statsConstitution} value = {props.characterState.constitution} handleChange = {val => updateConstitution(val)}/>
            </Grid>
             <Grid item xs={4}>
                <DropDown {...statsIntelligence} value = {props.characterState.intelligence} handleChange = {val => updateIntelligence(val)}/>
                <DropDown {...statsWidsom} value = {props.characterState.wisdom} handleChange = {val => updateWisdom(val)}/>
                <DropDown {...statsCharisma} value = {props.characterState.charisma} handleChange = {val => updateCharisma(val)}/>
            </Grid>
        </Grid>

    </div>
    )
}

export default selectStats;