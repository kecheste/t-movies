import { Box, Typography } from "@mui/material";
import React from "react";
import SensorsIcon from "@mui/icons-material/Sensors";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

function TypeItem({ type, onClick }) {
  return (
    <Box
      onClick={onClick}
      elevation={3}
      sx={{
        elevation: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        bgcolor: "#1b1c3a",
        width: { md: 200, sm: 150, xs: 150 },
        height: { md: 260, sm: 200, xs: 200 },
        borderRadius: 2,
        border: "1px solid #262b42",
        p: 1,
        mr: 3,
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          bgcolor: "#0b0c24",
          height: 140,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {type.type === "Live TV's" && (
          <SensorsIcon sx={{ fontSize: 70, color: "white" }} />
        )}
        {type.type === "Movies" && (
          <GroupWorkIcon sx={{ fontSize: 70, color: "white" }} />
        )}
        {type.type === "TV Shows" && (
          <LiveTvIcon sx={{ fontSize: 70, color: "white" }} />
        )}
        {type.type === "Sports" && (
          <SportsSoccerIcon sx={{ fontSize: 70, color: "white" }} />
        )}
      </Box>
      <Box
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 500, color: "white" }}>
          {type.type}
        </Typography>
        <Typography sx={{ color: "#7b829e", fontSize: 16, mt: 1 }}>
          {type.details}
        </Typography>
      </Box>
    </Box>
  );
}

export default TypeItem;
