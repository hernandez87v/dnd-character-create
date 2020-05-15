import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import Loading from '../../components/Loading';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';

const selectequipment = (props) => {
const [chooseState, setChooseState] = React.useState(0);

  const [value, setValue] = React.useState('');
  const [equipmentData,setEquipmentData ] = React.useState([])

  const [equipmentData2,setEquipmentData2 ] = React.useState([])
  const [equipmentData3,setEquipmentData3 ] = React.useState([])
  const [equipmentData4,setEquipmentData4 ] = React.useState([])

  const [equipmentData5,setEquipmentData5 ] = React.useState([])

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
            setChooseState(data.choices_to_make)
            if (data.choices_to_make === 2) {
              console.log('here') 
              setEquipmentData(data.choice_1[1].from)
              setEquipmentData2(data.choice_2[1].from)
              console.log('set all the data')
            } else if (data.choices_to_make === 3) { 
              setEquipmentData(data.choice_1[1].from)
              setEquipmentData2(data.choice_2[1].from)
              setEquipmentData3(data.choice_3[1].from)
            } else if (data.choices_to_make === 4) {
              setEquipmentData(data.choice_1[1].from)
              setEquipmentData2(data.choice_2[1].from)
              setEquipmentData3(data.choice_3[1].from)
              setEquipmentData4(data.choice_4[0].from)
            } else if (data.choices_to_make === 5) {
              console.log('data_choice',data.choice_5[0].from)
              setEquipmentData(data.choice_1[1].from)
              setEquipmentData2(data.choice_2[1].from)
              setEquipmentData3(data.choice_3[1].from)
              setEquipmentData4(data.choice_4[0].from)
              setEquipmentData5(data.choice_5[0].from)


            }
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

 } else if (chooseState === 3){
  return (
    <div className="App">
      <Grid container spacing={1}>
        <Grid item xs={12}> 
          </Grid>
            <Grid item xs={4}>
                <FormLabel component="legend">Pick 1</FormLabel>
                {equipmentData.map(equipment => <div><p> <Radio onClick = {val => equipmentSelected(equipment)}/> {equipment.item.name}</p><br/> 
                </div>)}
            </Grid>
            <Grid item xs={4}>
                <FormLabel component="legend">Pick 1</FormLabel>
                {equipmentData2.map(equipment => <div><p> <Radio onClick = {val => equipmentSelected(equipment)}/> {equipment.item.name}</p><br/> 
                </div>)}
            </Grid>
            <Grid item xs={4}>
                <FormLabel component="legend">Pick 1</FormLabel>
                {equipmentData3.map(equipment => <div><p> <Radio onClick = {val => equipmentSelected(equipment)}/> {equipment.item.name}</p><br/> 
                </div>)}
            </Grid>
      </Grid>
    </div>
    )
 } else if (chooseState === 4){
  return (
    <div className="App">
      <Grid container spacing={1}>
        <Grid item xs={12}> 
          </Grid>
            <Grid item xs={3}>
                <FormLabel component="legend">Pick 1</FormLabel>
                {equipmentData.map(equipment => <div><p> <Radio onClick = {val => equipmentSelected(equipment)}/> {equipment.item.name}</p><br/> 
                </div>)}
            </Grid>
            <Grid item xs={3}>
                <FormLabel component="legend">Pick 1</FormLabel>
                {equipmentData2.map(equipment => <div><p> <Radio onClick = {val => equipmentSelected(equipment)}/> {equipment.item.name}</p><br/> 
                </div>)}
            </Grid>
            <Grid item xs={3}>
                <FormLabel component="legend">Pick 1</FormLabel>
                {equipmentData3.map(equipment => <div><p> <Radio onClick = {val => equipmentSelected(equipment)}/> {equipment.item.name}</p><br/> 
                </div>)}
            </Grid>
            <Grid item xs={3}>
                <FormLabel component="legend">Pick 1</FormLabel>
                {equipmentData4.map(equipment => <div><p> <Radio onClick = {val => equipmentSelected(equipment)}/> {equipment.item.name}</p><br/> 
                </div>)}
            </Grid>
      </Grid>
    </div>
    )
 } else if (chooseState === 5) {
  return (
    <div className="App">
      <Grid container spacing={1}>
        <Grid item xs={12}> 
          </Grid>
            <Grid item xs={2}>
                <FormLabel component="legend">Pick 1</FormLabel>
                {equipmentData.map(equipment => <div><p> <Radio onClick = {val => equipmentSelected(equipment)}/> {equipment.item.name}</p><br/> 
                </div>)}
            </Grid>
            <Grid item xs={2}>
                <FormLabel component="legend">Pick 1</FormLabel>
                {equipmentData2.map(equipment => <div><p> <Radio onClick = {val => equipmentSelected(equipment)}/> {equipment.item.name}</p><br/> 
                </div>)}
            </Grid>
            <Grid item xs={2}>
                <FormLabel component="legend">Pick 1</FormLabel>
                {equipmentData3.map(equipment => <div><p> <Radio onClick = {val => equipmentSelected(equipment)}/> {equipment.item.name}</p><br/> 
                </div>)}
            </Grid>
            <Grid item xs={2}>
                <FormLabel component="legend">Pick 1</FormLabel>
                {equipmentData4.map(equipment => <div><p> <Radio onClick = {val => equipmentSelected(equipment)}/> {equipment.item.name}</p><br/> 
                </div>)}
            </Grid>
            <Grid item xs={2}>
                <FormLabel component="legend">Pick 1</FormLabel>
                {equipmentData5.map(equipment => <div><p> <Radio onClick = {val => equipmentSelected(equipment)}/> {equipment.item.name}</p><br/> 
                </div>)}
            </Grid>
      </Grid>
    </div>
    )
 } else {
    return( 
      <div className="App">
        <p>Loading</p>
        <CircularProgress />
      </div>
      )
    }
}
  
export default selectequipment;