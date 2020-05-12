import React from "react";
import DropDown from '../../components/dropDown'

import Grid from '@material-ui/core/Grid';



const selectAtributes = ({backgrounds, classes, races}) => {

    const generateCharacterAtributes = (characterAtributes) =>  characterAtributes.map(characterAtribute => ({
        value: characterAtribute.name,
        label: characterAtribute.name
    })) 

    const backgroundOptions = generateCharacterAtributes(backgrounds)
    let  backgroundOption ={
            title: 'Background',
            options: backgroundOptions,
            helperText: 'Select a background' ,
        } 

    const classesOptions = generateCharacterAtributes(classes)
    let  classOption ={
            title: 'Classes',
            options: classesOptions,
            helperText: 'Select a class' ,
        } 

    const racesOptions = generateCharacterAtributes(races)
    let  raceOption ={
            title: 'Races',
            options: racesOptions,
            helperText: 'Select a race' ,
        }     


    return (
    <div className="App">
        <Grid container spacing={1}>
            <Grid item xs={6}>
                Select a photo
            </Grid>
            <Grid item xs={6}>
                <DropDown {...classOption} /> 
                <DropDown {...raceOption} />
                <DropDown {...backgroundOption} />
            </Grid>
        </Grid>
    </div>
    )
}

export default selectAtributes;