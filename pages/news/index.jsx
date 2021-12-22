import { Box } from "@mui/material";
import React from "react";
import CopyRight from "../../components/copyright";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Slide from "../../components/slide";
import styles from "../../styles/Home.module.css";
import Pagination from "./Pagination";
import Right from "./right";
import SlideBar from "./slideBar";

function News() {
  return (
    <div className={styles.container}>
      <Header />
      <Box mb={8}>
        <Box
          sx={{
            maxWidth: "1220px",
            margin: "0 auto 50px",
            padding: "0 20px",
            display: "flex",
          }}
        >
          <SlideBar />
          <Right />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Pagination />
        </Box>
      </Box>
      <Slide />
      <Footer />
      <CopyRight />
    </div>
  );
}

export default News;
