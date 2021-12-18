import { Box, Typography } from "@mui/material";
import React from "react";
import { saladData } from "./saladData";

function SaladItem(props) {
  const salad = saladData;
  return (
    <Box
      mt={2}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gridGap: "0 16px",
      }}
    >
      {salad.map((item, index) => (
        <Box
          key={index}
          sx={{
            backgroundColor: "#ffffff",
            boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
          }}
        >
          <img src={item.image} alt={item.name} />
          <Typography
            variant="h5"
            fontSize={18}
            fontWeight={500}
            mt={0.8}
            mb={0.8}
            ml={1.2}
          >
            {item.name}
          </Typography>
          {item.priceS && (
            <Typography
              mb={0.6}
              ml={1.2}
              sx={{ display: "flex", alignItems: "center" }}
              fontSize={14}
              fontWeight={400}
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
              ml={1.2}
              mb={0.6}
              fontSize={14}
              fontWeight={400}
              sx={{ display: "flex", alignItems: "center" }}
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
              ml={1.2}
              pb={1.2}
              fontSize={14}
              fontWeight={400}
              sx={{ display: "flex", alignItems: "center" }}
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

export default SaladItem;
