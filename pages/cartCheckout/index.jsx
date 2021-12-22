import { Box, Typography } from "@mui/material";
import React from "react";
import CopyRight from "../../components/copyright";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Slide from "../../components/slide";
import styles from "../../styles/Home.module.css";
import BreadCrumb from "./breadCrumb";
import CartCheckoutLeft from "./cartCheckoutLeft";
import CartCheckoutRight from "./cartCheckoutRight";

function CartChe() {
  return (
    <div className={styles.container}>
      <Header />
      <Box
        sx={{
          maxWidth: "1220px",
          margin: "0 auto 50px",
          padding: "0 20px",
        }}
      >
        <BreadCrumb />
        <Typography
          sx={{
            fontFamily: "Be Vietnam Pro",
            fontSize: "42px",
            fontWeight: "700",
            lineHeight: "1.5",
            margin: "32px 0",
          }}
          variant="h3"
        >
          Thông tin liên hệ đặt món
        </Typography>
        <Box
          sx={{
            maxWidth: "1220px",
            margin: "0 auto 64px",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <CartCheckoutLeft />
          <CartCheckoutRight />
        </Box>
      </Box>
      <Slide />
      <Footer />
      <CopyRight />
    </div>
  );
}

export default CartChe;
