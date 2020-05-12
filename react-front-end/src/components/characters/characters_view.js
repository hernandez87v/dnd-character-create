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
import CharacterMain from './overview/Character_Main'

// Since routes are regular React components, they
// may be rendered anywhere in the app, including in
// child elements.
//
// This helps when it's time to code-split your app
// into multiple bundles because code-splitting a
// React Router app is the same as code-splitting
// any other React app.

export default function CharacterView() {


  
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/overview">Character</Link>
          </li>
          <li>
            <Link to="/combat">Combat</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route path="/overview">
            <OverviewCard />
          </Route>
          <Route path="/combat">
            <CombatCard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function OverviewCard() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
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
          <CharacterMain />
        </Route>
      </Switch>
    </div>
  );
}

function CombatCard() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Combat</h2>
      <ul>
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
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}
