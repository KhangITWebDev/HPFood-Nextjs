import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { prominentData } from "../../components/prominentService/prominentData";

function ServiceItem() {
  const prominent = prominentData;
  return (
    <Box>
      <Box
        sx={{
          maxWidth: "1940px",
          margin: "12px auto",
          padding: "0 0 64px",
        }}
      >
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
                  >
                    {item.desc}
                  </Typography>
                  <Button
                    sx={{
                      color: "#CDA922",
                      border: "1px solid #CDA922",
                      borderRadius: "4px",
                      padding: "4px 20px",
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

export default ServiceItem;
