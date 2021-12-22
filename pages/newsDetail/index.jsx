import { Box } from "@mui/material";
import React from "react";
import CopyRight from "../../components/copyright";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Slide from "../../components/slide";
import styles from "../../styles/Home.module.css";
import Detail from "./detail";
import RelatedPosts from "./relatedposts";
import Top from "./top";

function NewsDetail() {
  return (
    <div className={styles.container}>
      <Box>
        <Header />
        <Top />
        <Box mb={8}>
          <Box
            sx={{
              maxWidth: "1220px",
              margin: "0 auto 50px",
              padding: "0 20px",
              display: "flex",
            }}
          >
            <Box
              sx={{
                borderBottom: "1px solid black",
                // marginBottom: "64px",
                paddingBottom: "64px",
                width: "100%",
                display: "flex",
              }}
            >
              <Detail />
            </Box>
          </Box>
        </Box>
        <RelatedPosts />
        <Slide />
        <Footer />
        <CopyRight />
      </Box>
    </div>
  );
}

export default NewsDetail;
