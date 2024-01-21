import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import PostCard from './Common/PostCard'

const FeaturedPost = () => {
  return (
   <>
   <Box sx={{ py:10, }}>
<Box sx={{}}>
<Typography sx={{color:'#23A6F0', fontSize:'14px', textAlign:'center', fontWeight:700}}>Practice Advice</Typography>
<Typography sx={{fontWeight:700, fontSize:'40px', textAlign:'center'}}>Featured Posts</Typography>

<Box sx={{mt:6}}>
<Grid container spacing={2}>
    <Grid item md={4}>
        <PostCard src="/img/post/1.png"/>
    </Grid>
    <Grid item md={4}>
        <PostCard src="/img/post/2.png" />
    </Grid>
    <Grid item md={4}>
        <PostCard src="/img/post/3.png"/>
    </Grid>
</Grid>
</Box>
</Box>
   </Box>
   </>
  )
}

export default FeaturedPost