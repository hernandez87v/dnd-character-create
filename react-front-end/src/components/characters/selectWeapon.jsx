import React, {useEffect, useState} from 'react';
import DropDown from '../../components/dropDown'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

//Remember to change this name !!!
const selectAtributes = (props) => {

  const [value, setValue] = React.useState('');

    const updateSpeed = (val) => {
      props.setCharacterState( {        
          ...props.characterState, 
          speed: val
      }, []) 
    }


    const getRacesInfo = () => {
      var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = `http://dnd5eapi.co/api/races/${props.characterState.race.name}`
        fetch(proxyUrl + targetUrl)
          .then(blob => blob.json())
          .then(data => {
      updateSpeed(data.speed)
        return data;
      })
      .catch(e => {
        console.log(e);
        return e;
      });
    }

    useEffect( () => {
      getRacesInfo();
    }, [])

  const handleChange = (event) => {
    setValue(event.target.value);
    if (props.handleChange) {
      props.handleChange(event.target.value)
    }
};
    return (
    <div className="App">
        <Grid container spacing={1}>
            <Grid item xs={6}>
                text
            </Grid>
             <Grid item xs={6}>
             <FormControl component="fieldset">
               <FormLabel component="legend">wepons</FormLabel>
                <RadioGroup aria-label="wepons" name="gender1" value={value} onChange={handleChange}>
                  <FormControlLabel value="shor sword" control={<Radio />} label="shor sword" />
                  <FormControlLabel value="long sword" control={<Radio />} label="long sword" />
                  <FormControlLabel value="crossbow" control={<Radio />} label="crossbow" />
                  <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                </RadioGroup>
              </FormControl>
         </Grid>
     </Grid>

    </div>
    )
}

export default selectAtributes;