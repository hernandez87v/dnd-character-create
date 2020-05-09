import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import MainPage from './pages'
import NotFoundPage from './pages/404'
import NewCharacter from './pages/newCharacter'
import Login from './pages/login'
import TableContainer from './components/table'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom"

const host = "http://dnd5eapi.co/api"

class App extends Component {
  // <-- Default code that came with file START -->
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     message: 'Click the button!'
  //   }
  // }

  // fetchData = () => {
  //   axios.get(`${host}/spells`)  // You can simply make your requests to "/api/whatever you want"
  //   .then((response) => {
  //     // handle success
  //     console.log(response.data) // The entire response from the Rails API

  //     console.log(response.data.message) // Just the message
  //     this.setState({
  //       message: response.data.message
  //     });
  //   }) 
  // }
  // <-- Default code that came with file END -->

  render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/newcharacter" component={NewCharacter}/>
        <Route exact path="/404" component={NotFoundPage}/>
        <Redirect to="/404"/>
        </Switch>
      </Router>
    );
  }
}

export default App;
