import React from 'react'
import CharacterView from './characters_view'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

export default function CharacterContainer() {


  
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/quickview">Quickview</Link>
          </li>
          <li>
            <Link to="/inventory">Inventory</Link>
          </li>
          <li>
            <Link to="/details-notes">Details & Notes</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route path="/quickview">
            <CharacterView />
          </Route>
          <Route path="/inventory">
          </Route>
          <Route path="/details-notes">
          </Route>
        </Switch>
      </div>
    </Router>
  );
}