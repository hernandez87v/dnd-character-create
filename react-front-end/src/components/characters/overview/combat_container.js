import React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import CharacterMain from './Character_Main'

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
        <h2 className='view-title'>Combat</h2>
        <ul className='character-nav'>
          <li>
            <Link to={`${url}/stats`}>Stats</Link>
          </li>
          <li>
            <Link to={`${url}/weapons`}>Weapons</Link>
          </li>
          <li>
            <Link to={`${url}/spells`}>Spells</Link>
          </li>
          <li>
            <Link to={`${url}/dice`}>Dice</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path={path}>
          </Route>
          <Route path={`${path}/stats`}>
          </Route>
        </Switch>
      </div>

  );

}