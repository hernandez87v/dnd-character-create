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
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

export default function App (){


    return (
      <Router>
      <AppBar />
        <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/ShowCharacterByUser"> <ShowCharacterByUser  /></Route> 
        <Route exact path="/login"> <Login /></Route>
        <Route exact path="/signup" > <SignUp /></Route> 
        <Route exact path="/404" > <NotFoundPage /></Route> 
        <Route exact path="/allcharacters" > <CharacterList /></Route> 
        <Route exact path="/createCharacter" > <CreateCharacter /></Route> 
        <Route path="/character/:id"  component={CharacterContainer}></Route> 
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}
