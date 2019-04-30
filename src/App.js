import React from 'react';
import './App.css';
// import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  return (
    <div className="App">
      <AppBar>
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu" className="ham-menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            POKEAPI
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
