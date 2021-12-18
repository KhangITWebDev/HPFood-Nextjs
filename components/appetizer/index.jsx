import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AppetizerItem from "./appetizerItem";

function Appetizer() {
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
              MÓN KHAI VỊ
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
        <AppetizerItem />
      </Box>
    </Box>
  );
}

export default Appetizer;
