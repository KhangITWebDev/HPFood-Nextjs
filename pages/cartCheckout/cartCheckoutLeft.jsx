import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function CartCheckoutLeft(props) {
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };
  const handleChangeDistrict = (event) => {
    setDistrict(event.target.value);
  };
  const handleChangeWard = (event) => {
    setWard(event.target.value);
  };
  return (
    <Box
      sx={{
        width: "60%",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "32px",
        marginTop: "32px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Be Vietnam Pro",
          fontSize: "28px",
          fontWeight: "700",
          lineHeight: 1.5,
          textTransform: "uppercase",
          marginBottom: "32px",
        }}
      >
        Thông tin khách hàng
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
            Tên của bạn <Typography color="red"> &nbsp;*</Typography>
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
        }}
      >
        Email <Typography color="red">&nbsp;*</Typography>
      </Typography>
      <TextField size="small" sx={{ width: "100%", marginTop: "8px" }} />
      <Typography
        mt={3.2}
        mb={2.2}
        sx={{
          fontFamily: "Be Vietnam Pro",
          fontSize: "28px",
          fontWeight: "700",
          lineHeight: 1.5,
          textTransform: "uppercase",
        }}
      >
        Địa chỉ giao hàng
      </Typography>
      <Typography
        mt={2.4}
        sx={{
          fontFamily: "Be Vietnam Pro",
          fontSize: "16px",
          lineHeight: 1.5,
          display: "flex",
        }}
      >
        Tỉnh/ Thành phố <Typography color="red">&nbsp;*</Typography>
      </Typography>
      <Box sx={{ minWidth: 120, marginTop: "8px" }}>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={city}
            onChange={handleChangeCity}
            size="small"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ width: "50%" }} mr={1.2} mt={2.4}>
          <Typography
            sx={{
              fontFamily: "Be Vietnam Pro",
              fontSize: "16px",
              lineHeight: 1.5,
              display: "flex",
            }}
          >
            Quận/ Huyện <Typography color="red">&nbsp;*</Typography>
          </Typography>
          <Box sx={{ minWidth: 120, marginTop: "8px" }}>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={district}
                onChange={handleChangeDistrict}
                size="small"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box sx={{ width: "50%" }} ml={1.2} mt={2.4}>
          <Typography
            sx={{
              fontFamily: "Be Vietnam Pro",
              fontSize: "16px",
              lineHeight: 1.5,
              display: "flex",
            }}
          >
            Phường/ Xã <Typography color="red"> &nbsp;*</Typography>
          </Typography>
          <Box sx={{ minWidth: 120, marginTop: "8px" }}>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={ward}
                onChange={handleChangeWard}
                size="small"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
      <Typography
        mt={2.4}
        sx={{
          fontFamily: "Be Vietnam Pro",
          fontSize: "16px",
          lineHeight: 1.5,
          display: "flex",
        }}
      >
        Địa chỉ cụ thể <Typography color="red">&nbsp;*</Typography>
      </Typography>
      <TextField size="small" sx={{ width: "100%", marginTop: "8px" }} />
      <Typography
        mt={2.4}
        sx={{
          fontFamily: "Be Vietnam Pro",
          fontSize: "16px",
          lineHeight: 1.5,
          display: "flex",
        }}
      >
        Ghi chú
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "32px",
        }}
      >
        <Button
          sx={{
            color: "#CDA922",
            fontSize: "16px",
            fontWeight: 400,
            textTransform: "revert",
          }}
        >
          <ArrowBackIcon sx={{ marginRight: "10px" }} />
          Quay về giỏ hàng
        </Button>
        <Button
          sx={{
            width: "50%",
            background: "#CDA922",
            color: "#FFFFFF",
            fontSize: "18px",
            fontWeight: 700,
            padding: "10px",
          }}
        >
          Đặt hàng
        </Button>
      </Box>
    </Box>
  );
}

export default CartCheckoutLeft;
