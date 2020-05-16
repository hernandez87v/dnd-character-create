import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CombatStats from './Combat_Stats';
import CombatWeapons from './Combat_Weapons';
import CombatSpells from './Combat_Spells';
import CombatDice from './Combat_Dice';
// ROUTE 3B - THIS IS AFTER CLICKING MAIN
// QUICKVIEW > COMBAT CONTAINER
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function CombatContainer(props) {
  let { path, url } = useRouteMatch();
  const classes = useStyles();

  return (
    <Router>
      <div>
        <Container maxWidth="md">
          <Box display="flex" alignItems="center" justifyContent="center">
            <List>
              <ListItem alignItems="center">
                <ListItemAvatar>
                  <Avatar src="https://img.icons8.com/material/96/000000/sparring--v1.png" />
                </ListItemAvatar>
                <ListItemText
                  primary="Actions in Combat"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Attack, Cast a Spell, Dash, Disengage, Dodge, Grapple,
                        Help, Hide, Improvise, Ready, Search, Shove, Use an
                        Object
                      </Typography>
                      {' - Actions'}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="center">
                <ListItemAvatar>
                  <Avatar src="https://img.icons8.com/material/96/000000/angry-fist.png" />
                </ListItemAvatar>
                <ListItemText
                  primary="Unarmed Strike"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        You can punch, kick, head-butt, or use a similar
                        forceful blow and deal bludgeoning damage equal to 1 +
                        STR modifier
                      </Typography>
                      {' - Actions'}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="center">
                <ListItemAvatar>
                  <Avatar src="https://img.icons8.com/material/96/000000/toolbox--v1.png" />
                </ListItemAvatar>
                <ListItemText
                  primary="Actions in Combat"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Two-Weapon Fighting
                      </Typography>
                      {' - Bonus Actions'}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="center">
                <ListItemAvatar>
                  <Avatar src="https://img.icons8.com/material/96/000000/wizard.png" />
                </ListItemAvatar>
                <ListItemText
                  primary="Spells"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Misty Step(2nd)
                      </Typography>
                      {' - Bonus Actions'}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="center">
                <ListItemAvatar>
                  <Avatar src="https://img.icons8.com/material/96/000000/magical-scroll.png" />
                </ListItemAvatar>
                <ListItemText
                  primary="Bardic Inspiration"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        As a bonus action, a creature (other than yourself)
                        within 60 ft. that can hear you gains an inspiration die
                        (1d6). For 10 minutes, the creature can add it to one
                        ability check, attack roll, or saving throw. This can be
                        added after seeing the roll, but before knowing the
                        outcome.
                      </Typography>
                      {' - Bonus Actions'}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </Box>
        </Container>

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
    </Router>
  );
}
