import { Box, Typography } from "@mui/material";
import React from "react";
import CopyRight from "../../components/copyright";
import Footer from "../../components/footer";
import Header from "../../components/header";
import styles from "../../styles/Home.module.css";
import ProminentService from "../../components/prominentService";
import BannerService from "./bannerService";
import ServiceItem from "./item";

function Service() {
  return (
    <div className={styles.container}>
      <Header />
      <BannerService />
      <Typography
        sx={{
          width: "800px",
          margin: "64px auto 48px",
          textAlign: "center",
          fontSize: "16px",
          lineHeight: "1.5",
        }}
      >
        Khách hàng đến với Hương Phố luôn cảm thấy thoải mái và an tâm trước sự
        đa dạng của món ăn, dịch vụ do nhà hàng cung cấp và đáp ứng được số
        lượng khách mời lớn. Theo sau đó là sự tận tình, tỉ mỉ của các nhân viên
        tư vấn luôn luôn sẵn sàng hỗ trợ và đưa ra các lời khuyên phù hợp nhất
        cho khách hàng.
      </Typography>
      <ServiceItem />
      <Footer />
      <CopyRight />
    </div>
  );
}

export default Service;
