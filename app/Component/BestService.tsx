import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import Card from "./Common/Card";
import Image from "next/image";

const BestService = () => {
  return (
    <>
      <Box sx={{ my:{md: 10, xs:10} }}>
        <Box>
          <Typography
            sx={{
              color: "#737373",
              fontSize: "20px",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Featured Products
          </Typography>
          <Typography
            sx={{ fontWeight: 700, fontSize: "24px", textAlign: "center" }}
          >
            THE BEST SERVICES
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#737373",
              textAlign: "center",
            }}
          >
            Problems trying to resolve the conflict between{" "}
          </Typography>
        </Box>

        <Box
          sx={{
            margin: "0 auto",
            width: "100%",
            my: 6,
            display: "flex",
            flexDirection:{md:'row', xs:'column'},
            justifyContent: "space-between",
            alignItems: "center",
            columnGap: 4,
            rowGap:3
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: {md:"30%", xs:'100%'}
            }}
          >
            <Image
              src="/img/icons/book.svg"
              alt="easy_wins"
              width={46}
              height={46}
            />
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "24px",
                textAlign: "center",
                mt: 2,
              }}
            >
              Easy Wins
            </Typography>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "14px",
                color: "#737373",
                textAlign: "center",
                mt: 1,
              }}
            >
              Get your best looking smile now!
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: {md:"40%", xs:'100%'}
            }}
          >
            <Image
              src="/img/icons/rate.svg"
              alt="easy_wins"
              width={46}
              height={46}
            />
            <Typography sx={{ fontWeight: 700, fontSize: "24px", mt: 2 }}>
              Concrete
            </Typography>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "14px",
                color: "#737373",
                textAlign: "center",
                mt: 1,
              }}
            >
              Defalcate is most focused in helping you discover your most
              beautiful smile
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: {md:"30%", xs:'100%'}
            }}
          >
            <Image
              src="/img/icons/doc.svg"
              alt="easy_wins"
              width={46}
              height={46}
            />
            <Typography sx={{ fontWeight: 700, fontSize: "24px", mt: 2 }}>
              Hack Growth
            </Typography>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "14px",
                color: "#737373",
                mt: 1,
                textAlign: "center",
              }}
            >
              Overcame any hurdle or any other problem.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BestService;
