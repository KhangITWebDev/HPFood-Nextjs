import React, { useRef, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchBar from "./searchBar";
import { Badge } from "@mui/material";
import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeliciousFood from "./deliciousfood";

function Header() {
  return (
    <Box mt={1}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box mr={4}>
              <img src="/images/Frame.png" />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "18px",
                fontWeight: "500",
                position: "relative",
              }}
              mr={6}
            >
              <Box color={"#000000"} mr={4}>
                <Link href="/">
                  <a style={{ fontSize: "14px" }}>TRANG CHỦ</a>
                </Link>
              </Box>
              <DeliciousFood />
              <Box color={"#000000"} mr={4}>
                <Link href="/">
                  <a
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "14px",
                    }}
                  >
                    DỊCH VỤ TIỆC
                    <KeyboardArrowDownIcon />
                  </a>
                </Link>
              </Box>
              <Box color={"#000000"} mr={4}>
                <Link href="/">
                  <a
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "14px",
                    }}
                  >
                    TIN TỨC
                    <KeyboardArrowDownIcon />
                  </a>
                </Link>
              </Box>
              <Box color={"#000000"}>
                <Link href="/">
                  <a
                    style={{
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    LIÊN HỆ
                  </a>
                </Link>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <SearchBar />
            <Badge badgeContent={12} color="primary">
              <img
                style={{ width: "24px", height: "24px", marginLeft: "32px" }}
                src="/images/cart.png"
              />
            </Badge>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
