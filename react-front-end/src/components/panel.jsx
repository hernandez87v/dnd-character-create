import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
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
  table: {
    minWidth: 700,
  },
}));

export default function SimpleExpansionPanel(props) {
  const classes = useStyles();
  if (props.characterState[4]){
    return (
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
          <Typography className={classes.heading}>{props.characterState[0].name}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <Grid item xs={2}>
          <img src={props.characterState[0].avatar_url} className="avatar-img"></img>

            </Grid>
          <Grid item xs={3}>
            <p>Class: {props.characterState[0].character_class}</p><br/>
            <p>Level: {props.characterState[0].level}</p><br/>
          </Grid>
          <Grid item xs={3}>
            <p>Race:  {props.characterState[0].race} </p><br/>
            <p>EXP:  {props.characterState[0].experience} </p><br/>

          </Grid>
          <Grid item xs={3}>
            <p>Background:  {props.characterState[0].background} </p><br/>
            <p>Aligment:  {props.characterState[0].aligment} </p><br/>        
            </Grid>
            <Grid item xs={3}>
            <Typography variant="body2" color="textSecondary" align="center">
              <Link color="inherit" href={'/character/' + props.characterState[0].id}>
                Full View
              </Link>{' '}
            </Typography>
              </Grid>
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
          <Grid item xs={2}>
          <img src={props.characterState[1].avatar_url} className="avatar-img"></img>

            </Grid>
          <Grid item xs={3}>
            <p>Class: {props.characterState[1].character_class}</p><br/>
            <p>Level: {props.characterState[1].level}</p><br/>
          </Grid>
          <Grid item xs={3}>
            <p>Race:  {props.characterState[1].race} </p><br/>
            <p>EXP:  {props.characterState[1].experience} </p><br/>

          </Grid>
          <Grid item xs={3}>
            <p>Background:  {props.characterState[1].background} </p><br/>
            <p>Aligment:  {props.characterState[1].aligment} </p><br/>        
            </Grid>
            <Grid item xs={3}>
            <Typography variant="body2" color="textSecondary" align="center">
              <Link color="inherit" href={'/character/' + props.characterState[1].id}>
                Full View
              </Link>{' '}
      </Typography>
              </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>{props.characterState[2].name}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <Grid item xs={2}>
          <img src={props.characterState[2].avatar_url} className="avatar-img"></img>

            </Grid>
          <Grid item xs={3}>
            <p>Class: {props.characterState[2].character_class}</p><br/>
            <p>Level: {props.characterState[2].level}</p><br/>
          </Grid>
          <Grid item xs={3}>
            <p>Race:  {props.characterState[2].race} </p><br/>
            <p>EXP:  {props.characterState[2].experience} </p><br/>

          </Grid>
          <Grid item xs={3}>
            <p>Background:  {props.characterState[2].background} </p><br/>
            <p>Aligment:  {props.characterState[2].aligment} </p><br/>        
            </Grid>
            <Grid item xs={3}>
            <Typography variant="body2" color="textSecondary" align="center">
              <Link color="inherit" href={'/character/' + props.characterState[2].id}>
                Full View
              </Link>{' '}
      </Typography>
              </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>{props.characterState[3].name}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <Grid item xs={2}>
          <img src={props.characterState[3].avatar_url} className="avatar-img"></img>

            </Grid>
          <Grid item xs={3}>
            <p>Class: {props.characterState[3].character_class}</p><br/>
            <p>Level: {props.characterState[3].level}</p><br/>
          </Grid>
          <Grid item xs={3}>
            <p>Race:  {props.characterState[3].race} </p><br/>
            <p>EXP:  {props.characterState[3].experience} </p><br/>

          </Grid>
          <Grid item xs={3}>
            <p>Background:  {props.characterState[3].background} </p><br/>
            <p>Aligment:  {props.characterState[3].aligment} </p><br/>        
            </Grid>
            <Grid item xs={3}>
            <Typography variant="body2" color="textSecondary" align="center">
              <Link color="inherit" href={'/character/' + props.characterState[3].id}>
                Full View
              </Link>{' '}
      </Typography>
              </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>{props.characterState[3].name}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <Grid item xs={2}>
          <img src={props.characterState[4].avatar_url} className="avatar-img"></img>

            </Grid>
          <Grid item xs={3}>
            <p>Class: {props.characterState[4].character_class}</p><br/>
            <p>Level: {props.characterState[4].level}</p><br/>
          </Grid>
          <Grid item xs={3}>
            <p>Race:  {props.characterState[4].race} </p><br/>
            <p>EXP:  {props.characterState[4].experience} </p><br/>

          </Grid>
          <Grid item xs={3}>
            <p>Background:  {props.characterState[4].background} </p><br/>
            <p>Aligment:  {props.characterState[4].aligment} </p><br/>        
            </Grid>
            <Grid item xs={3}>
            <Typography variant="body2" color="textSecondary" align="center">
              <Link color="inherit" href={'/character/' + props.characterState[4].id}>
                Full View
              </Link>{' '}
      </Typography>
              </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        </div>
    );
  }
  else if (props.characterState[3]){
    return (
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
          <Typography className={classes.heading}>{props.characterState[0].name}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <Grid item xs={2}>
          <img src={props.characterState[0].avatar_url} className="avatar-img"></img>

            </Grid>
          <Grid item xs={3}>
            <p>Class: {props.characterState[0].character_class}</p><br/>
            <p>Level: {props.characterState[0].level}</p><br/>
          </Grid>
          <Grid item xs={3}>
            <p>Race:  {props.characterState[0].race} </p><br/>
            <p>EXP:  {props.characterState[0].experience} </p><br/>

          </Grid>
          <Grid item xs={3}>
            <p>Background:  {props.characterState[0].background} </p><br/>
            <p>Aligment:  {props.characterState[0].aligment} </p><br/>        
            </Grid>
            <Grid item xs={3}>
            <Typography variant="body2" color="textSecondary" align="center">
              <Link color="inherit" href={'/character/' + props.characterState[0].id}>
                Full View
              </Link>{' '}
            </Typography>
              </Grid>
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
          <Grid item xs={2}>
          <img src={props.characterState[1].avatar_url} className="avatar-img"></img>

            </Grid>
          <Grid item xs={3}>
            <p>Class: {props.characterState[1].character_class}</p><br/>
            <p>Level: {props.characterState[1].level}</p><br/>
          </Grid>
          <Grid item xs={3}>
            <p>Race:  {props.characterState[1].race} </p><br/>
            <p>EXP:  {props.characterState[1].experience} </p><br/>

          </Grid>
          <Grid item xs={3}>
            <p>Background:  {props.characterState[1].background} </p><br/>
            <p>Aligment:  {props.characterState[1].aligment} </p><br/>        
            </Grid>
            <Grid item xs={3}>
            <Typography variant="body2" color="textSecondary" align="center">
              <Link color="inherit" href={'/character/' + props.characterState[1].id}>
                Full View
              </Link>{' '}
      </Typography>
              </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>{props.characterState[2].name}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <Grid item xs={2}>
          <img src={props.characterState[2].avatar_url} className="avatar-img"></img>

            </Grid>
          <Grid item xs={3}>
            <p>Class: {props.characterState[2].character_class}</p><br/>
            <p>Level: {props.characterState[2].level}</p><br/>
          </Grid>
          <Grid item xs={3}>
            <p>Race:  {props.characterState[2].race} </p><br/>
            <p>EXP:  {props.characterState[2].experience} </p><br/>

          </Grid>
          <Grid item xs={3}>
            <p>Background:  {props.characterState[2].background} </p><br/>
            <p>Aligment:  {props.characterState[2].aligment} </p><br/>        
            </Grid>
            <Grid item xs={3}>
            <Typography variant="body2" color="textSecondary" align="center">
              <Link color="inherit" href={'/character/' + props.characterState[2].id}>
                Full View
              </Link>{' '}
      </Typography>
              </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>{props.characterState[3].name}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <Grid item xs={2}>
          <img src={props.characterState[3].avatar_url} className="avatar-img"></img>

            </Grid>
          <Grid item xs={3}>
            <p>Class: {props.characterState[3].character_class}</p><br/>
            <p>Level: {props.characterState[3].level}</p><br/>
          </Grid>
          <Grid item xs={3}>
            <p>Race:  {props.characterState[3].race} </p><br/>
            <p>EXP:  {props.characterState[3].experience} </p><br/>

          </Grid>
          <Grid item xs={3}>
            <p>Background:  {props.characterState[3].background} </p><br/>
            <p>Aligment:  {props.characterState[3].aligment} </p><br/>        
            </Grid>
            <Grid item xs={3}>
            <Typography variant="body2" color="textSecondary" align="center">
              <Link color="inherit" href={'/character/' + props.characterState[3].id}>
                Full View
              </Link>{' '}
      </Typography>
              </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        </div>
    );
  }
  if (props.characterState[2]){
    return (
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
          <Typography className={classes.heading}>{props.characterState[0].name}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <Grid item xs={2}>
          <img src={props.characterState[0].avatar_url} className="avatar-img"></img>

            </Grid>
          <Grid item xs={3}>
            <p>Class: {props.characterState[0].character_class}</p><br/>
            <p>Level: {props.characterState[0].level}</p><br/>
          </Grid>
          <Grid item xs={3}>
            <p>Race:  {props.characterState[0].race} </p><br/>
            <p>EXP:  {props.characterState[0].experience} </p><br/>

          </Grid>
          <Grid item xs={3}>
            <p>Background:  {props.characterState[0].background} </p><br/>
            <p>Aligment:  {props.characterState[0].aligment} </p><br/>        
            </Grid>
            <Grid item xs={3}>
            <Typography variant="body2" color="textSecondary" align="center">
              <Link color="inherit" href={'/character/' + props.characterState[0].id}>
                Full View
              </Link>{' '}
            </Typography>
              </Grid>
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
          <Grid item xs={2}>
          <img src={props.characterState[1].avatar_url} className="avatar-img"></img>

            </Grid>
          <Grid item xs={3}>
            <p>Class: {props.characterState[1].character_class}</p><br/>
            <p>Level: {props.characterState[1].level}</p><br/>
          </Grid>
          <Grid item xs={3}>
            <p>Race:  {props.characterState[1].race} </p><br/>
            <p>EXP:  {props.characterState[1].experience} </p><br/>

          </Grid>
          <Grid item xs={3}>
            <p>Background:  {props.characterState[1].background} </p><br/>
            <p>Aligment:  {props.characterState[1].aligment} </p><br/>        
            </Grid>
            <Grid item xs={3}>
            <Typography variant="body2" color="textSecondary" align="center">
              <Link color="inherit" href={'/character/' + props.characterState[1].id}>
                Full View
              </Link>{' '}
      </Typography>
              </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>{props.characterState[2].name}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <Grid item xs={2}>
          <img src={props.characterState[2].avatar_url} className="avatar-img"></img>

            </Grid>
          <Grid item xs={3}>
            <p>Class: {props.characterState[2].character_class}</p><br/>
            <p>Level: {props.characterState[2].level}</p><br/>
          </Grid>
          <Grid item xs={3}>
            <p>Race:  {props.characterState[2].race} </p><br/>
            <p>EXP:  {props.characterState[2].experience} </p><br/>

          </Grid>
          <Grid item xs={3}>
            <p>Background:  {props.characterState[2].background} </p><br/>
            <p>Aligment:  {props.characterState[2].aligment} </p><br/>        
            </Grid>
            <Grid item xs={3}>
            <Typography variant="body2" color="textSecondary" align="center">
              <Link color="inherit" href={'/character/' + props.characterState[2].id}>
                Full View
              </Link>{' '}
      </Typography>
              </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        </div>
    );
  }
  else if (props.characterState[1]){
    return (
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
          <Typography className={classes.heading}>{props.characterState[0].name}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <Grid item xs={2}>
          <img src={props.characterState[0].avatar_url} className="avatar-img"></img>

            </Grid>
          <Grid item xs={3}>
            <p>Class: {props.characterState[0].character_class}</p><br/>
            <p>Level: {props.characterState[0].level}</p><br/>
          </Grid>
          <Grid item xs={3}>
            <p>Race:  {props.characterState[0].race} </p><br/>
            <p>EXP:  {props.characterState[0].experience} </p><br/>

          </Grid>
          <Grid item xs={3}>
            <p>Background:  {props.characterState[0].background} </p><br/>
            <p>Aligment:  {props.characterState[0].aligment} </p><br/>        
            </Grid>
            <Grid item xs={3}>
            <Typography variant="body2" color="textSecondary" align="center">
              <Link color="inherit" href={'/character/' + props.characterState[0].id}>
                Full View
              </Link>{' '}
            </Typography>
              </Grid>
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
          <Grid item xs={2}>
          <img src={props.characterState[1].avatar_url} className="avatar-img"></img>

            </Grid>
          <Grid item xs={3}>
            <p>Class: {props.characterState[1].character_class}</p><br/>
            <p>Level: {props.characterState[1].level}</p><br/>
          </Grid>
          <Grid item xs={3}>
            <p>Race:  {props.characterState[1].race} </p><br/>
            <p>EXP:  {props.characterState[1].experience} </p><br/>

          </Grid>
          <Grid item xs={3}>
            <p>Background:  {props.characterState[1].background} </p><br/>
            <p>Aligment:  {props.characterState[1].aligment} </p><br/>        
            </Grid>
            <Grid item xs={3}>
            <Typography variant="body2" color="textSecondary" align="center">
              <Link color="inherit" href={'/character/' + props.characterState[1].id}>
                Full View
              </Link>{' '}
      </Typography>
              </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        </div>
    );
  }
  else if (props.characterState[0]) {
    return (
      <div className={classes.root}>
              <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
          <Typography className={classes.heading}>{props.characterState[0].name}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <Grid item xs={2}>
          <img src={props.characterState[0].avatar_url} className="avatar-img"></img>

            </Grid>
          <Grid item xs={3}>
            <p>Class: {props.characterState[0].character_class}</p><br/>
            <p>Level: {props.characterState[0].level}</p><br/>
          </Grid>
          <Grid item xs={3}>
            <p>Race:  {props.characterState[0].race} </p><br/>
            <p>EXP:  {props.characterState[0].experience} </p><br/>

          </Grid>
          <Grid item xs={3}>
            <p>Background:  {props.characterState[0].background} </p><br/>
            <p>Aligment:  {props.characterState[0].aligment} </p><br/>        
            </Grid>
            <Grid item xs={3}>
            <Typography variant="body2" color="textSecondary" align="center">
              <Link color="inherit" href={'/character/' + props.characterState[0].id}>
                Full View
              </Link>{' '}
            </Typography>
              </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      
      </div>
    );
  
  } else {
    return (
    <h1>loading</h1>
    )
  }
}
