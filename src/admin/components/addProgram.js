import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import api from "../../api";

function AddProgram({
  setAddProgramOpened,
  channels,
  categories,
  types,
  programs,
}) {
  const [category, setCategory] = useState("");
  const [channel, setChannel] = useState("");
  const [type, setType] = useState("");

  const [videoUrl, setVideoUrl] = useState("");
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleChannelChange = (event) => {
    setChannel(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleVideoUrlChange = (url) => {
    setVideoUrl(url);
  };

  const handleTitleChange = (title) => {
    setTitle(title);
  };

  const handleDurationChange = (duration) => {
    setDuration(duration);
  };

  const handleAddProgram = async (event) => {
    event.preventDefault();
    if (
      category !== "" &&
      channel !== "" &&
      type !== "" &&
      videoUrl !== "" &&
      title !== "" &&
      duration !== ""
    ) {
      try {
        const response = await api.post("/program", {
          title: title,
          duration: parseInt(duration),
          description: videoUrl,
          channelId: parseInt(channel),
          typeId: parseInt(type),
          categoryId: parseInt(category),
          status: "active",
        });
        programs.push(response.data);
      } catch (error) {
        console.error("Error adding program:", error);
      } finally {
        setAddProgramOpened(false);
      }
    } else {
      alert("Please fill all fields");
    }
    // console.log(videoUrl, title, duration, category, channel, type);
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
        Add Program
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 10,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", my: 3 }}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Video URL
          </Typography>
          <TextField
            value={videoUrl}
            onChange={(e) => handleVideoUrlChange(e.target.value)}
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
        <Box sx={{ display: "flex", flexDirection: "column", my: 3 }}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Title
          </Typography>
          <TextField
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
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
      </Box>
      <Box sx={{ display: "flex", gap: 10 }}>
        <Box sx={{ display: "flex", flexDirection: "column", my: 1 }}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Duration
          </Typography>
          <TextField
            value={duration}
            onChange={(e) => handleDurationChange(e.target.value)}
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
        <Box sx={{ display: "flex", flexDirection: "column", my: 1 }}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Category
          </Typography>
          <FormControl variant="filled" sx={{ width: 400 }}>
            <Select
              labelId="category"
              id="category"
              value={category}
              onChange={handleCategoryChange}
              sx={{
                "& .MuiSelect-select": {
                  color: "#131524",
                  fontSize: 20,
                },
              }}
            >
              {categories.map((category) => (
                <MenuItem value={category.id}>{category.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: 10 }}>
        <Box sx={{ display: "flex", flexDirection: "column", my: 1 }}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Channel
          </Typography>
          <FormControl variant="filled" sx={{ width: 400 }}>
            <Select
              labelId="category"
              id="category"
              value={channel}
              onChange={handleChannelChange}
              sx={{
                "& .MuiSelect-select": {
                  color: "#131524",
                  fontSize: 20,
                },
              }}
            >
              {channels.map((channel) => (
                <MenuItem value={channel.id}>{channel.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", my: 1 }}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Type
          </Typography>
          <FormControl variant="filled" sx={{ width: 400 }}>
            <Select
              labelId="category"
              id="category"
              value={type}
              onChange={handleTypeChange}
              sx={{
                "& .MuiSelect-select": {
                  color: "#131524",
                  fontSize: 20,
                },
              }}
            >
              {types.map((type) => (
                <MenuItem value={type.id}>{type.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box sx={{ alignSelf: "flex-end", display: "flex", mt: 3 }}>
        <Button
          onClick={() => {
            setAddProgramOpened(false);
          }}
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
          onClick={handleAddProgram}
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

export default AddProgram;
