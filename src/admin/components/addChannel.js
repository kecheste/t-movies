import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import api from "../../api";

function AddChannel({ setAddChannelOpened, channels }) {
  const [channelName, setCHannelName] = useState("");

  const handleAddChannel = async (event) => {
    event.preventDefault();
    if (channelName !== "") {
      try {
        const response = await api.post("/channel", {
          name: channelName,
        });
        channels.push(response.data);
      } catch (error) {
        console.error("Error adding channel:", error);
      } finally {
        setAddChannelOpened(false);
      }
    }
  };

  return (
    <Box
      sx={{
        position: "absolute",
        height: 500,
        width: 1200,
        bgcolor: "white",
        borderRadius: 4,
        p: 5,
        zIndex: 1000,
        top: "20%",
        left: "18%",
        boxShadow:
          "0 0 10px 0 rgba(0, 0, 0, 0.2), 0 8px 8px 0 rgba(0, 0, 0, 0.05)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: 10,
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: 600 }}>
        Add Channel
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", my: 3 }}>
        <Typography variant="h5" sx={{ my: 3 }}>
          Name
        </Typography>
        <TextField
          value={channelName}
          onChange={(e) => setCHannelName(e.target.value)}
          variant="filled"
          sx={{
            width: 400,
            "& .MuiFilledInput-root": {
              borderRadius: 2,
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: "#e0e0eb",
              },
            },
            "& .MuiInputBase-input": {
              fontSize: "1.2rem",
              padding: "12px 15px",
            },
            "& .MuiFormLabel-root": {
              fontSize: "1.1rem",
              color: "#757575",
              "&.Mui-focused": {
                color: "#3f51b5",
              },
            },
          }}
        />
      </Box>

      <Box sx={{ alignSelf: "flex-end", display: "flex", mt: 3 }}>
        <Button
          onClick={() => setAddChannelOpened(false)}
          sx={{
            bgcolor: "#fff",
            border: "2px solid #131524",
            fontSize: 20,
            color: "#131524",
            mr: 2,
            px: 4,
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleAddChannel}
          sx={{
            bgcolor: "#131524",
            color: "white",
            fontSize: 20,
            ml: 2,
            px: 4,
            "&:hover": {
              bgcolor: "grey",
              color: "white",
            },
          }}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
}

export default AddChannel;
