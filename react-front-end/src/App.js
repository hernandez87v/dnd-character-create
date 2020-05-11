import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import MainPage from './pages'
import NotFoundPage from './pages/404'
import NewCharacter from './pages/newCharacter'
import NewUser from './pages/newUser'
import Login from './pages/login'
import CharacterList from './components/characters/characters_show'
import CharacterNew from './components/characters/characters_new'

// import TableContainer from './components/table'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from 'react-router-dom';

// const host = "http://dnd5eapi.co/api"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/newcharacter" component={NewCharacter}/>
        <Route exact path="/newuser" component={NewUser}/>
        <Route exact path="/404" component={NotFoundPage}/>
        <Route exact path="/allcharacters" component={CharacterList}/>
        <Route exact path="/newcharacter" component={CharacterNew}/>
        <Redirect to="/404"/>
        </Switch>
      </Router>
    );
  }
}

export default App;

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       message: 'Click the button to load data!'
//     }
//   }
//   fetchData = () => {
//     axios.get('/api/user') // You can simply make your requests to "/api/whatever you want"
//     .then((response) => {
//       console.log('hi',response)
//       // handle success
//       //console.log(response.data) // The entire response from the Rails API
//       //console.log(response.data.message) // Just the message
//       this.setState({
//         message: response.data.message
//       });
//     })
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>{ this.state.message }</h1>
//         <button onClick={this.fetchData} >
//           Fetch Data
//         </button>
//       </div>
//     );
//   }
// }
// export default App;
