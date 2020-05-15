import React from 'react';
// import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // useParams,
  useRouteMatch,
} from 'react-router-dom';
import OverviewContainer from './overview/overview_container';
import CombatContainer from './overview/combat_container';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

// PAGE 2 - THIS IS AFTER CLICKING QUICKVIEW
// QUICKVIEW > OVERVIEW - COMBAT

export default function CharacterView(props) {
  const classes = useStyles();
  let { path, url } = useRouteMatch();

  const handleChange = (path, url) => {
    setValue(url);
  };

  return (
    <div>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Link to="/quickview">
            <Tab label="Overview" />
          </Link>
          <Tab label="Combat" />

          <Switch>
            <Route exact path={path}></Route>
            <Route path={`${path}/overview`}>
              <OverviewContainer characterObject={props.characterObject} />
            </Route>
            <Route path={`${path}/combat`}>
              <CombatContainer characterObject={props.characterObject} />
            </Route>
          </Switch>
        </Tabs>
      </Paper>
    </div>
  );
}
