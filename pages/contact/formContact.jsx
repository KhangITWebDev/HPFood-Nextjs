import {
  Box,
  Button,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

function FormContact(props) {
  return (
    <Box
      sx={{
        width: "728px",
        margin: "64px auto",
        background: "#ffffff",
        padding: "32px",
        borderRadius: "8px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Be Vietnam Pro",
          fontSize: "28px",
          fontWeight: "700",
          lineHeight: 1.5,
          textAlign: "center",
          marginBottom: "12px",
        }}
      >
        Để lại liên hệ
      </Typography>
      <Typography
        sx={{
          fontFamily: "Be Vietnam Pro",
          fontSize: "16px",
          fontWeight: "400",
          width: "416px",
          margin: "0 auto",
          lineHeight: 1.5,
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Quý khách hàng vui lòng điền các thông tin bên dưới để HP FOOD có thể hỗ
        trợ tốt nhất
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ width: "50%" }} mr={1.2}>
          <Typography
            sx={{
              fontFamily: "Be Vietnam Pro",
              fontSize: "16px",
              lineHeight: 1.5,
              display: "flex",
            }}
          >
            Tên của bạn <Typography color="red">&nbsp;*</Typography>
          </Typography>
          <TextField size="small" sx={{ width: "100%", marginTop: "8px" }} />
        </Box>
        <Box sx={{ width: "50%" }} ml={1.2}>
          <Typography
            sx={{
              fontFamily: "Be Vietnam Pro",
              fontSize: "16px",
              lineHeight: 1.5,
              display: "flex",
            }}
          >
            Số điện thọai <Typography color="red"> &nbsp;*</Typography>
          </Typography>
          <TextField size="small" sx={{ width: "100%", marginTop: "8px" }} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "16px",
        }}
      >
        <Box sx={{ width: "50%" }} mr={1.2}>
          <Typography
            sx={{
              fontFamily: "Be Vietnam Pro",
              fontSize: "16px",
              lineHeight: 1.5,
              display: "flex",
            }}
          >
            Email <Typography color="red">&nbsp;*</Typography>
          </Typography>
          <TextField size="small" sx={{ width: "100%", marginTop: "8px" }} />
        </Box>
        <Box sx={{ width: "50%" }} ml={1.2}>
          <Typography
            sx={{
              fontFamily: "Be Vietnam Pro",
              fontSize: "16px",
              lineHeight: 1.5,
              display: "flex",
            }}
          >
            Tiêu đề <Typography color="red"> &nbsp;*</Typography>
          </Typography>
          <TextField size="small" sx={{ width: "100%", marginTop: "8px" }} />
        </Box>
      </Box>
      <Typography
        mt={2.4}
        sx={{
          fontFamily: "Be Vietnam Pro",
          fontSize: "16px",
          lineHeight: 1.5,
          display: "flex",
          marginTop: "16px",
        }}
      >
        Nội dung <Typography color="red">&nbsp;*</Typography>
      </Typography>
      <TextareaAutosize
        aria-label="minimum height"
        minRows={5}
        style={{
          width: "100%",
          marginTop: "8px",
          borderRadius: "4px",
          outline: "none",
          padding: "8px",
        }}
      />
      <Box sx={{ display: "flex", marginTop: "24px" }}>
        <Button
          sx={{
            margin: "0 auto",
            background: "#CDA922",
            width: "300px",
            color: "#FFFFFF",
            fontSize: "18px",
            fontWeight: "700",
            borderRadius: "8px",
          }}
        >
          Gửi thư
        </Button>
      </Box>
    </Box>
  );
}

export default FormContact;
