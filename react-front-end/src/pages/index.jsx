import React from "react";

import ExpansionPanel from '../components/panel'
import Button from '../components/addButton'
import { Container } from '@material-ui/core';


const MainPage = () => {

    return (

        <div className="App">
          <Container>
        <ExpansionPanel/>
        <Button/> 
        </Container>
      </div>

    )
}

export default MainPage;
