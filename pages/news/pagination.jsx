import { Box, Button } from "@mui/material";
import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Pagination() {
  return (
    <Box sx={{ margin: "0 auto" }}>
      <Button
        sx={{
          border: "1px solid #CDA922",
          marginRight: "12px",
          width: "40px",
          height: "48px",
        }}
      >
        <ArrowBackIosNewIcon sx={{ color: "#CDA922" }} />
      </Button>
      <Button
        sx={{
          border: "1px solid #CDA922",
          backgroundColor: "#CDA922",
          color: "#ffffff",
          marginRight: "12px",
          width: "40px",
          height: "48px",
        }}
      >
        1
      </Button>
      <Button
        sx={{
          border: "1px solid #CDA922",
          backgroundColor: "#CDA922",
          color: "#ffffff",
          marginRight: "12px",
          width: "40px",
          height: "48px",
        }}
      >
        2
      </Button>
      <Button
        sx={{
          border: "1px solid #CDA922",
          backgroundColor: "#CDA922",
          color: "#ffffff",
          marginRight: "12px",
          width: "40px",
          height: "48px",
        }}
      >
        3
      </Button>
      <Button
        sx={{ border: "1px solid #CDA922", width: "40px", height: "48px" }}
      >
        <ArrowForwardIosIcon sx={{ color: "#CDA922" }} />
      </Button>
    </Box>
  );
}

export default Pagination;
