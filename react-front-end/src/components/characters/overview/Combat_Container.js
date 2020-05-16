import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import CombatStats from './Combat_Stats';
import CombatWeapons from './Combat_Weapons';
import CombatSpells from './Combat_Spells';
import CombatDice from './Combat_Dice';
// ROUTE 3B - THIS IS AFTER CLICKING MAIN
// QUICKVIEW > COMBAT CONTAINER

import AbilityPointsAll from './AP_all';
// Since routes are regular React components, they
// may be rendered anywhere in the app, including in
// child elements.
//
// This helps when it's time to code-split your app
// into multiple bundles because code-splitting a
// React Router app is the same as code-splitting
// any other React app.

export default function CombatContainer(props) {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2 className="view-title">Combat Container</h2>
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
          <Link to={`${url}/stats`}>
            <button variant="contained" color="primary">
              Stats
            </button>
          </Link>
        </li>
        <li>
          <Link to={`${url}/weapons`}>
            <button variant="contained" color="primary">
              Weapons
            </button>
          </Link>
        </li>
        <li>
          <Link to={`${url}/spells`}>
            <button variant="contained" color="primary">
              Spells
            </button>
          </Link>
        </li>
        <li>
          <Link to={`${url}/dice`}>
            <button variant="contained" color="primary">
              Dice
            </button>
          </Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}></Route>
        <Route path={`${path}/stats`}>
          <CombatStats characterObject={props.characterObject} />
        </Route>
        <Route path={`${path}/weapons`}>
          <CombatWeapons characterObject={props.characterObject} />
        </Route>
        <Route path={`${path}/spells`}>
          <CombatSpells characterObject={props.characterObject} />
        </Route>
        <Route path={`${path}/dice`}>
          <CombatDice characterObject={props.characterObject} />
        </Route>
      </Switch>
    </div>
  );
}
