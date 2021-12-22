import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

function DetailRight(props) {
  return (
    <Box
      sx={{
        width: "40%",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "32px 0",
        marginLeft: "24px",
        marginTop: "32px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingLeft: "24px",
        }}
      >
        <img
          src="/images/send.png"
          sx={{ width: "32px", height: "32px" }}
          alt=""
        />
        <Typography
          sx={{
            fontFamily: "Be Vietnam Pro",
            fontSize: "28px",
            lineHeight: "1.5",
            fontWeight: "700",
            textTransform: "uppercase",
            marginLeft: "12px",
          }}
        >
          Liên hệ đặt tiệc
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "2px",
          padding: "-20px",
          backgroundColor: "#DEDEDE",
          marginTop: "20px",
        }}
      ></Box>
      <Box sx={{ padding: "20px 24px 0" }}>
        <Typography
          sx={{
            fontFamily: "Be Vietnam Pro",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: 1.5,
            color: "#666666",
          }}
        >
          Bạn vui lòng điền các thông tin dưới đây, HP FOOD sẽ liên hệ lại bạn
          sớm nhất có thể.
        </Typography>
        <Typography
          sx={{
            fontFamily: "Be Vietnam Pro",
            fontSize: "16px",
            marginTop: "16px",
            color: "#333333",
          }}
        >
          Tên của bạn &nbsp;
          <Box component="span" color="red">
            *
          </Box>
        </Typography>
        <TextField size="small" sx={{ width: "100%", marginTop: "8px" }} />
        <Typography
          sx={{
            fontFamily: "Be Vietnam Pro",
            fontSize: "16px",
            marginTop: "16px",
            color: "#333333",
          }}
        >
          Số điện thoại &nbsp;
          <Box component="span" color="red">
            *
          </Box>
        </Typography>
        <TextField size="small" sx={{ width: "100%", marginTop: "8px" }} />
        <Typography
          sx={{
            fontFamily: "Be Vietnam Pro",
            fontSize: "16px",
            marginTop: "16px",
            color: "#333333",
          }}
        >
          Email &nbsp;
          <Box component="span" color="red">
            *
          </Box>
        </Typography>
        <TextField size="small" sx={{ width: "100%", marginTop: "8px" }} />
        <Box sx={{ display: "flex", marginTop: "16px" }}>
          <Box mr={0.8}>
            <Typography>Ngày tổ chức</Typography>
            <TextField
              type="date"
              sx={{ height: "48px", marginTop: "8px" }}
              size="small"
            />
          </Box>
          <Box ml={0.8}>
            <Typography>Số khách dự tính</Typography>
            <TextField sx={{ height: "48px", marginTop: "8px" }} size="small" />
          </Box>
        </Box>
        <Button
          sx={{
            width: "100%",
            background: "#CDA922",
            color: "#ffffff",
            borderRadius: "8px",
            fontSize: "18px",
            fontWeight: 700,
            marginTop: "24px",
            padding: "10px 0",
            "&:hover": {
              color: "#CDA922",
              background: "transparent",
              border: "1px solid",
            },
          }}
        >
          Gửi tới HP FOOD
        </Button>
      </Box>
    </Box>
  );
}

export default DetailRight;
