import { Box, Typography } from "@mui/material";
import React from "react";
import SaladItem from "./saladItem";
import SaladHeader from "./saladHeader";

function Salad() {
  return (
    <Box
      sx={{
        maxWidth: "1220px",
        margin: "12px auto 64px",
        padding: "0 20px",
      }}
    >
      <Box
        sx={{
          border: "2px solid #CDA922",
          borderRadius: "8px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <SaladHeader />
        <SaladItem />
      </Box>
    </Box>
  );
}

export default Salad;
