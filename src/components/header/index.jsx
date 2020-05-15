import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Images from '../../assets/img';

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

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <img
            src={Images.logo}
            alt="Logo"
            height="42"
            align="center"
          />
          </Typography>
          <Typography variant="h6" className={classes.title}>
                <Link href="#" color="inherit">
                    Link 1
                </Link>
                <Link href="#" color="inherit">
                    Link 2 
                </Link>
                <Link href="#" color="inherit" >
                   Link 3 
                </Link>
            </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}


