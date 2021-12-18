import { Box } from "@mui/material";
import React from "react";

function Discount(props) {
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
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridGap: "24px",
        }}
      >
        <img src="/images/bannerfood.png" alt="" />
        <img src="/images/bannerfood1.png" alt="" />
      </Box>
    </Box>
  );
}

export default Discount;
