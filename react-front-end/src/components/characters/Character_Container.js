import React, { useState, useEffect } from 'react';
import CharacterView from './characters_view.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import '../../styles/character_view.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

// ROUTE 1 - THIS IS AFTER CLICKING QUICKVIEW
// QUICKVIEW - INVENTORY - DETAILS & NOTES

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6f0000',
    },
    secondary: {
      main: '#6f0000',
    },
  },
});

export default function CharacterContainer() {
  const [characterData, setCharacterData] = useState({});

  const getCharacter = function () {
    axios
      .get('/api/character/id')
      // Once we get a response and store data, let's change the loading state
      .then((response) => {
        setCharacterData({
          ...characterData,
          ...response.data.character[0],
        });
      })
      // If we catch any errors connecting, let's update accordingly
      .catch((error) => setCharacterData({ error, isLoading: false }));
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div>
          <ul className="character-nav">
            <li>
              <Link class="crumb-button" to="/quickview">
                <button variant="contained" color="primary">
                  Quickview
                </button>
              </Link>
            </li>
            <li>
              <Link class="crumb-button" to="/inventory">
                <button variant="contained" color="primary">
                  Inventory
                </button>
              </Link>
            </li>
            <li>
              <Link class="crumb-button" to="/details-notes">
                <button variant="contained" color="primary">
                  Details & Notes
                </button>
              </Link>
            </li>
          </ul>

          <Switch>
            <Route path="/quickview">
              <CharacterView characterObject={characterData} />
            </Route>
            <Route path="/inventory"></Route>
            <Route path="/details-notes"></Route>
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}
