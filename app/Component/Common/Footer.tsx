import {
  Box,
  Typography,
  Stack,
  IconButton,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#fafafa" }}>
        <Box
          sx={{
            margin: "0 auto",
            width: "85%",
            py: "40px",
            display: "flex",
            flexDirection:{md:'row', xs:'column'},
            justifyContent: "space-between",
            borderBottom: "1px solid #e6e6e6",
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: "24px" }}>
            Bandage
          </Typography>
          <Stack direction="row">
            <IconButton>
              <Image
                src="/img/icons/facebook_f.svg"
                alt="phone"
                width={24}
                height={24}
              />
            </IconButton>
            <IconButton>
              <Image
                src="/img/icons/instagram_f.svg"
                alt="phone"
                width={24}
                height={24}
              />
            </IconButton>
            <IconButton>
              <Image
                src="/img/icons/twitter_f.svg"
                alt="phone"
                width={24}
                height={24}
              />
            </IconButton>
          </Stack>
        </Box>
      </Box>

      <Box>
        <Box sx={{ width: "85%", margin: "0 auto", py: 5 }}>
          <Grid container rowGap={3}>
            <Grid item md={2} xs={12}>
              <Box>
                <Typography sx={{ fontSize: "16px", fontWeight: 700, mb: 2 }}>
                  Company Info
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#737373",
                    mb: 1,
                  }}
                >
                  About Us
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#737373",
                    mb: 1,
                  }}
                >
                  Carrier
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#737373",
                    mb: 1,
                  }}
                >
                  We are hiring
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#737373",
                    mb: 0,
                  }}
                >
                  Blog
                </Typography>
              </Box>
            </Grid>
            <Grid item md={2} xs={12}>
              <Box>
                <Typography sx={{ fontSize: "16px", fontWeight: 700, mb: 2 }}>
                  Legal
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#737373",
                    mb: 1,
                  }}
                >
                  About Us
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#737373",
                    mb: 1,
                  }}
                >
                  Carrier
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#737373",
                    mb: 1,
                  }}
                >
                  We are hiring
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#737373",
                    mb: 0,
                  }}
                >
                  Blog
                </Typography>
              </Box>
            </Grid>
            <Grid item md={2} xs={12}>
              <Box>
                <Typography sx={{ fontSize: "16px", fontWeight: 700, mb: 2 }}>
                  Features
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#737373",
                    mb: 1,
                  }}
                >
                  Business Marketing
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#737373",
                    mb: 1,
                  }}
                >
                  User Analytic
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#737373",
                    mb: 1,
                  }}
                >
                  Live Chat
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#737373",
                    mb: 0,
                  }}
                >
                  Unlimited Support
                </Typography>
              </Box>
            </Grid>
            <Grid item md={2} xs={12}>
              <Box>
                <Typography sx={{ fontSize: "16px", fontWeight: 700, mb: 2 }}>
                  Resources
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#737373",
                    mb: 1,
                  }}
                >
                  IOS & Android
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#737373",
                    mb: 1,
                  }}
                >
                  Watch a Demo
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#737373",
                    mb: 1,
                  }}
                >
                  Customers
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#737373",
                    mb: 0,
                  }}
                >
                  API
                </Typography>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box>
                <Typography sx={{ fontSize: "16px", fontWeight: 700, mb: 2 }}>
                  Get In Touch
                </Typography>
                <Box sx={{display:'flex', alignItems:'center'}}>
                <TextField
                placeholder="Your Email"
                  fullWidth
                  margin="dense"
                 size="medium"
                  InputProps={{
                    style: {
                        borderRadius:'5px 0px 0px 5px',
                        height:'50px'
                    },
                  }}
                />
                <Button variant="contained"  size="large" sx={{height:'50px', color:'#fff',   borderRadius:'0px 5px 5px 0px',fontSize:'14px', fontWeight:400,  mb:-0.3, px:3,}}>Subscribe</Button>
                </Box>
                <Typography sx={{fontSize:'12px', fontWeight:400, color:'#737373'}}>Lore imp sum dolor Amit</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{ bgcolor: "#fafafa" }}>
        <Box
          sx={{
            margin: "0 auto",
            width: "85%",
            py: "20px",
          }}
        >
          <Typography
            sx={{ fontSize: "14px", fontWeight: 700, color: "#737373", textAlign:{md:'left', xs:'center'} }}
          >
            Made With Love By Finland All Right Reserved{" "}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
