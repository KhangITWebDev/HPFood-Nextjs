import { Box } from "@mui/material";
import React from "react";
import Appetizer from "../../components/appetizer";
import CopyRight from "../../components/copyright";
import FavoriteFood from "../../components/favoriteFood";
import Footer from "../../components/footer";
import Header from "../../components/header";
import styles from "../../styles/Home.module.css";
import BreadCrumb from "./breadcrumb";
import FoodDetailTop from "./foodDetailTop";
import FoodDetailMain from "./foodDetailMain";

function FoodDetail() {
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
        <FoodDetailTop />
        <FoodDetailMain />
        <Appetizer />
        <FavoriteFood />
      </Box>
      <Footer />
      <CopyRight />
    </div>
  );
}

export default FoodDetail;
