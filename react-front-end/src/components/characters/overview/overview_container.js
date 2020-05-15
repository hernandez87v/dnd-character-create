import React from 'react';
// import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import CharacterMain from './Character_Main';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

// Since routes are regular React components, they
// may be rendered anywhere in the app, including in
// child elements.
//
// This helps when it's time to code-split your app
// into multiple bundles because code-splitting a
// React Router app is the same as code-splitting
// any other React app.

// ROUTE 3 - THIS IS OVERVIEW PAGE WITH BLACK TEXT
// QUICKVIEW > OVERVIEW > MAIN - SKILLS/THROWS - FEATURES & PROFICIENCIES
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

export default function OverviewContainer(props) {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        {/* <h2 className="view-title">Overview</h2> */}
        <ul className="character-nav">
          <li>
            <Link class="crumb-button" to={`${url}/main`}>
              <button variant="contained" color="primary">
                Main
              </button>
            </Link>
          </li>
          <li>
            <Link class="crumb-button" to={`${url}/skills-throws`}>
              <button variant="contained" color="primary">
                Skills/Throws
              </button>
            </Link>
          </li>
          <li>
            <Link class="crumb-button" to={`${url}/features-proficencies`}>
              <button variant="contained" color="primary">
                Features & Proficencies
              </button>
            </Link>
          </li>
        </ul>
      </MuiThemeProvider>

      <Switch>
        <Route exact path={path}></Route>
        <Route path={`${path}/main`}>
          <CharacterMain characterObject={props.characterObject} />
        </Route>
      </Switch>
    </div>
  );
}
