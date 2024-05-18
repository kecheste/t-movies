import { Box } from "@mui/material";
import React from "react";
import TypeItem from "./typeItem";

function Types() {
  return (
    <Box sx={{ display: "flex", mt: 4, width: 1200 }}>
      <TypeItem />
      <TypeItem />
      <TypeItem />
      <TypeItem />
      <TypeItem />
    </Box>
  );
}

export default Types;
