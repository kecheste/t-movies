import { Box } from "@mui/material";
import React from "react";
import TypeItem from "./typeItem";

function Types({ handleTypeClick, handleSelectedType, user }) {
  const types = [
    { type: "Live TV's", details: "+5000 Channels" },
    { type: "Movies", details: "+500 Movies" },
    { type: "TV Shows", details: "+900 Series" },
    { type: "Sports", details: "+200 Channels" },
  ];
  return (
    <Box sx={{ display: "flex" }}>
      {types.map((type, index) => (
        <TypeItem
          user={user}
          onClick={() => {
            handleSelectedType(type.type);
            handleTypeClick(true);
          }}
          key={index}
          type={type}
        />
      ))}
    </Box>
  );
}

export default Types;
