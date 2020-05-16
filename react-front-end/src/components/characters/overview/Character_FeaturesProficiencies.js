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

// ROUTE 4C - THIS IS AFTER CLICKING MAIN
// QUICKVIEW > OVERVIEW > Features/Proficiencies

export default function CharacterFeaturesProficiencies(props) {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <List>
        <ListItem alignItems="center">
          <ListItemAvatar>
            <Avatar src="https://img.icons8.com/material/96/000000/armored-breastplate.png" />
          </ListItemAvatar>
          <ListItemText
            primary="ARMOUR"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Light Armour
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
              src="https://img.icons8.com/material/96/000000/sword.png"
            />
          </ListItemAvatar>
          <ListItemText
            primary="WEAPONS"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Crossbow, Hand, Longsword, Rapier, Shortsword, Simple Weapons
                </Typography>
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
            primary="TOOLS"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Drum, Lyre, Shawm
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
}
