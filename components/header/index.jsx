import React, { useRef, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchBar from "./searchBar";
import { Badge, Typography } from "@mui/material";
import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeliciousFood from "./deliciousfood";
import { useRouter } from "next/router";
import PartyService from "./partyService";

function Header() {
  const route = useRouter();
  return (
    <Box>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#ffffff",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 0",
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
              <PartyService />
              <Box color={"#000000"} mr={4}>
                <Link href="/news">
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
                <Link href="/contact">
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
                style={{
                  width: "24px",
                  height: "24px",
                  marginLeft: "32px",
                  cursor: "pointer",
                }}
                src="/images/cart.png"
                onClick={() => route.push("/cart")}
              />
            </Badge>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
