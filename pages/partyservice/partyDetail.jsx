import { Box, Typography } from "@mui/material";
import React from "react";
import DetailLeft from "./detailLeft";
import DetailRight from "./detailRight";

function PartyDetail(props) {
  return (
    <Box
      sx={{
        maxWidth: "1220px",
        margin: "0 auto 64px",
        padding: "0 20px 20px",
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <DetailLeft />
      <DetailRight />
    </Box>
  );
}

export default PartyDetail;
