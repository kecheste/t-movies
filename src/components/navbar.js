import { Box, Typography } from "@mui/material";
import React from "react";
import CloudIcon from "@mui/icons-material/Cloud";
import SearchIcon from "@mui/icons-material/Search";

function NavBar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        pr: 4,
      }}
    >
      <Box>
        <img
          src="./assets/channels/hbo-logo.png"
          alt="logo"
          style={{
            width: 90,
            height: 90,
            objectFit: "contain",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: 400,
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontWeight: 300, color: "white", fontSize: 18 }}>
          5:45PM
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CloudIcon sx={{ color: "white", fontSize: 35 }} />
          <Typography sx={{ fontWeight: 300, color: "white", fontSize: 20 }}>
            10°
          </Typography>
        </Box>
        <SearchIcon
          sx={{
            color: "#a0a4b8",
            fontSize: 30,
            bgcolor: "#1b1c3a",
            borderRadius: "50%",
            padding: 1.8,
          }}
        />
        <img
          alt="profile"
          src="./assets/profile.jpg"
          style={{
            borderRadius: "50%",
            height: 50,
            width: 50,
            objectFit: "cover",
            backgroundPosition: "center;",
            cursor: "pointer",
          }}
        />
      </Box>
    </Box>
  );
}

export default NavBar;
