import React, { Fragment } from 'react';
import {Container, Grid, Typography} from '@material-ui/core';
import Images from '../../assets/img';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const Home = () => {
    return ( 
        <Fragment>
        
            <Grid container
                direction="row"
                justify="center"
                alignItems="center">
                    
                <Grid item xs={6}>
                    <Container>
                        <Grid 
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        >
                            <List >
                                <ListItem>
                                    <b><ListItemText primary="Empieza aqui_"  /></b>
                                </ListItem>
                                <ListItem>
                                <b><ListItemText primary="Blog_"  /></b>
                                </ListItem>
                                <ListItem>
                                <b><ListItemText primary="Tienda_"  /></b>
                                </ListItem>
                                <ListItem>
                                <b><ListItemText primary="Contacto_"  /></b>
                                </ListItem>
                            </List>
                            
                        </Grid>
                    </Container>
                </Grid>
     
                <Grid item xs={6}>
                    <Typography>
                           <img width='100%' src={Images.img12} alt=""/>
                    </Typography>
                </Grid>
            </Grid>
        </Fragment>
     );
}
 
export default Home;