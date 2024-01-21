import { Box, Button, Typography } from "@mui/material";
import React from "react";
import styles from "../page.module.css";

const Experience = () => {
  return (
    <>
      <Box className={styles.banner_bottom} sx={{ height:{md: "640px", xs:'712px'} }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Typography
            sx={{ color: "#23A6F0", fontSize: "14px", fontWeight: 700 }}
          >
            Designing Better Experience
          </Typography>
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: 700,
              width: {md:"50%", xs:'100%'},
              textAlign: "center",
              mt: 3,
            }}
          >
            Problems trying to resolve the conflict between{" "}
          </Typography>
          <Typography
            sx={{
              mt: 3,
              color: "#737373",
              fontSize: "14px",
              fontWeight: 400,
              textAlign: "center",
              width: {md:"40%", xs:'80%'}
            }}
          >
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:{" "}
          </Typography>
          <Typography
            sx={{
              mt: 3,
              color: "#23856D",
              fontSize: "24px",
              fontWeight: 700,
              textAlign: "center",
              width: "40%",
            }}
          >
            $16.48
          </Typography>

          <Button variant="contained" sx={{mt:4, color:'#fff', fontWeight:700, px:4}}>ADD YOUR CALL TO ACTION</Button>
        </Box>
      </Box>
    </>
  );
};

export default Experience;
