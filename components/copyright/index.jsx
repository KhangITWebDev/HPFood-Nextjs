import { Box, Typography } from "@mui/material";
import React from "react";

function CopyRight() {
  return (
    <Box
      sx={{
        maxWidth: "1940px",
        margin: "-20px auto 0",
        padding: "40px 20px 24px",
        background: "#111111",
      }}
    >
      <Typography
        fontSize={14}
        fontWeight={400}
        sx={{ color: "rgba(255, 255, 255, 0.7)", textAlign: "center" }}
      >
        Copyright © 2022 Nhà hàng tiệc cưới Hương Phố
      </Typography>
    </Box>
  );
}

export default CopyRight;
