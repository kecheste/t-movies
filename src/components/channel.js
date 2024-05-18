import { Box, Link, Typography } from "@mui/material";
import React from "react";

function Channel({ channel, isSelected, onClick }) {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", mb: 5, cursor: "pointer" }}
      onClick={onClick}
    >
      <Link
        href="#"
        sx={{
          border: isSelected ? "5px solid #212d4d" : "none",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={channel.logo}
          alt="nbc"
          style={{
            width: isSelected ? 50 : 35,
            height: isSelected ? 50 : 35,
            padding: isSelected ? 15 : 10,
            backgroundColor: "#1b1c3a",
            objectFit: "contain",
            borderRadius: "50%",
            border: isSelected ? "6px solid #0f0f2e" : "none",
          }}
        />
      </Link>
      <Typography
        variant="h6"
        sx={{
          ml: 2,
          color: `${isSelected ? "white" : "#a7b3c9"}`,
          fontWeight: isSelected ? 500 : 300,
          fontSize: isSelected ? 25 : 20,
        }}
      >
        {channel.name}
      </Typography>
    </Box>
  );
}

export default Channel;
