import { Box, Grid } from "@mui/material";
import React from "react";
import CopyRight from "../../components/copyright";
import Footer from "../../components/footer";
import Header from "../../components/header";
import styles from "../../styles/Home.module.css";
import BreadCurmb from "./breadcurmb";
import PartyDetail from "./partyDetail";
import Slide from "./slide";
const slider = [
  { image: "/images/party1.png" },
  { image: "/images/party2.png" },
  { image: "/images/party3.png" },
  { image: "/images/party4.png" },
];
function PartyService(props) {
  return (
    <div className={styles.container}>
      <Header />
      <Box>
        <Box
          sx={{
            maxWidth: "1940px",
            margin: "auto 0",
            padding: "40px 20px 24px",
            background: "#111111",
          }}
        >
          <BreadCurmb />
          <Slide slider={slider} />
        </Box>
        <PartyDetail />
      </Box>
      <Footer />
      <CopyRight />
    </div>
  );
}

export default PartyService;
