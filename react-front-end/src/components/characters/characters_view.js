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
import OverviewContainer from './overview/overview_container'
import CombatContainer from './overview/combat_container'

// Since routes are regular React components, they
// may be rendered anywhere in the app, including in
// child elements.
//
// This helps when it's time to code-split your app
// into multiple bundles because code-splitting a
// React Router app is the same as code-splitting
// any other React app.

export default function CharacterView(props) {

  let { path, url } = useRouteMatch();

  return (

    <div>
    <ul className='character-nav'>
      <li>
        <Link to={`${url}/overview`}>Overview</Link>
      </li>
      <li>
        <Link to={`${url}/combat`}>Combat</Link>
      </li>
    </ul>

    <Switch>
      <Route exact path={path}>
      </Route>
      <Route path={`${path}/overview`}>
        <OverviewContainer characterObject={props.characterObject}/>
      </Route>
      <Route path={`${path}/combat`}>
        <CombatContainer characterObject={props.characterObject}/>
      </Route>
    </Switch>
  </div>

  );

}  


