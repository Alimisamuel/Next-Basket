import React from 'react'
import Navbar from '../Component/Common/Navbar'
import { ThemeProvider } from '@mui/material'
import theme from '../utils/theme'
import Footer from '../Component/Common/Footer'

const page = () => {
  return (
<>
<ThemeProvider theme={theme}>
<Navbar/>
<Footer/>
</ThemeProvider>
</>
  )
}

export default page