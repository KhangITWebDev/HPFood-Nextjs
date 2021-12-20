import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <Box
      sx={{
        maxWidth: "1940px",
        margin: "-20px auto 0",
        padding: "40px 20px 24px",
        background: "#262626",
      }}
    >
      <Box
        color="#ffffff"
        sx={{
          maxWidth: "1220px",
          margin: "0 auto",
          padding: "64px 20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "33%" }}>
          <Box>
            <img
              src="/images/Frame.png"
              alt=""
              style={{ width: "163.8px", height: "60px" }}
            />
            <Typography
              mt={1.2}
              variant="h5"
              fontSize={20}
              fontWeight={600}
              sx={{ fontFamily: "Be Vietnam Pro" }}
            >
              HP FOOD - HƯƠNG PHỐ GROUP
            </Typography>
            <Typography
              components="p"
              fontSize={16}
              fontWeight={400}
              lineHeight={1.5}
              color="rgba(255, 255, 255, 0.7)"
              sx={{ fontFamily: "Be Vietnam Pro" }}
            >
              Được thiết kế ấn tượng độc đáo theo phong cách tân cổ điển Châu
              Âu. Tọa lạc ngay trung tâm quận Gò Vấp với diện tích hơn 12,675m2
              gồm 21 sảnh tiệc.
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography variant="h5" mb={2.4} fontSize={18} fontWeight={600}>
            HỖ TRỢ
          </Typography>
          <Box
            fontSize={16}
            lineHeight={1.5}
            fontWeight={400}
            color="rgba(255, 255, 255, 0.7)"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Link href="/">
              <a>Dịch vụ khách hàng</a>
            </Link>
            <Link href="/">
              <a style={{ marginTop: "8px" }}>Hòm thư góp ý</a>
            </Link>
            <Link href="/">
              <a style={{ marginTop: "8px" }}>Tải về</a>
            </Link>
            <Link href="/">
              <a style={{ marginTop: "8px" }}>FAQs</a>
            </Link>
          </Box>
        </Box>
        <Box sx={{ width: "40%" }}>
          <Typography
            variant="h5"
            fontSize={18}
            fontWeight={600}
            sx={{ fontFamily: "Be Vietnam Pro" }}
          >
            ĐỊA CHỈ LIÊN HỆ
          </Typography>
          <Box mt={2.4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "12px",
                fontFamily: "Be Vietnam Pro",
              }}
            >
              <img src="/images/phone.png" alt="" />
              <Typography
                ml={1.367}
                fontSize={14}
                fontWeight={400}
                lineHeight={1.5}
                color="rgba(255, 255, 255, 0.7)"
                sx={{ fontFamily: "Be Vietnam Pro" }}
              >
                Điện thoại: (028) 3989.6179 - (028) 39894610
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "12px",
              }}
            >
              <img src="/images/mail.png" alt="" />
              <Typography
                ml={1.367}
                fontSize={14}
                fontWeight={400}
                lineHeight={1.5}
                color="rgba(255, 255, 255, 0.7)"
                sx={{ fontFamily: "Be Vietnam Pro" }}
              >
                Email: salehuongpho@gmail.com
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "12px",
              }}
            >
              <img src="/images/map-pin.png" alt="" />
              <Typography
                ml={1.367}
                fontSize={14}
                fontWeight={400}
                lineHeight={1.5}
                color="rgba(255, 255, 255, 0.7)"
                sx={{ fontFamily: "Be Vietnam Pro" }}
              >
                Địa chỉ: A12 Phan Văn Trị - Phường 7 - Quận Gò Vấp - Tp. Hồ Chí
                Minh
              </Typography>
            </Box>
            <Box mt={2.4} sx={{ display: "flex" }}>
              <Link href="/">
                <a style={{ marginRight: "24px" }}>
                  <img src="/images/zalo.png" alt="" />
                </a>
              </Link>
              <Link href="/">
                <a style={{ marginRight: "24px" }}>
                  <img src="/images/youtube.png" alt="" />
                </a>
              </Link>
              <Link href="/">
                <a style={{ marginRight: "24px" }}>
                  <img src="/images/facebook.png" alt="" />
                </a>
              </Link>
              <Link href="/">
                <a style={{ marginRight: "24px" }}>
                  <img src="/images/linkin.png" alt="" />
                </a>
              </Link>
              <Link href="/">
                <a style={{ marginRight: "24px" }}>
                  <img src="/images/instagram.png" alt="" />
                </a>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
