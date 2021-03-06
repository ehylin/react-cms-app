import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Images from '../../assets/img';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    bottom: 0,
    position: "relative",
    width: '100%'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
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
            height="100"
            align="center"
          />
          </Typography>
          <Divider />
          <div className={classes.section2}>
        <Typography gutterBottom variant="body1">
        +56 99999999
        </Typography>
        <Typography variant="h6" >
        boldlab@qodeinteractive.com
            </Typography>
        <div>
          <Chip className={classes.chip} label="Instagram" />
          <Chip className={classes.chip} color="primary" label="Facebook" />
          <Chip className={classes.chip} label="Medium" />
          <Chip className={classes.chip} label="Hard" />
        </div>
            </div>   
        </Toolbar>
      </AppBar>
    </div>
  );
}
