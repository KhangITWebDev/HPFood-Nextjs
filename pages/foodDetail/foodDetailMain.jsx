import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import DescriptionFood from "./descriptionFood";
import MenuFood from "./menuFood";

function FoodDetailMain() {
  const [showMenu, setShowMenu] = useState(false);
  const [showDesc, setShowDesc] = useState(true);
  return (
    <Box
      mt={6.4}
      sx={{
        background: "#FFFFFF",
        borderRadius: "8px",
        padding: "32px",
        marginBottom: "32px",
      }}
    >
      <Typography variant="h4" fontSize={28} fontWeight={700} mb={2}>
        THÔNG TIN SẢN PHẨM
      </Typography>
      <Box>
        <Box
          style={{
            padding: "12px 0",
            borderTop: "1px solid #DEDEDE",
            borderBottom: "1px solid #DEDEDE",
          }}
        >
          <Typography
            variant="span"
            mr={4}
            color="#CDA922"
            sx={{ cursor: "pointer" }}
            onClick={() => {
              setShowDesc(true);
              setShowMenu(false);
            }}
          >
            Mô tả sản phẩm
          </Typography>
          <Typography
            variant="span"
            sx={{ cursor: "pointer", "&:hover": { color: "#CDA922" } }}
            onClick={() => {
              setShowDesc(false);
              setShowMenu(true);
            }}
          >
            Nguyên liệu
          </Typography>
        </Box>
        {showDesc && <DescriptionFood />}
        {showMenu && (
          <Box>
            <MenuFood />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default FoodDetailMain;
