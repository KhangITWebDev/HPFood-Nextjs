import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

function BreadCurmb() {
  const route = useRouter();
  return (
    <Box
      sx={{
        maxWidth: "1220px",
        margin: "24px 0 32px",
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
        <Typography mr={1} sx={{ fontFamily: "Be Vietnam Pro" }}>
          {">"}
        </Typography>
        <Typography mr={1} sx={{ fontFamily: "Be Vietnam Pro" }}>
          Liên hệ
        </Typography>
      </Box>
    </Box>
  );
}

export default BreadCurmb;
