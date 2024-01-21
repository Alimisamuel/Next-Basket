import { Box, Grid, Rating, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const Reviews = () => {
  return (
    <>
      <Box sx={{ my: 20, bgcolor:'#fafafa' }}>
        <Grid container spacing={0} sx={{margin:'0 auto', width:'85%'}}>
          <Grid item md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                rowGap: 2,
                py: 3,
              }}
            >
              <Typography sx={{ fontWeight: 700, fontSize: "24px" }}>
                What they say about us
              </Typography>
              <Image
                src="/img/reviews/ava.png"
                width={90}
                height={90}
                alt="avater"
              />
              <Rating name="read-only" value={4} readOnly size="small" />
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#737373",
                  fontSize: "14px",
                  fontWeight: 700,
                  width:{md:'60%', xs:'90%'}
                }}
              >
                Slate helps you see how many more days you need to work to{" "}
               
                reach your financial goal.
              </Typography>
              <Typography sx={{ color: "#23A6F0", fontWeight: 700 }}>
                Regina Miles
              </Typography>
              <Typography sx={{ fontWeight: 700 }}>Designer</Typography>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box
              sx={{
                height: "400px",
                overflow: "hidden",
                display: "grid",
                gridTemplateColumns: "auto auto auto",
                ml: {md:15, xs:-1.5},
                gap: 1,
              }}
            >
              <Box
                sx={{ width: {md:"142px",xs:'112px'}, position: "relative", height: {md:"142px", xs:'112px'} }}
              >
                <Image
                  src="/img/reviews/1.png"
                  layout="fill"
                  alt="image"
                  objectFit="cover"
                />
              </Box>
              <Box
                sx={{ width: {md:"142px",xs:'112px'}, position: "relative", height: {md:"142px", xs:'112px'} }}
              >
                <Image
                  src="/img/reviews/2.png"
                  layout="fill"
                  alt="image"
                  objectFit="cover"
                />
              </Box>
              <Box
                sx={{ width: {md:"142px",xs:'112px'}, position: "relative", height: {md:"142px", xs:'112px'} }}
              >
                <Image
                  src="/img/reviews/3.png"
                  layout="fill"
                  alt="image"
                  objectFit="cover"
                />
              </Box>
              <Box
                sx={{ width: {md:"142px",xs:'112px'}, position: "relative", height: {md:"142px", xs:'112px'} }}
              >
                <Image
                  src="/img/reviews/4.png"
                  layout="fill"
                  alt="image"
                  objectFit="cover"
                />
              </Box>
              <Box
                sx={{ width: {md:"142px",xs:'112px'}, position: "relative", height: {md:"142px", xs:'112px'} }}
              >
                <Image
                  src="/img/reviews/5.png"
                  layout="fill"
                  alt="image"
                  objectFit="cover"
                />
              </Box>
              <Box
                sx={{ width: {md:"142px", xs:'112px'}, position: "relative", height: {md:"142px", xs:'112px'} }}
              >
                <Image
                  src="/img/reviews/6.png"
                  layout="fill"
                  alt="image"
                  objectFit="cover"
                />
              </Box>
              <Box
                        sx={{ width: {md:"142px", xs:'112px'}, position: "relative", height: {md:"142px", xs:'112px'} }}
              >
                <Image
                  src="/img/reviews/7.png"
                  layout="fill"
                  alt="image"
                  objectFit="cover"
                />
              </Box>
              <Box
                        sx={{ width: {md:"142px", xs:'112px'}, position: "relative", height: {md:"142px", xs:'112px'} }}
              >
                <Image
                  src="/img/reviews/8.png"
                  layout="fill"
                  alt="image"
                  objectFit="cover"
                />
              </Box>
              <Box
                        sx={{ width: {md:"142px", xs:'112px'}, position: "relative", height: {md:"142px", xs:'112px'} }}
              >
                <Image
                  src="/img/reviews/9.png"
                  layout="fill"
                  alt="image"
                  objectFit="cover"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Reviews;
