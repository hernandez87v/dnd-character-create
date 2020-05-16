import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import CombatStats from './Combat_Stats';
import CombatWeapons from './Combat_Weapons';
import CombatSpells from './Combat_Spells';
import CombatDice from './Combat_Dice';
// ROUTE 3B - THIS IS AFTER CLICKING MAIN
// QUICKVIEW > COMBAT CONTAINER

export default function CombatContainer(props) {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <ul className="character-nav3">
        <li>
          <Link class="crumb-button" to={`${url}/stats`}>
            <button variant="contained" color="primary">
              Stats
            </button>
          </Link>
        </li>
        <li>
          <Link class="crumb-button" to={`${url}/weapons`}>
            <button variant="contained" color="primary">
              Weapons
            </button>
          </Link>
        </li>
        <li>
          <Link class="crumb-button" to={`${url}/spells`}>
            <button variant="contained" color="primary">
              Spells
            </button>
          </Link>
        </li>
        <li>
          <Link class="crumb-button" to={`${url}/dice`}>
            <button variant="contained" color="primary">
              Dice
            </button>
          </Link>
        </li>
      </ul>

      <Switch>
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
