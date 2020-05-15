import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    
  },
  // overrides: {
  // MuiGridListTile:{
  //   root:{
  //     padding: '0px'
  //   }
  // }
  // },
  gridList: {
    // width: '100%',
    // height: '100%',
  },
}));
export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList spacing={0} className={classes.gridList} cellHeight={600}  cols={8} rows={1}>
        {tileData.map((tile) => (
          <GridListTile  key={tile.img} cols={tile.cols || 1} rows={tile.rows || 1}>
            <img  src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
