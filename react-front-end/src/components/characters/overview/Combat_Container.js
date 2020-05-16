import React from 'react';
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

export default function CombatContainer() {
  const classes = useStyles();

  return (
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
                    Attack, Cast a Spell, Dash, Disengage, Dodge, Grapple, Help,
                    Hide, Improvise, Ready, Search, Shove, Use an Object
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
                    You can punch, kick, head-butt, or use a similar forceful
                    blow and deal bludgeoning damage equal to 1 + STR modifier
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
                    As a bonus action, a creature (other than yourself) within
                    60 ft. that can hear you gains an inspiration die (1d6). For
                    10 minutes, the creature can add it to one ability check,
                    attack roll, or saving throw. This can be added after seeing
                    the roll, but before knowing the outcome.
                  </Typography>
                  {' - Bonus Actions'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
}