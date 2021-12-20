import { Box, Button, Typography, Grid } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import { prominentData } from "./prominentData";

function ProminentService() {
  const prominent = prominentData;
  return (
    <Box>
      <Box
        sx={{
          maxWidth: "1940px",
          margin: "12px auto",
          padding: "40px 20px 80px",
          background:
            "linear-gradient(248.92deg, #524206 0%, #2D260E 101.05%);",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          mb={4}
        >
          <img
            src="/images/Frame2.png"
            alt=""
            style={{ width: "24px", height: "60px" }}
          />
          <Typography
            fontSize={36}
            fontWeight={700}
            color="#CDA922"
            sx={{ fontFamily: "Be Vietnam Pro" }}
          >
            DỊCH VỤ NỔI BẬT
          </Typography>
        </Box>
        <Box
          sx={{
            maxWidth: "1220px",
            margin: "0 auto",
            padding: "0 20px 20px",
          }}
        >
          <Grid container sx={{ width: "100%" }}>
            {prominent.map((item, index) => (
              <Grid item key={index} position="relative" ml={1.5}>
                <img src={item.image} alt="" style={{ width: "100%" }} />
                <img
                  src="/images/blur.png"
                  alt=""
                  style={{ position: "absolute", top: 0 }}
                />
                <Box
                  position="absolute"
                  sx={{
                    bottom: "24px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "90%",
                  }}
                >
                  <Typography
                    variant="h5"
                    fontSize={22}
                    fontWeight={700}
                    color="#FFFFFF"
                    mb={1.2}
                    sx={{ fontFamily: "Be Vietnam Pro" }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    component="p"
                    color="#ffffff"
                    fontSize={14}
                    fontWeight={400}
                    lineHeight={1.5}
                    mb={2}
                    sx={{ fontFamily: "Be Vietnam Pro" }}
                  >
                    {item.desc}
                  </Typography>
                  <Button
                    sx={{
                      color: "#CDA922",
                      border: "1px solid #CDA922",
                      borderRadius: "4px",
                      padding: "4px 20px",
                      fontFamily: "Be Vietnam Pro",
                    }}
                  >
                    Xem Chi Tiết
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default ProminentService;
