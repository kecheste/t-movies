import { Box, Grid, Link } from "@mui/material";
import React from "react";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function SideNavigationBar({
  typeClicked,
  setTypeClicked,
  setSelectedTab,
  selectedTab,
}) {
  return (
    <Grid item lg={2} sm={0} sx={{ height: { md: "80vh", sm: "auto" } }}>
      <Box
        sx={{
          py: 4,
          width: "100%",
          height: "100%",
          display: {
            xs: "none",
            sm: "none",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ height: 100, maxHeight: 100 }}>
          {typeClicked ? (
            <ArrowBackIosNewIcon
              onClick={() => setTypeClicked(false)}
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
            <a href="/">
              <img
                width={100}
                height={100}
                src="./assets/images/logo.png"
                alt="logo"
              />
            </a>
          )}
        </Box>
        <Box
          sx={{
            mt: 16,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link
            onClick={() => setSelectedTab("tv")}
            href="#"
            sx={{
              textAlign: "center",
              height: 45,
              width: 45,
              borderRadius: "50%",
              mb: 2,
              p: 2,
              bgcolor: selectedTab === "tv" ? "#222557" : "#1b1c3a",
              color: "#fff",
              cursor: "pointer",
              "&:hover": {
                bgcolor: "#222557",
              },
            }}
          >
            <LiveTvIcon sx={{ width: 30, height: 30, mt: 0.7 }} />
          </Link>
          <Link
            onClick={() => setSelectedTab("favorites")}
            href="#"
            sx={{
              textAlign: "center",
              height: 45,
              width: 45,
              borderRadius: "50%",
              p: 2,
              mb: 2,
              bgcolor: selectedTab === "favorites" ? "#222557" : "#1b1c3a",
              color: "#fff",
              cursor: "pointer",
              "&:hover": {
                bgcolor: "#222557",
              },
            }}
          >
            <StarIcon sx={{ width: 30, height: 30, mt: 0.7 }} />
          </Link>
          <Link
            onClick={() => setSelectedTab("later")}
            href="#"
            sx={{
              textAlign: "center",
              height: 45,
              width: 45,
              borderRadius: "50%",
              p: 2,
              mb: 2,
              bgcolor: selectedTab === "later" ? "#222557" : "#1b1c3a",
              color: "#fff",
              cursor: "pointer",
              "&:hover": {
                bgcolor: "#222557",
              },
            }}
          >
            <AccessTimeFilledIcon sx={{ width: 30, height: 30, mt: 0.7 }} />
          </Link>
        </Box>
      </Box>
    </Grid>
  );
}

export default SideNavigationBar;
