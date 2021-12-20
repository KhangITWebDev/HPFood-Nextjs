import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";

function ProducrHeader() {
  const [item, setItem] = useState("");

  const handleChange = (event) => {
    setItem(event.target.value);
  };
  return (
    <Box
      mt={4}
      mb={3.2}
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img src="/images/new.png" alt="" />
        <Typography variant="h5" ml={1.2} sx={{ fontFamily: "Be Vietnam Pro" }}>
          Món mới
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          mr={1.6}
          color="#666666"
          sx={{ fontFamily: "Be Vietnam Pro" }}
        >
          Lọc theo
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 255 }}>
          <Select
            value={item}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            style={{ fontSize: "16px", fontFamily: "Be Vietnam Pro" }}
          >
            <MenuItem style={{ fontSize: "16px" }} value="">
              Món mới
            </MenuItem>
            <MenuItem style={{ fontSize: "16px" }} value={10}>
              Món lẻ
            </MenuItem>
            <MenuItem style={{ fontSize: "16px" }} value={20}>
              Các món gỏi
            </MenuItem>
            <MenuItem style={{ fontSize: "16px" }} value={30}>
              Các món gà
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}

export default ProducrHeader;
