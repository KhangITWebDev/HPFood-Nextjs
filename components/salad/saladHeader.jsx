import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function SaladHeader(props) {
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
          src="/images/dinner.png"
          alt=""
          style={{ width: "36px", height: "36px" }}
        />
        <Typography
          variant="h4"
          fontSize={28}
          fontWeight={700}
          color="#111111"
          ml={1.2}
        >
          MÓN GỎI
        </Typography>
      </Box>
      <Box
        color="#CDA922"
        sx={{ display: "flex" }}
        fontSize={16}
        fontFamily={"Be Vietnam Pro"}
      >
        <Typography components="sapn" sx={{ cursor: "pointer" }}>
          Xem chi tiết
        </Typography>
        <ArrowForwardIcon />
      </Box>
    </Box>
  );
}

export default SaladHeader;
