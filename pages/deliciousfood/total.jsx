import { Box, Button, Typography } from "@mui/material";
import React from "react";

function Total(props) {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
          width: "90%",
          margin: "0 auto",
        }}
      >
        <Typography
          fontSize={16}
          fontWeight={500}
          sx={{ fontFamily: "Be Vietnam Pro" }}
        >
          Tổng tiền
        </Typography>
        <Typography
          fontSize={24}
          fontWeight={700}
          sx={{ fontFamily: "Be Vietnam Pro" }}
        >
          13.828.000 đ
        </Typography>
      </Box>
      <Button sx={{ width: "100%", margin: "0 auto 24px" }}>
        <Typography
          sx={{
            backgroundColor: "#CDA922",
            width: "90%",
            fontSize: "18px",
            fontFamily: "Be Vietnam Pro",
            fontWeight: "700",
            color: "#ffffff",
            padding: "10px 0",
            borderRadius: "8px",
          }}
        >
          Đặt hàng
        </Typography>
      </Button>
    </Box>
  );
}

export default Total;
