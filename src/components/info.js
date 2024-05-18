import { Box, Typography } from "@mui/material";
import React from "react";
import AudioProgressBar from "./audioProgressBar";

function Info() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", textAlign: "start" }}>
      <Typography variant="h6" sx={{ color: "#8089ad", mt: 1, p: 0 }}>
        Now Playing
      </Typography>
      <Typography variant="h2" sx={{ mb: 1.5, color: "#fff", fontWeight: 500 }}>
        Grey's Anatomy
      </Typography>
      <Typography sx={{ width: 300, height: 100, color: "#8089ad" }}>
        Gray's Anatomy is an American medical drama television series that
        premiered on March 27, 2005, on ABC as a mid-season replacement.
      </Typography>
      <AudioProgressBar />
    </Box>
  );
}

export default Info;
