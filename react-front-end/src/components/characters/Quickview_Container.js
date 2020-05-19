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
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import OverviewContainer from './overview/Overview_Container';
import CombatContainer from './overview/Combat_Container';

// ROUTE 2 - THIS IS AFTER CLICKING QUICKVIEW
// QUICKVIEW > OVERVIEW - COMBAT
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#7986cb',
    },
  },
});

export default function CharacterView(props) {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <ul className="character-nav2">
          <li>
            <Link class="crumb-button" to={`${url}/overview`}>
              <button variant="contained" color="primary">
                Overview
              </button>
            </Link>
          </li>
          <li>
            <Link class="crumb-button" to={`${url}/combat`}>
              <button variant="contained" color="primary">
                Combat
              </button>
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
