import { Box, Typography } from "@mui/material";
import React from "react";

function Banner() {
  return (
    <Box mt={1} position="relative">
      <img src="/images/banner.png" alt="" />
      <img
        src="/images/banner2.png"
        alt=""
        style={{ opacity: 0.9, position: "absolute", top: 0 }}
      />
      <Box
        position="absolute"
        sx={{
          top: "50%",
          right: "50%",
          transform: "translateX(50%) translateY(-50%)",
        }}
      >
        <Typography
          textAlign={"center"}
          variant="h1"
          fontSize={64}
          fontWeight={800}
          color="#DEB722"
        >
          HUONG PHO GROUP
        </Typography>
        <Typography
          textAlign={"center"}
          component="p"
          color="#ffffff"
          fontSize={24}
          maxWidth={800}
        >
          Quis et ac quisque arcu, sed ac tincidunt convallis nunc. Eleifend
          tincidunt gravida mi turpis eget ac sit.
        </Typography>
      </Box>
    </Box>
  );
}

export default Banner;
