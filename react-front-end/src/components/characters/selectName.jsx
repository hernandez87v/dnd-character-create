import React , {useState} from "react";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const selectStats = (props) => {
  const [name, setName] = useState(props.name || "");

  const updateName = (val) => {
    props.setCharacterState( {        
        ...props.characterState, 
          characterName: name
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

  console.log('character',props.characterState) 
  console.log('name',name) 

    return (
    <div className="App">
        <Grid container spacing={1}>
        <Grid item xs={2}/>
        <Grid item xs={1}/>
        <Grid item xs={6}>
          <form lassName={classes.root} noValidate autoComplete="off">
            <img src={props.characterState.avatar_url} className="avatar-img"></img>
            <p>Select the name of your character</p>
            <TextField
              className="appointment__create-input text--semi-bold"
              name="name"
              onChange={(event) => setName(event.target.value)}
              onBlur= {(event) => updateName(name)}
              type="text"
              placeholder="Enter character Name"
              value = {name}
            />
          </form>
          </Grid>

        </Grid>

    </div>
    )
}

export default selectStats;