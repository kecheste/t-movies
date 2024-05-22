import { Box, Grid } from "@mui/material";
import React from "react";
import TypeDetail from "../typeDetail";
import NavBar from "../navbar";
import Info from "../info";
import Channel from "../channel";
import Types from "../types";

function MainDetail({
  channels,
  typeClicked,
  selectedType,
  selectedChannelIndex,
  handleClick,
  handleTypeClick,
  handleSelectedType,
  containerRef,
}) {
  return (
    <Grid
      item
      md={typeClicked ? 10 : 8}
      sm={12}
      sx={{ height: { md: "80vh", sm: "auto" } }}
    >
      {typeClicked ? (
        <TypeDetail selected={selectedType} />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <NavBar
            header={
              <img
                src={channels[selectedChannelIndex].logo}
                alt="logo"
                style={{
                  width: 90,
                  height: 90,
                  objectFit: "contain",
                }}
              />
            }
          />
          <Box
            sx={{
              display: {
                sm: "flex",
                xs: "flex",
                lg: "none",
                md: "none",
              },
              mt: 5,
              ml: 1,
              alignItems: "flex-start",
            }}
          >
            <img
              src={channels[selectedChannelIndex].logo}
              alt="logo"
              style={{
                width: 90,
                height: 90,
                objectFit: "contain",
              }}
            />
          </Box>
          <Info />
          {/* SLIDER START */}
          <Box
            ref={containerRef}
            sx={{
              width: 400,
              overflowX: "scroll",
              display: {
                sm: typeClicked ? "none" : "block",
                xs: typeClicked ? "none" : "block",
                md: "none",
                lg: "none",
              },
            }}
          >
            <Box
              ref={containerRef}
              sx={{
                ml: 1,
                display: "flex",
                alignItems: "center",
                height: 120,
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
          </Box>
          {/* SLIDER END */}
          <Box
            sx={{
              width: { md: 1200, sm: 390, xs: 390 },
              ml: { sm: 1, xs: 1, lg: 0, md: 0 },
              mt: 4,
              mb: { sm: 10, xs: 10, md: 0, lg: 0 },
              display: "flex",
              overflowX: "scroll",
            }}
          >
            <Types
              handleTypeClick={handleTypeClick}
              handleSelectedType={handleSelectedType}
            />
          </Box>
        </Box>
      )}
    </Grid>
  );
}

export default MainDetail;
