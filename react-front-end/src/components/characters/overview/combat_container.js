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
        <h2>Overview</h2>
        <ul>
          <li>
            <Link to={`${url}/main`}>Main</Link>
          </li>
          <li>
            <Link to={`${url}/skills-throws`}>Skills/Throws</Link>
          </li>
          <li>
            <Link to={`${url}/features-proficencies`}>Features & Proficencies</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path={path}>
            <h3>Please select a topic.</h3>
          </Route>
          <Route path={`${path}/main`}>
            <CharacterMain characterObject={props.characterObject}/>
          </Route>
        </Switch>
      </div>

  );

}