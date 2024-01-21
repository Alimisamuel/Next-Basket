import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import "../../globals.css";
import styles from "../../page.module.css";

const Banner = () => {
  return (
    <>
      <Grid container spacing={1} sx={{ py: 5, height: {md:"600px", xs:'auto'} }}>
        <Grid item md={6} xs={12}>
          <Box
            className={styles.banner_1}
            sx={{ width: "100%", p: 3, boxSizing: "border-box" }}
          >
            <Typography
              sx={{ color: "#2DC071", fontWeight: 700, fontSize: "14px" }}
            >
              5 Items
            </Typography>
            <Typography sx={{ fontWeight: 700, fontSize: "40px" }}>
              FURNITURE
            </Typography>
            <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
              Read More
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Grid container rowSpacing={1} sx={{ width: "100%", height: "100%" }}>
            <Grid item md={12} xs={12} sx={{ height: "50%" }}>
              <Box
                className={styles.banner_2}
                sx={{
                  width: "100%",
                  height: "50%",
                  p: 3,
                  boxSizing: "border-box",
                }}
              >
                <Typography
                  sx={{ color: "#2DC071", fontWeight: 700, fontSize: "14px" }}
                >
                  5 Items
                </Typography>
                <Typography sx={{ fontWeight: 700, fontSize: "24px" }}>
                  FURNITURE
                </Typography>
                <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
                  Read More
                </Typography>
              </Box>
            </Grid>
            <Grid item md={12} xs={12} sx={{ height: "52%" }}>
              <Grid container spacing={1} sx={{ height: "100%" }}>
                <Grid item md={6} xs={12} sx={{ height: "100%" }}>
                  <Box
                    className={styles.banner_3}
                    sx={{
                      width: "100%",
                      height: "100%",
                      p: 3,
                      boxSizing: "border-box",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#2DC071",
                        fontWeight: 700,
                        fontSize: "14px",
                      }}
                    >
                      5 Items
                    </Typography>
                    <Typography sx={{ fontWeight: 700, fontSize: "24px" }}>
                      FURNITURE
                    </Typography>
                    <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
                      Read More
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={6} xs={12} sx={{ height: "100%" }}>
                  <Box
                    className={styles.banner_4}
                    sx={{ width: "100%", p: 3, boxSizing: "border-box" }}
                  >
                    <Typography
                      sx={{
                        color: "#2DC071",
                        fontWeight: 700,
                        fontSize: "14px",
                      }}
                    >
                      5 Items
                    </Typography>
                    <Typography sx={{ fontWeight: 700, fontSize: "24px" }}>
                      FURNITURE
                    </Typography>
                    <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
                      Read More
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Banner;
