import { Box } from "@mui/material";
import React from "react";
import FavoriteFoodHeader from "./favoriteFoodHeader";
import FavoriteFoodItem from "./favoriteFoodItem";

function FavoriteFood() {
  return (
    <Box
      sx={{
        maxWidth: "1220px",
        margin: "12px auto 32px",
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
        <FavoriteFoodHeader />
        <FavoriteFoodItem />
      </Box>
    </Box>
  );
}

export default FavoriteFood;
