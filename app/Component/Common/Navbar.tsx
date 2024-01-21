"use client"
import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Theme,
  Typography,
  useMediaQuery,
  
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { useTheme } from '@mui/material/styles'

const Navbar = () => {
const theme : Theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
      <AppBar sx={{ background: "transparent" }}>
        <Box
          sx={{
            bgcolor: "#23856D",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "56px",
            px: 6,
          }}
        >
        {
            !isMobile && (
                <>
                  <Box sx={{ display: "flex", alignItems: "center", columnGap: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", columnGap: 1 }}>
              <Image
                src="/img/icons/phone.svg"
                alt="phone"
                width={16}
                height={16}
              />
              <Typography
                sx={{ color: "#fff", fontWeight: 700, fontSize: "14px" }}
              >
                (225) 555-0118
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", columnGap: 1 }}>
              <Image
                src="/img/icons/email.svg"
                alt="phone"
                width={16}
                height={16}
              />
              <a href="mailto:michelle.rivera@example.com">
                <Typography
                  sx={{ color: "#fff", fontWeight: 700, fontSize: "14px" }}
                >
                  michelle.rivera@example.com
                </Typography>
              </a>
            </Box>
          </Box> 
           <Box>
            <Typography
              sx={{ color: "#fff", fontWeight: 700, fontSize: "14px" }}
            >
              Follow Us and get a chance to win 80% off
            </Typography>
          </Box>
                </>
            )
        }
          <Box sx={{ display: "flex", alignItems: "center", columnGap: 1 }}>
            <Typography
              sx={{ color: "#fff", fontWeight: 700, fontSize: "14px" }}
            >
              Follow Us :
            </Typography>
            <Stack direction="row">
              <IconButton>
                <Image
                  src="/img/icons/instagram.svg"
                  alt="phone"
                  width={16}
                  height={16}
                />
              </IconButton>
              <IconButton>
                <Image
                  src="/img/icons/youtube.svg"
                  alt="phone"
                  width={16}
                  height={16}
                />
              </IconButton>
              <IconButton>
                <Image
                  src="/img/icons/facebook.svg"
                  alt="phone"
                  width={16}
                  height={16}
                />
              </IconButton>
              <IconButton>
                <Image
                  src="/img/icons/twitter.svg"
                  alt="phone"
                  width={16}
                  height={16}
                />
              </IconButton>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            px: 6,
            py: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            bgcolor: "#fff",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", columnGap: 12 }}>
            <Typography variant="h1" sx={{ fontSize: "24px" }}>
              Bandage
            </Typography>

           {
            !isMobile && (
                <Box>
                <Tabs>
                  <Tab
                    sx={{
                      color: "#737373",
                      fontSize: "14px",
                      fontWeight: 700,
                      py: 0,
                    }}
                    label="Home"
                  />
                  <Tab
                    sx={{
                      color: "#737373",
                      fontSize: "14px",
                      fontWeight: 700,
                      py: 0,
                    }}
                    label="Shop "
                  />
                  <Tab
                    sx={{
                      color: "#737373",
                      fontSize: "14px",
                      fontWeight: 700,
                      py: 0,
                    }}
                    label="About"
                  />
                  <Tab
                    sx={{
                      color: "#737373",
                      fontSize: "14px",
                      fontWeight: 700,
                      py: 0,
                    }}
                    label="Blog"
                  />
                  <Tab
                    sx={{
                      color: "#737373",
                      fontSize: "14px",
                      fontWeight: 700,
                      py: 0,
                    }}
                    label="Pages"
                  />
                </Tabs>
              </Box>
            )
           }
          </Box>
         {
            !isMobile && (
                <Box sx={{ display: "flex", alignItems: "center", columnGap: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", columnGap: 2 }}>
                  <Image
                    src="/img/icons/profile.svg"
                    alt="phone"
                    width={12}
                    height={12}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      columnGap: 1,
                      fontSize: "14px",
                      color: "#23A6F0",
                    }}
                  >
                    <Typography sx={{ fontSize: "14px", cursor: "pointer" }}>
                      Login
                    </Typography>
                    <Typography sx={{ fontSize: "14px" }}>/</Typography>
                    <Typography sx={{ fontSize: "14px", cursor: "pointer" }}>
                      Register
                    </Typography>{" "}
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", columnGap: 0.5 }}>
                  <IconButton>
                    <Image
                      src="/img/icons/search.svg"
                      alt="phone"
                      width={16}
                      height={16}
                    />
                  </IconButton>
                  <IconButton>
                    <Image
                      src="/img/icons/cart.svg"
                      alt="phone"
                      width={16}
                      height={16}
                    />
                  </IconButton>
                  <IconButton>
                    <Image
                      src="/img/icons/fave.svg"
                      alt="phone"
                      width={16}
                      height={16}
                    />
                  </IconButton>
                </Box>
              </Box>
            )
         }
        </Box>
      </AppBar>
    </>
  );
};

export default Navbar;
