import React from "react";
import DropDown from '../../components/dropDown'


const selectAtributes = () => {

  const stats = ['sas','asdas','asdasd']


  let  statsOptions ={
          title: 'Strength',
          options: stats,
          helperText: 'Select a strenght' ,
      } 

    return (
    <div className="App">
        <DropDown {...statsOptions} />
    </div>
    )
}

export default selectAtributes;