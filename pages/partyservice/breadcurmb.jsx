import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

function BreadCurmb(props) {
  const route = useRouter();
  return (
    <Box
      sx={{
        maxWidth: "1220px",
        margin: "0 auto",
        padding: "0 20px 20px",
        position: "relative",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Typography
          mr={1}
          sx={{ cursor: "pointer", fontFamily: "Be Vietnam Pro" }}
          onClick={() => route.push("/")}
          color="#CDA922"
        >
          Trang chủ
        </Typography>
        <Typography
          mr={1}
          color="#ffffff"
          sx={{ fontFamily: "Be Vietnam Pro" }}
        >
          {">"}
        </Typography>
        <Typography
          mr={1}
          sx={{ fontFamily: "Be Vietnam Pro" }}
          color="#CDA922"
        >
          Món mới
        </Typography>
        <Typography
          mr={1}
          color="#ffffff"
          sx={{ fontFamily: "Be Vietnam Pro" }}
        >
          {">"}
        </Typography>
        <Typography
          color="#ffffff"
          mr={1}
          sx={{ fontFamily: "Be Vietnam Pro" }}
        >
          Bào ngư sốt dầu hào cải xanh
        </Typography>
      </Box>
    </Box>
  );
}

export default BreadCurmb;
