import { Box, Typography } from "@mui/material";
import React from "react";
import { foodData } from "../api/food";

function DeliciousFoodItem({ handleOpen }) {
  const food = foodData;
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridGap: "24px",
      }}
    >
      {food.map((item, index) => (
        <Box
          key={index}
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
          }}
          onClick={handleOpen}
        >
          <img src={item.image} alt={item.name} />
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
      ))}
    </Box>
  );
}

export default DeliciousFoodItem;
