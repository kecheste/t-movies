import { Box, Link, Typography } from "@mui/material";
import React from "react";
import NavBar from "./navbar";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function TypeDetail({ selected, user }) {
  const categories = [
    {
      id: 1,
      name: "For You",
    },
    {
      id: 2,
      name: "Recommended",
    },
    {
      id: 3,
      name: "Popular",
    },
    {
      id: 4,
      name: "My List",
    },
    {
      id: 5,
      name: "Continue Watching",
    },
    {
      id: 6,
      name: "Watch Later",
    },
    {
      id: 7,
      name: "Featured",
    },
  ];
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Box sx={{ my: 2, pt: 1 }}>
        <NavBar header={selected} user={user} />
      </Box>
      <Box
        sx={{
          display: { md: "flex", lg: "flex", sm: "none", xs: "none" },
          justifyContent: "space-between",
          alignItems: "center",
          mt: 4,
          width: "100%",
          overflowX: "scroll",
        }}
      >
        {categories.map((category) => (
          <Link
            href="#"
            key={category.id}
            sx={{
              fontSize: 15,
              fontWeight: 300,
              color: "#a0a4b8",
              textDecoration: "none",
              cursor: "pointer",
              "&:hover": {
                color: "white",
              },
            }}
          >
            {category.name}
          </Link>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          mt: { md: 4, lg: 4, sm: 2, xs: 2 },
          mb: { md: 0, lg: 0, sm: 8, xs: 8 },
          flexDirection: {
            sm: "column",
            xs: "column",
            md: "row",
            lg: "row",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: 350,
            height: { md: 500, lg: 500, sm: 250, xs: 250 },
            borderRadius: 2,
            backgroundImage:
              "url(https://threepennypress.org/wp-content/uploads/2023/03/BVDkqHPCiS4myhbsgDuVed7d9r28H75oRTCPxJJt.jpg)",
            backgroundSize: "cover",
            textAlign: "left",
            justifyContent: "space-between",
            backgroundColor: "hsl(237, 26%, 37%)",
            backgroundBlendMode: "overlay",
            mr: { sm: 1, xs: 1, md: 4, lg: 4 },
            mb: { sm: 4, xs: 4 },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontSize: 25,
              alignSelf: "flex-end",
              fontWeight: 600,
              mr: 3,
              mt: 2,
            }}
          >
            2h 22m
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              pl: 4,
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: 500,
                bgcolor: "orange",
                px: 2,
                borderRadius: 1,
                my: 1,
              }}
            >
              New
            </Typography>
            <Typography
              variant="h4"
              sx={{ color: "white", fontWeight: "600", mb: 2 }}
            >
              The Hunger Game
            </Typography>
            <Box sx={{ display: "flex", mb: 3 }}>
              <PlayCircleOutlineIcon
                sx={{ color: "white", fontSize: 40, mr: 1, cursor: "pointer" }}
              />
              <AccessTimeIcon
                sx={{ color: "white", fontSize: 40, mr: 1, cursor: "pointer" }}
              />
              <FavoriteBorderIcon
                sx={{ color: "white", fontSize: 40, cursor: "pointer" }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: 350,
            height: { md: 500, lg: 500, sm: 250, xs: 250 },
            borderRadius: 2,
            backgroundImage:
              "url(https://threepennypress.org/wp-content/uploads/2023/03/BVDkqHPCiS4myhbsgDuVed7d9r28H75oRTCPxJJt.jpg)",
            backgroundSize: "cover",
            textAlign: "left",
            justifyContent: "space-between",
            backgroundColor: "hsl(237, 26%, 37%)",
            backgroundBlendMode: "overlay",
            mr: { sm: 1, xs: 1, md: 4, lg: 4 },
            mb: { sm: 4, xs: 4 },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontSize: 25,
              alignSelf: "flex-end",
              fontWeight: 600,
              mr: 3,
              mt: 2,
            }}
          >
            2h 22m
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              pl: 4,
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: 500,
                bgcolor: "orange",
                px: 2,
                borderRadius: 1,
                my: 1,
              }}
            >
              New
            </Typography>
            <Typography
              variant="h4"
              sx={{ color: "white", fontWeight: "600", mb: 2 }}
            >
              The Hunger Game
            </Typography>
            <Box sx={{ display: "flex", mb: 3 }}>
              <PlayCircleOutlineIcon
                sx={{ color: "white", fontSize: 40, mr: 1, cursor: "pointer" }}
              />
              <AccessTimeIcon
                sx={{ color: "white", fontSize: 40, mr: 1, cursor: "pointer" }}
              />
              <FavoriteBorderIcon
                sx={{ color: "white", fontSize: 40, cursor: "pointer" }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: 350,
            height: { md: 500, lg: 500, sm: 250, xs: 250 },
            borderRadius: 2,
            backgroundImage:
              "url(https://threepennypress.org/wp-content/uploads/2023/03/BVDkqHPCiS4myhbsgDuVed7d9r28H75oRTCPxJJt.jpg)",
            backgroundSize: "cover",
            textAlign: "left",
            justifyContent: "space-between",
            backgroundColor: "hsl(237, 26%, 37%)",
            backgroundBlendMode: "overlay",
            mr: { sm: 1, xs: 1, md: 4, lg: 4 },
            mb: { sm: 4, xs: 4 },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontSize: 25,
              alignSelf: "flex-end",
              fontWeight: 600,
              mr: 3,
              mt: 2,
            }}
          >
            2h 22m
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              pl: 4,
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontWeight: 500,
                bgcolor: "orange",
                px: 2,
                borderRadius: 1,
                my: 1,
              }}
            >
              New
            </Typography>
            <Typography
              variant="h4"
              sx={{ color: "white", fontWeight: "600", mb: 2 }}
            >
              The Hunger Game
            </Typography>
            <Box sx={{ display: "flex", mb: 3 }}>
              <PlayCircleOutlineIcon
                sx={{ color: "white", fontSize: 40, mr: 1, cursor: "pointer" }}
              />
              <AccessTimeIcon
                sx={{ color: "white", fontSize: 40, mr: 1, cursor: "pointer" }}
              />
              <FavoriteBorderIcon
                sx={{ color: "white", fontSize: 40, cursor: "pointer" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TypeDetail;
