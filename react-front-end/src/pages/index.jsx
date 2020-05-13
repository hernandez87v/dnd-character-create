import React, { useContext } from 'react';
import ExpansionPanel from '../components/panel';
import Button from '../components/addButton';
import { Container } from '@material-ui/core';
import { UserContext } from '../UserContext';

const MainPage = () => {
  const msg = useContext(UserContext);
  console.log(msg);
  return (
    <div className="App">
      <Container>
        <ExpansionPanel />
        <Button />
        <div>{msg}</div>
      </Container>
    </div>
  );
};

export default MainPage;
