import { Box } from "@mui/material";
import React from "react";

function SlideBar(props) {
  return (
    <Box
      sx={{
        width: "20%",
        display: "flex",
        flexDirection: "column",
        marginTop: "40px",
      }}
    >
      <Box
        component="span"
        sx={{
          fontFamily: "Be Vietnam Pro",
          fontSize: "24px",
          fontWeight: "500",
          lineHeight: "1.5",
          textTransform: "uppercase",
          marginBottom: "24px",
          cursor: "pointer",
        }}
      >
        tin ẩm thực
      </Box>
      <Box
        component="span"
        sx={{
          fontFamily: "Be Vietnam Pro",
          fontSize: "24px",
          fontWeight: "500",
          lineHeight: "1.5",
          textTransform: "uppercase",
          marginBottom: "24px",
          cursor: "pointer",
        }}
      >
        sự kiện
      </Box>
      <Box
        component="span"
        sx={{
          fontFamily: "Be Vietnam Pro",
          fontSize: "24px",
          fontWeight: "500",
          lineHeight: "1.5",
          textTransform: "uppercase",
          marginBottom: "24px",
          cursor: "pointer",
        }}
      >
        tin khuyễn mại
      </Box>
      <Box
        component="span"
        sx={{
          fontFamily: "Be Vietnam Pro",
          fontSize: "24px",
          fontWeight: "500",
          lineHeight: "1.5",
          textTransform: "uppercase",
          marginBottom: "24px",
          cursor: "pointer",
        }}
      >
        tin tuyển dụng
      </Box>
    </Box>
  );
}

export default SlideBar;
