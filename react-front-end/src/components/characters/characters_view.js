import React from 'react';
// import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // useParams,
  useRouteMatch,
} from 'react-router-dom';
import OverviewContainer from './overview/overview_container';
import CombatContainer from './overview/combat_container';
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

// ROUTE 2 - THIS IS AFTER CLICKING QUICKVIEW
// QUICKVIEW > OVERVIEW - COMBAT
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

export default function CharacterView(props) {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        {/* <h2 className="view-title">Quickview</h2> */}
        <ul className="character-nav">
          <li>
            <Link class="crumb-button" to={`${url}/overview`}>
              <Button variant="contained" color="primary">
                Overview
              </Button>
            </Link>
          </li>
          <li>
            <Link class="crumb-button" to={`${url}/combat`}>
              <Button variant="contained" color="primary">
                Combat
              </Button>
            </Link>
          </li>
        </ul>
      </MuiThemeProvider>

      <Switch>
        <Route exact path={path}></Route>
        <Route path={`${path}/overview`}>
          <OverviewContainer characterObject={props.characterObject} />
        </Route>
        <Route path={`${path}/combat`}>
          <CombatContainer characterObject={props.characterObject} />
        </Route>
      </Switch>
    </div>
  );
}
