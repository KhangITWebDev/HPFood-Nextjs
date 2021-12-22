import { Box, Typography } from "@mui/material";
import React from "react";

function BannerService() {
  return (
    <Box sx={{ position: "relative" }}>
      <img src="/images/bannerservice.png" alt="" />
      <img
        src="/images/bannerservice2.png"
        style={{ position: "absolute", top: "0" }}
        alt=""
      />
      <Typography
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          color: "#ffffff",
          fontSize: "42px",
          fontWeight: "700",
          fontFamily: "Be Vietnam Pro",
          transform: "translateY(-50%) translateX(-50%)",
        }}
      >
        DỊCH VỤ TIỆC
      </Typography>
    </Box>
  );
}

export default BannerService;
