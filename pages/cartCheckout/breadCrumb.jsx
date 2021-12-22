import { Box, Typography } from "@mui/material";
import React from "react";

function BreadCrumb(props) {
  return (
    <Box mt={2.4} sx={{ display: "flex" }}>
      <Typography
        mr={1}
        sx={{ cursor: "pointer", fontFamily: "Be Vietnam Pro" }}
        onClick={() => route.push("/")}
        color="#CDA922"
      >
        Trang chủ
      </Typography>
      <Typography mr={1} sx={{ fontFamily: "Be Vietnam Pro" }}>
        {">"}
      </Typography>
      <Typography mr={1} scolor="#CDA922" sx={{ fontFamily: "Be Vietnam Pro" }}>
        Giỏ hàng
      </Typography>
      <Typography mr={1} sx={{ fontFamily: "Be Vietnam Pro" }}>
        {">"}
      </Typography>
      <Typography mr={1} sx={{ fontFamily: "Be Vietnam Pro" }}>
        Thông tin thanh toán
      </Typography>
    </Box>
  );
}

export default BreadCrumb;
