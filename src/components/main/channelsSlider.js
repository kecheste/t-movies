import { Box, Grid } from "@mui/material";
import React from "react";
import Channel from "../channel";

function ChannelsSlider({
  containerRef,
  typeClicked,
  selectedChannelIndex,
  handleClick,
  channels,
}) {
  return (
    <Grid
      ref={containerRef}
      item
      lg={2}
      sm={0}
      sx={{
        height: { md: "80vh", sm: "auto" },
        overflowY: "scroll",
        display: {
          md: typeClicked ? "none" : "block",
          lg: typeClicked ? "none" : "block",
          sm: "none",
          xs: "none",
        },
      }}
    >
      <Box
        ref={containerRef}
        sx={{
          pl: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        {channels.map((channel, index) => (
          <Channel
            key={index}
            channel={channel}
            isSelected={index === selectedChannelIndex}
            onClick={() => handleClick(index)}
            innerRef={(el) => el && el.setAttribute("data-index", index)}
          />
        ))}
      </Box>
    </Grid>
  );
}

export default ChannelsSlider;
