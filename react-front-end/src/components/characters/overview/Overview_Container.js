import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import CharacterMain from './Character_Profile';
import CharacterSkillThrow from './Character_SkillThrow';
import CharacterFeaturesProficiencies from './Character_FeaturesProficiencies';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

// ROUTE 3 - THIS IS OVERVIEW PAGE WITH BLACK TEXT
// QUICKVIEW > OVERVIEW > MAIN - SKILLS/THROWS - FEATURES & PROFICIENCIES

// import AbilityPointsAll from './AP_all';

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

export default function OverviewContainer(props) {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <ul className="character-nav3">
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
        <Route path={`${path}/skills-throws`}>
          <CharacterSkillThrow characterObject={props.characterObject} />
        </Route>
        <Route path={`${path}/features-proficencies`}>
          <CharacterFeaturesProficiencies
            characterObject={props.characterObject}
          />
        </Route>
      </Switch>
    </div>
  );
}
