import { Box, Grid } from "@mui/material";
import React from "react";

function Slide({ slider }) {
  return (
    <Box
      sx={{
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
          top: "50%",
          transform: "translateY(-100%)",
        }}
      />
      <img
        src="/images/next.png"
        alt=""
        style={{
          position: "absolute",
          right: "0",
          top: "50%",
          transform: "translateY(-100%)",
        }}
      />
      <Grid container>
        {slider.map((item, index) => (
          <Grid key={index} item>
            <Box>
              <img
                src={item.image}
                alt=""
                style={{
                  opacity: 0.7,
                  margin: "0 8px",
                  width: "278px",
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Slide;
