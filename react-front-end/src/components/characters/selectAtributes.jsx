import React from "react";
import DropDown from '../../components/dropDown'


const selectAtributes = ({backgrounds, classes, races}) => {
console.log(backgrounds)

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
        <DropDown {...classOption} />
        <DropDown {...raceOption} />
        <DropDown {...backgroundOption} />
    </div>
    )
}

export default selectAtributes;