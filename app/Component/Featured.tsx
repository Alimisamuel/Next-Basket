import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Card from './Common/Card'

const Featured = () => {
  return (
   <>
   <Box sx={{mt:{md:5, xs:25}, mb:5}}>
    <Box>
        <Typography sx={{color:'#737373', fontSize:'20px', fontWeight:400, textAlign:'center'}}>Featured Products</Typography>
        <Typography sx={{fontWeight:700, fontSize:'24px', textAlign:'center'}}>BESTSELLER PRODUCTS</Typography>
        <Typography sx={{fontSize:'14px', fontWeight:400, color:'#737373', textAlign:'center'}}>Problems trying to resolve the conflict between </Typography>
    </Box>

    <Box sx={{my:6}}>
<Grid container spacing={1} sx={{rowGap:{md:1, xs:3}}}>
    <Grid item md={2.4} xs={12}>
        <Card/>
    </Grid>
    <Grid item md={2.4} xs={12}>
        <Card/>
    </Grid>
    <Grid item md={2.4} xs={12}>
        <Card/>
    </Grid>
    <Grid item md={2.4} xs={12}>
        <Card/>
    </Grid>
    <Grid item md={2.4} xs={12}>
        <Card/>
    </Grid>

   
  
</Grid>
<Box sx={{display:'grid', placeItems:'center', mt:4}}>
        <Button variant='outlined' sx={{fontWeight:700, fontSize:'14px'}}>LOAD MORE PRODUCTS</Button>
    </Box>
    </Box>

   </Box>
   </>
  )
}

export default Featured