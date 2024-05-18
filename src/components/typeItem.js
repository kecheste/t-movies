import { Box, Typography } from "@mui/material";
import React from "react";
import SensorsIcon from "@mui/icons-material/Sensors";

function TypeItem() {
  return (
    <Box
      elevation={3}
      sx={{
        elevation: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        bgcolor: "#1b1c3a",
        width: 200,
        height: 260,
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
        <SensorsIcon sx={{ color: "#fff", fontSize: 60 }} />
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
          Live TV's
        </Typography>
        <Typography sx={{ color: "#7b829e", fontSize: 16, mt: 1 }}>
          +5000 Channels
        </Typography>
      </Box>
    </Box>
  );
}

export default TypeItem;
