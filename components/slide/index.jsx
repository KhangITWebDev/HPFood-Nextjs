import { Box, Typography } from "@mui/material";
import React from "react";
import { sliderData } from "./sliderData";

function Slide() {
  const slider = sliderData;
  return (
    <Box
      sx={{
        maxWidth: "1940px",
        margin: "-20px auto 0",
        padding: "40px 20px 24px",
        background: "#111111",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridGap: "0 24px",
          maxWidth: "1220px",
          margin: "0 auto",
          padding: "0 20px 20px",
          position: "relative",
        }}
      >
        <img
          src="/images/pre.png"
          alt=""
          style={{
            position: "absolute",
            left: "0",
            top: "25%",
            transform: "translateY(100%)",
          }}
        />
        <img
          src="/images/next.png"
          alt=""
          style={{
            position: "absolute",
            right: "0",
            top: "25%",
            transform: "translateY(100%)",
          }}
        />
        {slider.map((item, index) => (
          <Box key={index}>
            <img src={item.image} alt="" style={{ opacity: 0.7 }} />
            <Typography
              variant="h5"
              mt={1.2}
              color="#ffffff"
              fontSize={18}
              fontWeight={400}
              textAlign={"center"}
            >
              {item.name}
            </Typography>
            <img
              src="/images/play-circle.png"
              style={{
                position: "absolute",
                top: "0",
                transform: "translateY(50%) translateX(100%)",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Slide;
