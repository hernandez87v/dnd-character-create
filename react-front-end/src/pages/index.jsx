import React from "react";
import AppBar from '../components/navbar'
import ExpansionPanel from '../components/panel'
import Button from '../components/addButton'

const MainPage = () => {

    return (

        <div className="App">
 <h3>Home page</h3>
        <AppBar/>
        <ExpansionPanel/>
        <Button/> 
      </div>
    )
}

export default MainPage;