import React, {Fragment} from 'react';
import { ProductsList, Slider} from '../../components'
import { Typography, Grid, Container, Box } from '@material-ui/core';

const TiendaInfo = () => {
    return ( 
    <Fragment>
        <Slider />
        <Box mt={15}>
        <Container>
        <Grid container
            direction="row">
            <Grid xs={4}>
                <Typography>Componente de categorias</Typography>
            </Grid>
            <Grid xs={8}>
                <ProductsList />
            </Grid>
        </Grid>
        </Container>
        </Box>
    </Fragment>
    
    );
}
 
export default TiendaInfo;