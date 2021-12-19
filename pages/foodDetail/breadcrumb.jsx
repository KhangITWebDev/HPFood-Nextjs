import { Box, Typography } from "@mui/material";
import React from "react";

function BreadCrumb(props) {
  return (
    <Box mt={2.4} sx={{ display: "flex" }}>
      <Typography
        mr={1}
        sx={{ cursor: "pointer" }}
        onClick={() => route.push("/")}
        color="#CDA922"
      >
        Trang chủ
      </Typography>
      <Typography mr={1}>{">"}</Typography>
      <Typography mr={1} color="#CDA922">
        Món mới
      </Typography>
      <Typography mr={1}>{">"}</Typography>
      <Typography mr={1}>Bào ngư sốt dầu hào cải xanh</Typography>
    </Box>
  );
}

export default BreadCrumb;
