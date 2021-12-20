import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";

function NewFoodHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #FFFFFF",
        paddingBottom: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "50%",
          alignItems: "center",
        }}
      >
        <img src="/images/new1.png" alt="" />
        <Typography
          variant="h4"
          fontSize={28}
          fontWeight={700}
          color="#ffffff"
          ml={1.2}
          sx={{ fontFamily: "Be Vietnam Pro" }}
        >
          Món mới
        </Typography>
      </Box>
      <Box
        color="#ffffff"
        sx={{ display: "flex" }}
        fontSize={16}
        fontFamily={"Be Vietnam Pro"}
      >
        <Typography
          components="sapn"
          sx={{ cursor: "pointer", fontFamily: "Be Vietnam Pro" }}
        >
          Xem chi tiết
        </Typography>
        <ArrowForwardIcon />
      </Box>
    </Box>
  );
}

export default NewFoodHeader;
