import { Box, Typography } from "@mui/material";
import React from "react";
import BreadCurmb from "./breadcurmb";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Top(props) {
  return (
    <Box sx={{ backgroundColor: "#fcfaf2" }}>
      <Box
        sx={{
          maxWidth: "1220px",
          margin: "0 auto 50px",
          padding: "0 20px",
          display: "flex",
        }}
      >
        <Box sx={{ width: "800px", margin: "0 auto" }}>
          <BreadCurmb />
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Be Vietnam Pro",
              fontSize: "42px",
              fontWeight: "700",
              lineHeight: "1.5",
            }}
          >
            Bò sốt rượu vang + bánh mì ngon tuyệt cho tiệc cưới
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "32px",
              marginBottom: "32px",
            }}
          >
            <Typography
              sx={{ color: "#666666", fontSize: "14px", lineHeight: 1.5 }}
            >
              15/12/2021
            </Typography>
            <FiberManualRecordIcon
              sx={{ width: "6px", height: "6px", color: "#C4C4C4" }}
            />
            <Typography
              sx={{ color: "#666666", fontSize: "14px", lineHeight: 1.5 }}
            >
              TIN ẨM THỰC
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Top;
