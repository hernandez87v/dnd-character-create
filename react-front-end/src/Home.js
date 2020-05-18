import React, { Component } from 'react';
import axios from 'axios';
import './Home.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom"

const host = "http://dnd5eapi.co/api"
class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!'
    }
  }

  fetchData = () => {
    axios.get(`${host}/spells`) // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success

      this.setState({
        message: response.data.message
      });
    }) 
  }

  render() {
    return (
      <div className="Home">
        <h1>{ this.state.message }</h1>
        <button onClick={this.fetchData} >
          Fetch Data
        </button>        
      </div>
    );
  }
}

export default Home;
