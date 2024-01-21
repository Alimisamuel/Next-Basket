"use client"
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
    palette:{
        primary:{
            main:"#23A6F0"
        }
    },
    typography:{
        fontFamily:"Montserrat",
      h1:{
fontWeight:700
      },

        button:{
            textTransform:'initial',
            

        }
    }
});

export default theme;
