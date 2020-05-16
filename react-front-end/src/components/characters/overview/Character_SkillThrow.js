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

// ROUTE 4B - THIS IS AFTER CLICKING MAIN
// QUICKVIEW > OVERVIEW > SKILL-THROW
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

export default function CharacterSkillThrow() {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <List>
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar src="https://img.icons8.com/material/96/000000/guru.png" />
          </ListItemAvatar>
          <ListItemText
            primary="WIS"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Insight
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar
              alt="Travis Howard"
              src="https://img.icons8.com/material/96/000000/guru.png"
            />
          </ListItemAvatar>
          <ListItemText
            primary="WIS"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Perception
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar src="https://img.icons8.com/material/96/000000/brainstorm-skill.png" />
          </ListItemAvatar>
          <ListItemText
            primary="INT"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Religion
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
}
