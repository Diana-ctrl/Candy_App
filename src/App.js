import './App.css';
import {
  AppBar, Button, Container, IconButton, Toolbar, Typography,
  Box, Paper, Grid, DialogTitle, DialogContent, DialogContentText
} from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MenuIcon from '@material-ui/icons/Menu';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import { HalloweenSweets } from './HalloweenSweets';
import { VeganSweets } from './VeganSweets';
import { useState } from 'react';
import { Donats } from './Donuts';
import { Croissants } from './Croissants';
import { Candies } from './Candies';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1
  },
  mainFeaturesPost: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),

    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: 'rgba(0,0,0,.3)',
  },
  mainFeaturesPostContent: {
    position: 'relative',
    padding: theme.spacing(10),
    marginTop: theme.spacing(10)
  },
  cardMedia: {
    paddingTop: '56.25%'
  },
  cardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: theme.spacing(4)
  }
}))
function App() {
  const classes = useStyles();
  const [value, setValue] = useState('recents')

  const handleChange = (e, newValue) => {
    setValue(newValue);
  }

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <AppBar position='fixed' color='secondary'>
        <Container fixed>
          <Toolbar>
            <IconButton color='inharit' edge='start' aria-label='menu' className={classes.menuButton} >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title} >
              Buy sweets
            </Typography>
            <Box mr={3} >
              <Button color='inharit' variant='outlined' onClick={handleClickOpen}>
                Log in
              </Button>
              <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>Log in</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Log in to see videos
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin='dense'
                    id='name'
                    label='Email Adress'
                    type='email'
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin='dense'
                    id='pass'
                    label='Password'
                    type='password'
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color='secondary'>
                    Cancel
                  </Button>
                  <Button onClick={handleClose} color='secondary'>
                    Log in
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Button color='primary' variant='contained'>
              Sign up
              </Button>
          </Toolbar>
        </Container>
      </AppBar>

      <main>
        <Paper className={classes.mainFeaturesPost}
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1582293041079-7814c2f12063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)' }}>
          <Container fixed>
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>

                <div className={classes.mainFeaturesPostContent}>

                  <Typography
                    variant="h3"
                    className={classes.title}
                    paragraph
                  >
                    When It Comes to Sweets, Never Say Never!
                  </Typography>

                  <Button variant="contained" color='secondary'>
                    Learn more
                  </Button>
                </div>
              </Grid>
            </Grid>

          </Container>
        </Paper>
        <div className={classes.mainContent}>
          <Container maxWidth='md'>
            <Typography
              variant='h2' align='center' color='textPrimary' gutterBottom>
              Find Your Favourite Sweets
            </Typography>
            <Typography
              variant='h5' align='center' color='textSecondary' paragraph>
              We have the largest selection of sweets for every taste and color
            </Typography>
            <div className={classes.mainButtons}>
              <Grid container spacing={5} justify="center">
                <Grid item>
                  <Button variant='contained' color='secondary'>
                    Start now
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='secondary'>
                    Read more
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            <HalloweenSweets />
            <VeganSweets />
            <Donats />
            <Croissants />
            <Candies />
          </Grid>
        </Container>
      </main>
      <footer>
        <Typography variant='h6' align='center' gutterBottom>
          Footer
        </Typography>
        <BottomNavigation value={value}
          onChange={handleChange}
          className={classes.root}
        >
          <BottomNavigationAction
            label='Recents'
            value='recents'
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            label='Favorietes'
            value='favorietes'
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label='Nearby'
            value='nearby'
            icon={<LocationOnIcon />}
          />
          <BottomNavigationAction
            label='Folder'
            value='folder'
            icon={<FolderIcon />}
          />
        </BottomNavigation>
        <Typography align='center' colore='primary'
          component='p' variant='subtitle1'>
          Welcome
        </Typography>
      </footer>
    </>

  );
}

export default App;
