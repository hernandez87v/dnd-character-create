import React from "react";
import AppBar from '../components/navbar'
import ExpansionPanel from '../components/panel'
import Button from '../components/addButton'

const MainPage = () => {

    return (

        <div className="App">

        <AppBar/>
        <ExpansionPanel/>
        <Button/> 
      </div>
    )
}

export default MainPage;