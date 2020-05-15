import React from "react";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const selectStats = (props) => {

  const updateName = (val) => {
    props.setCharacterState( {        
        ...props.characterState, 
          characterName: val
    }, []) 
  }

  
  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '20ch',
      },
    },
  }));
  const classes = useStyles();


    return (
    <div className="App">
        <Grid container spacing={1}>
        <Grid item xs={2}/>
        <Grid item xs={1}/>
        <Grid item xs={6}>
          <form className={classes.root} noValidate autoComplete="off">
            <img src={props.characterState.avatar_url} className="avatar-img"></img>
            <p>Select the name of your character</p>
            <TextField id="standard-basic" label="Name" onChange = {val => updateName(val)} />
          </form>
          </Grid>

        </Grid>

    </div>
    )
}

export default selectStats;