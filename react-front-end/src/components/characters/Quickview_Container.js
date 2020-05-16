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
import AbilityPointsAll from './overview/AP_all';
import OverviewContainer from './overview/Overview_Container';
import CombatContainer from './overview/Combat_Container';

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
        <h2 className="view-title">Quickview Container</h2>
        <div className="overview-skill-throw">
          <div className="skill-throw-internal">
            <AbilityPointsAll
              constitution={props.characterObject.constitution}
              strength={props.characterObject.strength}
              dexterity={props.characterObject.dexterity}
              charisma={props.characterObject.charisma}
              wisdom={props.characterObject.wisdom}
              intelligence={props.characterObject.intelligence}
            />
          </div>
        </div>
        <ul className="character-nav">
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
