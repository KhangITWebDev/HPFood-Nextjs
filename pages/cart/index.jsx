import { Box, Typography } from "@mui/material";
import React from "react";
import CopyRight from "../../components/copyright";
import Footer from "../../components/footer";
import Header from "../../components/header";
import styles from "../../styles/Home.module.css";
import BreadCrumb from "./breadCrumb";
import CartItem from "./cartItem";

function Cart() {
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
          GIỎ HÀNG
        </Typography>
        <CartItem />
      </Box>
      <Footer />
      <CopyRight />
    </div>
  );
}

export default Cart;
