import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import Loading from '../../components/Loading';


const selectequipment = (props) => {
const [chooseState, setChooseState] = React.useState(0);

  const [value, setValue] = React.useState('');
  const [equipmentData,setEquipmentData ] = React.useState([])

  const [equipmentData2,setEquipmentData2 ] = React.useState([])

  const [choicesData ,setChoicesData] = React.useState([])

    const equipmentSelected = (val) => {
      props.setCharacterState( {        
          ...props.characterState,
          equipmentSelected: [...props.characterState.equipmentSelected,val]
      }, []) 
    }

    const getEquipmentInfo = () => {
      var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = `http://dnd5eapi.co/api/starting-equipment/${props.characterState.class.id}`
        fetch(proxyUrl + targetUrl)
          .then(blob => blob.json())
          .then(data => {
            console.log(data)
            if (data.choices_to_make > 5){
              console.log('hi')
            }
            setChoicesData(data.choices_to_make)
            setEquipmentData(data.choice_1[1].from)
            setEquipmentData2(data.choice_2[1].from)
            setChooseState(data.choices_to_make)

            console.log(equipmentData)
        return data;
      })
      .catch(e => {
        console.log(e);
        return e;
      });
    }

    useEffect( () => {
      getEquipmentInfo();
    }, [])

  const handleChange = (event) => {
    setValue(event.target.value);
    if (props.handleChange) {
      props.handleChange(event.target.value)
    }
};
console.log('character',props.characterState) 
 if (chooseState === 2 ){
    return (
    <div className="App">
      <Grid container spacing={1}>
        <Grid item xs={12}> 
          </Grid>
            <Grid item xs={6}>
                <FormLabel component="legend">Pick 1</FormLabel>
                {equipmentData.map(equipment => <div><p> <Radio onClick = {val => equipmentSelected(equipment)}/> {equipment.item.name}</p><br/> 
                </div>)}
            </Grid>
            <Grid item xs={6}>
                <FormLabel component="legend">Pick 1</FormLabel>
                {equipmentData2.map(equipment => <div><p> <Radio onClick = {val => equipmentSelected(equipment)}/> {equipment.item.name}</p><br/> 
                </div>)}
            </Grid>
      </Grid>
    </div>
    )

}
else {
  return( 
    <div className="App">
      <p><Loading /></p>
      
    </div>
    )
  }
}
  
export default selectequipment;