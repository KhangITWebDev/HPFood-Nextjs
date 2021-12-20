import { Box, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

function NewFoodItem({ food }) {
  const route = useRouter();
  return (
    <Box>
      <Grid
        mt={2}
        container
        sx={{ cursor: "pointer" }}
        onClick={() => route.push("/foodDetail")}
      >
        {food.slice(0, 4).map((item, index) => (
          <Grid
            item
            xs
            key={index}
            sx={{ backgroundColor: "#ffffff", borderRadius: "8px" }}
            mr={0.8}
            ml={0.8}
          >
            <Box>
              <img src={item.image} alt={item.name} style={{ width: "100%" }} />
              <Typography
                variant="h5"
                fontSize={18}
                fontWeight={500}
                mt={0.8}
                mb={0.8}
                ml={1.2}
                sx={{ fontFamily: "Be Vietnam Pro" }}
              >
                {item.name}
              </Typography>
              {item.priceS && (
                <Typography
                  mb={0.6}
                  ml={1.2}
                  fontSize={14}
                  fontWeight={400}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "Be Vietnam Pro",
                  }}
                >
                  <img
                    src="/images/SizeS.png"
                    alt=""
                    style={{
                      width: "18px",
                      height: "18px",
                      marginRight: "7px",
                    }}
                  />
                  {item.priceS}
                </Typography>
              )}
              {item.priceM && (
                <Typography
                  fontSize={14}
                  fontWeight={400}
                  ml={1.2}
                  mb={0.6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "Be Vietnam Pro",
                  }}
                >
                  <img
                    src="/images/SizeM.png"
                    alt=""
                    style={{
                      width: "18px",
                      height: "18px",
                      marginRight: "7px",
                    }}
                  />
                  {item.priceM}
                </Typography>
              )}
              {item.priceL && (
                <Typography
                  fontSize={14}
                  fontWeight={400}
                  ml={1.2}
                  pb={1.2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "Be Vietnam Pro",
                  }}
                >
                  <img
                    src="/images/SizeL.png"
                    alt=""
                    style={{
                      width: "18px",
                      height: "18px",
                      marginRight: "7px",
                    }}
                  />
                  {item.priceL}
                </Typography>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default NewFoodItem;
