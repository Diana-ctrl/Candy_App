import './App.css';
import { AppBar, Button, Container, IconButton, Toolbar, Typography, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1
  }
}))
function App() {
  const classes = useStyles();
  return (
    <div className='App'>
      <AppBar position='fixed' color='secondary'>
        <Container fixed>
          <Toolbar>
            <IconButton color='inharit' edge='start' aria-label='menu' className={classes.menuButton} >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title} >
              Candy company
            </Typography>
            <Box mr={3} >
              <Button color='inharit' variant='outlined'>
                Log in
              </Button>
            </Box>
            <Button color='primary' variant='contained'>
              Sign up
              </Button>
          </Toolbar>
        </Container>

      </AppBar>
    </div>
  );
}

export default App;
