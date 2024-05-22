import React, { useState, useEffect } from "react";
import { Box, Slider, Typography, IconButton } from "@mui/material";
import { PlayArrow, Pause } from "@mui/icons-material";

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  const hours = Math.floor(minutes / 60);
  if (minutes < 60) {
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  } else {
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
      secs < 10 ? "0" : ""
    }${secs}`;
  }
};

const AudioProgressBar = () => {
  const [currentTime, setCurrentTime] = useState(1239);
  const [duration, setDuration] = useState(3890);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSliderChange = (event, newValue) => {
    setCurrentTime(newValue);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prevTime) => {
          if (prevTime < duration) {
            return prevTime + 1;
          } else {
            clearInterval(interval);
            return prevTime;
          }
        });
      }, 1000);
    } else if (!isPlaying && currentTime !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration, currentTime]);

  return (
    <Box
      sx={{
        width: "100%",
        mt: { md: 3, lg: 3, sm: 0, xs: 0 },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: 300 }}>
        <Slider
          value={currentTime}
          max={duration}
          onChange={handleSliderChange}
          aria-labelledby="continuous-slider"
          sx={{
            color: "#fff",
            "& .MuiSlider-thumb": {
              backgroundColor: "#fff",
              display: "none",
            },
            "& .MuiSlider-rail": {
              color: "#ffffff50",
            },
            "& .MuiSlider-track": {
              color: "#fff",
            },
          }}
        />
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: "#fff" }}>
            {formatTime(currentTime)}
          </Typography>
          <Typography variant="body2" sx={{ color: "#fff" }}>
            {formatTime(duration)}
          </Typography>
        </Box>
      </Box>
      <IconButton
        onClick={togglePlayPause}
        sx={{
          marginLeft: 2,
          color: "#fff",
          bgcolor: "#1b1c3a",
          borderRadius: "50%",
          p: 1,
          border: "3px solid #fff",
        }}
      >
        {isPlaying ? <Pause /> : <PlayArrow />}
      </IconButton>
    </Box>
  );
};

export default AudioProgressBar;
