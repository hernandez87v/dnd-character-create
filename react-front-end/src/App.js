import React, { useState } from 'react';
// import axios from 'axios';
import './App.css';
import MainPage from './pages';
import NotFoundPage from './pages/404';
import SignUp from './pages/SignUp';
import Login from './pages/login'
import CreateCharacter from './pages/createCharacter'
import ShowCharacterByUser from './pages/ShowCharacterByUser'

import AppBar from './components/navbar'
import CharacterList from './components/characters/Character_List';
import CharacterContainer from './components/characters/Character_Container.js';
// import TableContainer from './components/table'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

export default function App (){
  const [loginState , setLogin] = React.useState({
    login: true,
    user_id: 0,
  });
    return (
      <Router>
      <AppBar login={loginState} setLogin={setLogin}/>
        <Switch>
        <Route exact path="/" component={MainPage} login={loginState} setLogin={setLogin}/>
        <Route exact path="/ShowCharacterByUser" component={ShowCharacterByUser} login={loginState} setLogin={setLogin}/>
        <Route exact path="/login" component={Login} login={loginState} setLogin={setLogin}/>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/404" component={NotFoundPage} />
        <Route exact path="/allcharacters" component={CharacterList} />
        <Route exact path="/createCharacter" component={CreateCharacter} />
        <Route exact path="/character" component={CharacterContainer} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}
