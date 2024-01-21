import Image from 'next/image'
import styles from './page.module.css'
import {Box, Button, ThemeProvider} from '@mui/material'
import theme from './utils/theme'
import Navbar from './Component/Common/Navbar'
import Banner from './Component/Common/Banner'
import Featured from './Component/Featured'
import BestService from './Component/BestService'
import FeaturedPost from './Component/FeaturedPost'
import Reviews from './Component/Reviews'
import Experience from './Component/Experience'
import Footer from './Component/Common/Footer'

export default function Home() {
  return (
   <>
   <ThemeProvider theme={theme}>
<Navbar/>
<Box sx={{margin:'0 auto', width:'85%', mt:16}}>

<Banner/>
<Featured/>
<BestService/>
<FeaturedPost/>


</Box>

<Reviews/>

<Experience/>
<Footer/>
   </ThemeProvider>
   
   </>
  )
}
