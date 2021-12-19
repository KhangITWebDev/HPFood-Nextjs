import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Line from "./line";
import Total from "./total";

function Cart() {
  return (
    <Box
      sx={{
        width: "30%",
        borderRadius: "8px",
        marginLeft: "48px",
        boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box>
        <Box sx={{ display: "flex", width: "90%", margin: "24px auto 20px" }}>
          <img
            src="/images/cart.png"
            alt=""
            style={{ width: "32px", height: "32px", marginRight: "12px" }}
          />
          <Typography fontSize={24} fontWeight={700}>
            GIỎ HÀNG
          </Typography>
        </Box>
        <Line />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
            margin: "0 auto",
          }}
        >
          <img
            style={{ width: "76px", height: "50px" }}
            src="/images/food4.png"
            alt=""
          />
          <Box ml={1.2}>
            <Typography fontSize={16} fontWeight={500} color="#111111" mb={1}>
              Cá chép hấp hồng kong
            </Typography>
            <Box style={{ display: "flex" }}>
              <Box mr={1.2} style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="/images/SizeM.png"
                  style={{ width: "18px", height: "18px" }}
                  alt=""
                />
                <Typography ml={0.8} fontSize={14} fontWeight={400}>
                  X1
                </Typography>
              </Box>
              <Box style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="/images/SizeM.png"
                  style={{ width: "18px", height: "18px" }}
                  alt=""
                />
                <Typography ml={0.8} fontSize={14} fontWeight={400}>
                  X1
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography fontSize={16} fontWeight={700} mb={1}>
              10.126.000 đ
            </Typography>
            <Box style={{ display: "flex", justifyContent: "flex-end" }}>
              <img
                src="/images/edit.png"
                alt=""
                style={{ width: "20px", height: "20px" }}
              />
              <img
                src="/images/delete.png"
                alt=""
                style={{
                  marginLeft: "20px",
                  width: "20px",
                  height: "20px",
                }}
              />
            </Box>
          </Box>
        </Box>
        <Line />
      </Box>
      <Total />
    </Box>
  );
}

export default Cart;
