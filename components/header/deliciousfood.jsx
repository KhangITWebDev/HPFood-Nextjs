import {
  Box,
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

function DeliciousFood() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const route = useRouter();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    route.push("/deliciousfood");
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <Box color={"#000000"} mr={4}>
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Typography
          style={{
            display: "flex",
            alignItems: "center",
            color: "#111111",
            fontFamily: "Be Vietnam Pro",
            fontSize: "14px",
          }}
        >
          Món Ngon
          <KeyboardArrowDownIcon />
        </Typography>
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
        style={{
          zIndex: "1",
          boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>Món lẻ</MenuItem>
                  <MenuItem onClick={handleClose}>
                    Món mới: Ngon hơn mỗi ngày
                  </MenuItem>
                  <MenuItem onClick={handleClose}>Món được ưa chuộng</MenuItem>
                  <MenuItem onClick={handleClose}>Các món khai vị</MenuItem>
                  <MenuItem onClick={handleClose}>Các món gỏi</MenuItem>
                  <MenuItem onClick={handleClose}>Các món cá - tôm</MenuItem>
                  <MenuItem onClick={handleClose}>
                    Các món bò - dê - heo
                  </MenuItem>
                  <MenuItem onClick={handleClose}>Các món gà</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
}

export default DeliciousFood;
