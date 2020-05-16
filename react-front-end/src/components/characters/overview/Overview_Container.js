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
        {/* <h2 className="view-title">Overview Container</h2>
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
        </div> */}
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
