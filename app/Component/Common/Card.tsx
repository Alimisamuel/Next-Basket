import { Avatar, Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
  <>
  <Box sx={{cursor:'pointer', transition:'0.2s all linear', '&:hover':{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}}>
  <Box sx={{width:'100%', position:'relative', height:{md:'235px', xs:'360px'}}}>

    <Image src="/img/product.png" alt='product' objectFit='cover'layout='fill' />
  </Box>
   <Box sx={{py:3}}>
    <Typography sx={{fontWeight:700, fontSize:'16px', textAlign:'center'}}>Graphic Design</Typography>
    <Typography sx={{color:'#737373', fontWeight:700, fontSize:'14px', textAlign:'center'}}>English Department</Typography>
    <Box sx={{mt:1, display:'flex', justifyContent:'center', columnGap:2}}>
        <Typography sx={{color:'#bdbdbd', fontWeight:700, fontSize:'16px'}}>$16.48</Typography>
        <Typography sx={{color:'#23856D', fontWeight:700, fontSize:'16px'}}>$6.48</Typography>
    </Box>
   </Box>
  </Box>
  </>
  )
}

export default Card