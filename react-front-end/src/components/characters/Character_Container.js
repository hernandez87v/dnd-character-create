import React, { useState, useEffect }from 'react'
import CharacterView from './characters_view'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import axios from 'axios'
import '../../styles/character_view.css'

export default function CharacterContainer() {

  const [characterData, setCharacterData] = useState({});

  const getCharacter = function() {
    axios
    .get('/api/character/id')
    // Once we get a response and store data, let's change the loading state
    .then((response) => {
      setCharacterData({
        ...characterData,
        ...response.data.character[0]
      });
    })
    // If we catch any errors connecting, let's update accordingly
    .catch((error) => setCharacterData({ error, isLoading: false }))

  }

  useEffect(() => {
    getCharacter();
  }, []);
  
  return (
    <Router>
      <div>
        <ul className='character-nav'>
          <li>
            <Link to="/quickview">Quickview</Link>
          </li>
          <li>
            <Link to="/inventory">Inventory</Link>
          </li>
          <li>
            <Link to="/details-notes">Details & Notes</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route path="/quickview">
            <CharacterView characterObject={characterData} />
          </Route>
          <Route path="/inventory">
          </Route>
          <Route path="/details-notes">
          </Route>
        </Switch>
      </div>
    </Router>
  );
}