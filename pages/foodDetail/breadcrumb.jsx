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
      <Typography mr={1} sx={{ fontFamily: "Be Vietnam Pro" }} color="#CDA922">
        Món mới
      </Typography>
      <Typography mr={1} sx={{ fontFamily: "Be Vietnam Pro" }}>
        {">"}
      </Typography>
      <Typography mr={1} sx={{ fontFamily: "Be Vietnam Pro" }}>
        Bào ngư sốt dầu hào cải xanh
      </Typography>
    </Box>
  );
}

export default BreadCrumb;
