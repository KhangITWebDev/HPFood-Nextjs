import { Box } from "@mui/material";
import React from "react";
import CopyRight from "../../components/copyright";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Slide from "../../components/slide";
import styles from "../../styles/Home.module.css";
import BreadCurmb from "./breadcurmb";
import FormContact from "./formContact";
import Top from "./top";

function Contact() {
  return (
    <div className={styles.container}>
      <Box>
        <Header />
        <Box mb={8}>
          <Box
            sx={{
              maxWidth: "1220px",
              margin: "0 auto 32px",
              padding: "0 20px",
            }}
          >
            <BreadCurmb />
            <Top />
          </Box>
          <img src="/images/map.png" alt="" />
          <Box
            sx={{
              maxWidth: "1220px",
              margin: "0 auto 32px",
              padding: "0 20px",
            }}
          >
            <FormContact />
          </Box>
        </Box>
        <Slide />
        <Footer />
        <CopyRight />
      </Box>
    </div>
  );
}

export default Contact;
