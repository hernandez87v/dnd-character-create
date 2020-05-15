import React, { useState, useEffect } from 'react';
// import CharacterView from './characters_view';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
// import '../../styles/character_view.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';

// PAGE 1 - THIS IS AFTER CLICKING QUICKVIEW
// QUICKVIEW - INVENTORY - DETAILS & NOTES

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CharacterContainer() {
  const [characterData, setCharacterData] = useState({});
  const classes = useStyles();

  const getCharacter = function () {
    axios
      .get('/api/character/id')
      // Once we get a response and store data, let's change the loading state
      .then((response) => {
        setCharacterData({
          ...characterData,
          ...response.data.character[0],
        });
      })
      // If we catch any errors connecting, let's update accordingly
      .catch((error) => setCharacterData({ error, isLoading: false }));
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link
        color="inherit"
        to="/quickview"
        onClick={handleClick}
        className={classes.link}
      >
        <HomeIcon className={classes.icon} />
        Quickview
      </Link>
      <Link
        color="inherit"
        to="/inventory"
        onClick={handleClick}
        className={classes.link}
      >
        <WhatshotIcon className={classes.icon} />
        Inventory
      </Link>
      <Typography color="textPrimary" className={classes.link}>
        <GrainIcon className={classes.icon} />
        Details & Notes
      </Typography>
    </Breadcrumbs>
  );
}
