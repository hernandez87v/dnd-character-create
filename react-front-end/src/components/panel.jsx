import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleExpansionPanel(props) {
  const classes = useStyles();
  if (props.characterState[0]){
console.log('props on panel',props.characterState[0].id)
  }
  if (props.characterState[0]){

    return (
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{props.characterState[0].name}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <Grid item xs={3}>
            <p>Class: {props.characterState[0].character_class}</p><br/>
          </Grid>
          <Grid item xs={3}>
            <p>Race:  {props.characterState[0].race} </p><br/>
          </Grid>
          <Grid item xs={3}>
            <p>Background:  {props.characterState[0].background} </p><br/>
            </Grid>
            <Grid item xs={3}>
            <Typography variant="body2" color="textSecondary" align="center">
              <Link color="inherit" href="/character">
                Full View
              </Link>{' '}
      </Typography>
              </Grid>
          {/* <img src={props.characterState[0].avatar_url} className="avatar-img"></img> */}

            {/* <Typography>{props.characterState[0].avatar_url}</Typography><br/> */}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>{props.characterState[1].name}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>Class{props.characterState[0].character_class}</Typography><br/>
            <Typography>Race {props.characterState[0].race}</Typography><br/>
            {/* <Button/> */}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      
      </div>
    );
  }
  else {
    return (
    <h1>loading</h1>
    )
  }
}
