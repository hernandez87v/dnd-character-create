import React from 'react';
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6f0000',
    },
    secondary: {
      main: '#6f0000',
    },
  },
});

export default function ButtonAppBar(props) {
  const classes = useStyles();
  console.log('props',props)
  if (props.login === true){
    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                DND testing
              </Typography>
              <Button href="/signup" color="inherit">
                Sing Up
              </Button>
              <Button href="/login" color="inherit">
                Login
              </Button>
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <AppBar position="static">
            <Toolbar>
              <IconButton href = "/"
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                Home
              </IconButton>
              <IconButton href = "/createCharacter"
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                New Character

              </IconButton>
              <IconButton href = "/ShowCharacterByUser"
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                Show My Characters
                
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                DND Character Creation
              </Typography>
              <Typography variant="h9" aligment = 'left' className={classes.title}>
                santiFedericoni
              </Typography>
              <Button href="/" color="inherit">
                LogOut
              </Button>
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}
