import { Box, Typography } from "@mui/material";
import React from "react";
import AudioProgressBar from "./audioProgressBar";

function Info() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "start",
        p: { sm: 1, xs: 1, md: 0, lg: 0 },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: "#8089ad",
          mt: 1,
          p: 0,
          fontSize: {
            sm: 15,
            xs: 15,
            md: 20,
            lg: 20,
          },
        }}
      >
        Now Playing
      </Typography>
      <Typography
        variant="h2"
        sx={{
          mb: 1.5,
          color: "#fff",
          fontWeight: 500,
          fontSize: {
            sm: 45,
            xs: 45,
            md: 65,
            lg: 65,
          },
        }}
      >
        Grey's Anatomy
      </Typography>
      <Typography
        sx={{
          width: { md: 300, lg: 300, sm: "auto" },
          height: 100,
          color: "#8089ad",
        }}
      >
        Gray's Anatomy is an American medical drama television series that
        premiered on March 27, 2005, on ABC as a mid-season replacement.
      </Typography>
      <AudioProgressBar />
    </Box>
  );
}

export default Info;
