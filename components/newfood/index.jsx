import { Box } from "@mui/material";
import React from "react";
import { foodData } from "./food";
import NewFoodItem from "./newFoodItem";
import NewFoodHeader from "./newFoodHeader";

function NewFood() {
  const food = foodData;
  return (
    <Box
      sx={{
        maxWidth: "1220px",
        margin: "0 auto",
        padding: "0 20px",
        height: "221px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#CDA922",
          borderRadius: "8px",
          margin: "0 auto",
          padding: "20px",
          transform: "translateY(-50%)",
        }}
      >
        <NewFoodHeader />
        <NewFoodItem food={food} />
      </Box>
    </Box>
  );
}

export default NewFood;
