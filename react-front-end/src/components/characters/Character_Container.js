import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import '../../styles/character_view.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CharacterView from './Quickview_Container.js';
import CharacterInventory from './overview/Character_Inventory';
import CharacterDetailsNotes from './overview/Character_DetailsNotes';

// ROUTE 0 - THIS IS THE BEGINNING
// QUICKVIEW - INVENTORY - DETAILS NOTES

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

export default function CharacterContainer(props) {
  const [characterData, setCharacterData] = useState({});
  const { match: { params } } = props;

  const getCharacter = function () {

    axios
      .get(`/api/character/${params.id}`)
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
          <h2 className="view-title">Character Container</h2>
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
            <Route path="/inventory">
              <CharacterInventory characterObject={characterData} />
            </Route>
            <Route path="/details-notes">
              <CharacterDetailsNotes characterObject={characterData} />
            </Route>
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}
