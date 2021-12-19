import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React, { useState } from "react";
import CopyRight from "../../components/copyright";
import Footer from "../../components/footer";
import Header from "../../components/header";
import styles from "../../styles/Home.module.css";
import DeliciousFoodItem from "./item";
import Cart from "./cart";
import ProducrHeader from "./header";
import ModalProduct from "./modalProduct";

function NewFood() {
  const route = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        <Box mt={2.4} sx={{ display: "flex" }}>
          <Typography
            mr={1}
            sx={{ cursor: "pointer" }}
            onClick={() => route.push("/")}
            color="#CDA922"
          >
            Trang chủ
          </Typography>
          <Typography mr={1}>{">"}</Typography>
          <Typography>Món mới</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
          <Box sx={{ width: "70%" }}>
            <ProducrHeader />
            <DeliciousFoodItem handleOpen={handleOpen} />
            <ModalProduct open={open} handleClose={handleClose} />
          </Box>
          <Cart />
        </Box>
      </Box>
      <Footer />
      <CopyRight />
    </div>
  );
}

export default NewFood;
