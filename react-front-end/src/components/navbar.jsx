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
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';

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
  container: {
    display: 'flex',
    flexWrap: 'wrap',
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

export default function ButtonAppBar() {
  const classes = useStyles();
  if (localStorage.getItem('login') !== 'true') {
    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <Box p={0} bgcolor="background.paper">
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
                  DnD Character Creator
                </Typography>
                <Button href="/signup" color="inherit">
                  Sing Up
                </Button>
                <Button href="/login" color="inherit">
                  Login
                </Button>
              </Toolbar>
            </AppBar>
          </Box>
        </MuiThemeProvider>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <AppBar position="static">
            <Box p={0}>
              <Toolbar>
                <Hidden only="lg">
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                  >
                    <MenuIcon />
                  </IconButton>
                </Hidden>
                <Hidden mdDown>
                  <IconButton
                    size="small"
                    href="/"
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                  >
                    Home
                  </IconButton>
                </Hidden>
                <Hidden mdDown>
                  <IconButton
                    size="small"
                    href="/createCharacter"
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                  >
                    New Character
                  </IconButton>
                </Hidden>
                <Hidden mdDown>
                  <IconButton
                    size="small"
                    href="/ShowCharacterByUser"
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                  >
                    Show My Characters
                  </IconButton>
                </Hidden>
                <Typography variant="h6" className={classes.title}>
                  <Box ml="18rem">DnD&nbsp;Character&nbsp;Creation</Box>
                </Typography>
                <Typography variant="h6" edge="start" className={classes.title}>
                  <Box ml="15rem" edge="end">
                      {localStorage.getItem('userName')}
                  </Box>
                </Typography>
                <Button href="/" color="inherit"  >
                  LogOut
                </Button>
              </Toolbar>
            </Box>
          </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}
