import { Box, Typography } from "@mui/material";
import React from "react";

function Top(props) {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontFamily: "Be Vietnam Pro",
          fontSize: "42px",
          fontWeight: "700",
          lineHeight: "1.5",
        }}
      >
        HP FOOD - HUONG PHO GROUP
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          width: "690px",
          margin: "0 auto",
          fontFamily: "Be Vietnam Pro",
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "1.5",
        }}
      >
        Chúng tôi luôn quan tâm đến trải nghiệm của khách hàng. Vì thế, nếu bạn
        có thông tin cần trao đổi hãy liên hệ với chúng tôi nhé!
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: "24px",
          marginTop: "48px",
        }}
      >
        <Box
          sx={{ background: "#FCFAF2", padding: "32px", borderRadius: "8px" }}
        >
          <img
            src="/images/map-pin.png"
            style={{ width: "32px", height: "32px" }}
            alt=""
          />
          <Typography
            sx={{
              fontFamily: "Be Vietnam Pro",
              fontSize: "24px",
              lineHeight: 1.5,
              fontWeight: "500",
              marginTop: "12px",
            }}
          >
            Địa chỉ
          </Typography>
          <Typography
            sx={{
              fontFamily: "Be Vietnam Pro",
              fontSize: "16px",
              lineHeight: 1.5,
              fontWeight: 400,
              marginTop: "12px",
            }}
          >
            A12 Phan Văn Trị, phường 7 Quận Gò Vấp Tp. Hồ Chí Minh
          </Typography>
        </Box>
        <Box
          sx={{ background: "#FCFAF2", padding: "32px", borderRadius: "8px" }}
        >
          <img
            src="/images/phone.png"
            style={{ width: "32px", height: "32px" }}
            alt=""
          />
          <Typography
            sx={{
              fontFamily: "Be Vietnam Pro",
              fontSize: "24px",
              lineHeight: 1.5,
              fontWeight: "500",
              marginTop: "12px",
            }}
          >
            Liên lạc
          </Typography>
          <Typography
            sx={{
              fontFamily: "Be Vietnam Pro",
              fontSize: "16px",
              lineHeight: 1.5,
              fontWeight: 400,
              marginTop: "12px",
            }}
          >
            Tel: (028). 3989.6179
          </Typography>
          <Typography
            sx={{
              fontFamily: "Be Vietnam Pro",
              fontSize: "16px",
              lineHeight: 1.5,
              fontWeight: 400,
              marginTop: "12px",
            }}
          >
            Fax: (028). 3989.4610
          </Typography>
        </Box>
        <Box
          sx={{ background: "#FCFAF2", padding: "32px", borderRadius: "8px" }}
        >
          <img
            src="/images/mail.png"
            style={{ width: "32px", height: "32px" }}
            alt=""
          />
          <Typography
            sx={{
              fontFamily: "Be Vietnam Pro",
              fontSize: "24px",
              lineHeight: 1.5,
              fontWeight: "500",
              marginTop: "12px",
            }}
          >
            Địa chỉ email
          </Typography>
          <Typography
            sx={{
              fontFamily: "Be Vietnam Pro",
              fontSize: "16px",
              lineHeight: 1.5,
              fontWeight: 400,
              marginTop: "12px",
            }}
          >
            salehuongpho@gmail.com
          </Typography>
        </Box>
        <Box
          sx={{ background: "#FCFAF2", padding: "32px", borderRadius: "8px" }}
        >
          <img
            src="/images/facebook1.png"
            style={{ width: "32px", height: "32px" }}
            alt=""
          />
          <Typography
            sx={{
              fontFamily: "Be Vietnam Pro",
              fontSize: "24px",
              lineHeight: 1.5,
              fontWeight: "500",
              marginTop: "12px",
            }}
          >
            Facebook
          </Typography>
          <Typography
            sx={{
              fontFamily: "Be Vietnam Pro",
              fontSize: "16px",
              lineHeight: 1.5,
              fontWeight: 400,
              marginTop: "12px",
            }}
          >
            /nhahangtiecuoihuongpho
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Top;
