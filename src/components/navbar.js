import { Box, Typography } from "@mui/material";
import React from "react";
import CloudIcon from "@mui/icons-material/Cloud";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function NavBar({ header, user, typeClicked, handleTypeClick }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        pr: { md: 4, sm: 2, xs: 2 },
      }}
    >
      <Box>
        <Typography
          sx={{
            color: "white",
            fontSize: 30,
            display: {
              lg: "block",
              sm: "none",
              xs: "none",
              md: "block",
            },
          }}
        >
          {header}
        </Typography>
        <Box
          sx={{
            display: {
              md: "none",
              lg: "none",
              sm: "block",
              xs: "block",
            },
            ml: 1,
          }}
        >
          {typeClicked ? (
            <ArrowBackIosNewIcon
              onClick={handleTypeClick(false)}
              sx={{
                color: "white",
                fontSize: 40,
                padding: 3,
                cursor: "pointer",
                bgcolor: "primary.main",
                borderRadius: "50%",
                "&:hover": {
                  bgcolor: "secondary.main",
                },
              }}
            />
          ) : (
            <img
              width={60}
              height={60}
              src="./assets/images/logo.png"
              alt="logo"
            />
          )}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: { md: 400, sm: 200 },
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontWeight: 300,
            color: "white",
            fontSize: 18,
            display: {
              lg: "block",
              sm: "none",
              xs: "none",
              md: "block",
            },
          }}
        >
          5:45PM
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CloudIcon sx={{ color: "white", fontSize: 35 }} />
          <Typography
            sx={{
              fontWeight: 300,
              color: "white",
              fontSize: 20,
              mr: {
                md: 0,
                sm: 2,
                xs: 2,
              },
            }}
          >
            10°
          </Typography>
        </Box>
        <SearchIcon
          sx={{
            color: "#a0a4b8",
            fontSize: { md: 30, sm: 25 },
            bgcolor: "#1b1c3a",
            borderRadius: "50%",
            padding: { md: 1.8, sm: 1.5, xs: 1.5 },
          }}
        />
        <Box
          sx={{
            display: {
              sm: "none",
              xs: "none",
              md: "block",
              lg: "block",
            },
          }}
        >
          <img
            alt="profile"
            src={user.picture}
            style={{
              borderRadius: "50%",
              height: 50,
              width: 50,
              objectFit: "cover",
              backgroundPosition: "center",
              cursor: "pointer",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default NavBar;
