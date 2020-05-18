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
// QUICKVIEW > COMBAT > STATS - WEAPONS - SPELLS - DICE
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

export default function CombatStats() {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="md">
        <Box display="flex" alignItems="center" justifyContent="center">
          <List>
            <ListItem alignItems="center">
              <ListItemAvatar>
                <Avatar src="https://img.icons8.com/ios-filled/50/000000/action.png" />
              </ListItemAvatar>
              <ListItemText
                primary="Hit Die"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      8
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="center">
              <ListItemAvatar>
                <Avatar src="https://img.icons8.com/ios/50/000000/crusader.png" />
              </ListItemAvatar>
              <ListItemText
                primary="Armour Class"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      17
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="center">
              <ListItemAvatar>
                <Avatar src="https://img.icons8.com/android/96/000000/exercise.png" />
              </ListItemAvatar>
              <ListItemText
                primary="Speed"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      30 ft.
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="center">
              <ListItemAvatar>
                <Avatar src="https://img.icons8.com/windows/96/000000/language-skill.png" />
              </ListItemAvatar>
              <ListItemText
                primary="Languages"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Common, Elvish
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Container>
    </div>
  );
}
