import React from 'react';
import {Button,Typography,Container} from '@mui/material'
function Material()
{
    return(
        <Container>
            <Typography>
            This is my first material ui 
            </Typography>
            <Button variant ="contained" color="primary">Click me</Button>
        </Container>
    );
}
export default Material;