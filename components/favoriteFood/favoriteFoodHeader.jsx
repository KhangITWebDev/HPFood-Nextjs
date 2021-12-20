import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function FavoriteFoodHeader(props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #DEDEDE",
        paddingBottom: "20px",
      }}
    >
      <Box sx={{ display: "flex", width: "50%", alignItems: "center" }}>
        <img
          src="/images/fire.png"
          alt=""
          style={{ width: "36px", height: "36px" }}
        />
        <Typography
          variant="h4"
          fontSize={28}
          fontWeight={700}
          color="#111111"
          ml={1.2}
          sx={{ fontFamily: "Be Vietnam Pro" }}
        >
          MÓN ĐƯỢC YÊU THÍCH
        </Typography>
      </Box>
    </Box>
  );
}

export default FavoriteFoodHeader;
