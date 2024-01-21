import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface props{
    src:string
}

const PostCard = ({src}:props) => {
  return (
    <>
      <Box
        sx={{
          boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.10)",
          cursor: "pointer",
        }}
      >
        <Box sx={{ position: "relative", width: "100%", height: "300px" }}>
          <Image
            src={src}
            objectFit="cover"
            layout="fill"
            alt="post"
          />
        </Box>
        <Box
          sx={{
            mt: -35,
            ml: 2,
            px: 1,
            borderRadius: 0.7,
            bgcolor: "#E74040",
            position: "absolute",
          }}
        >
          <Typography sx={{ fontWeight: 700, color: "#fff", fontSize: "14px" }}>
            NEW
          </Typography>
        </Box>
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: "flex", columnGap: 2 }}>
            <Typography
              sx={{ fontSize: "12px", fontWeight: 400, color: "#8EC2F2" }}
            >
              Google
            </Typography>
            <Typography
              sx={{ fontSize: "12px", fontWeight: 400, color: "#737373" }}
            >
              Trending
            </Typography>
            <Typography
              sx={{ fontSize: "12px", fontWeight: 400, color: "#737373" }}
            >
              New
            </Typography>
          </Box>
          <Typography sx={{ mt: 2, fontSize: "20px" }}>
            Loudest à la Madison #1 (L'integral)e
          </Typography>
          <Typography
            sx={{ fontSize: "14px", fontWeight: 400, my: 2, color: "#737373" }}
          >
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </Typography>
          <Box sx={{mt:2, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
<Box sx={{display:'flex', columnGap:1, alignItems:'center'}}>
    <Image src="/img/icons/time.svg" alt="time_icon" width={16} height={16}/>
    <Typography sx={{color:'#737373', fontWeight:400, fontSize:'12px'}}>22 April 2021</Typography>
</Box>
<Box sx={{display:'flex', columnGap:1, alignItems:'center'}}>
    <Image src="/img/icons/photo.svg" alt="time_icon" width={16} height={16}/>
    <Typography sx={{color:'#737373', fontWeight:400, fontSize:'12px'}}>10 comments</Typography>
</Box>
          </Box>
<Button sx={{mt:2, fontWeight:700, color:'#737373', fontSize:'14px'}} endIcon={    <Image src="/img/icons/arrow-nest.svg" alt="next_icon" width={9} height={16}/>}>Learn More</Button>
        </Box>
      </Box>
    </>
  );
};

export default PostCard;
