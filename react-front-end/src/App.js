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
  const [loginState , setLogin] = useState({
    login: true,
    userId:1,
  });

    return (
      <Router>
      <AppBar loginState={loginState} setLogin={setLogin}/>
        <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/ShowCharacterByUser"> <ShowCharacterByUser  loginState={loginState} setLogin={setLogin}/></Route> 
        <Route exact path="/login"> <Login  loginState={loginState} setLogin={setLogin}/></Route>
        <Route exact path="/signup" > <SignUp loginState={loginState} setLogin={setLogin}/></Route> 
        <Route exact path="/404" > <NotFoundPage loginState={loginState} setLogin={setLogin}/></Route> 
        <Route exact path="/allcharacters" > <CharacterList loginState={loginState} setLogin={setLogin}/></Route> 
        <Route exact path="/createCharacter" > <CreateCharacter loginState={loginState} setLogin={setLogin}/></Route> 
        <Route exact path="/character" > <CharacterContainer loginState={loginState} setLogin={setLogin}/></Route> 
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}
