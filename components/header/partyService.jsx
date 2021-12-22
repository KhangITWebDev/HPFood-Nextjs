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

function PartyService() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const route = useRouter();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const moveToService = (event) => {
    route.push("/service");
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const moveToPartyService = (event) => {
    route.push("/partyservice");
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
          DỊCH VỤ TIỆC
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
                  <MenuItem onClick={moveToService}>Dịch vụ tiệc</MenuItem>
                  <MenuItem onClick={moveToPartyService}>
                    Thiết kế tiệc cưới
                  </MenuItem>
                  <MenuItem onClick={moveToService}>Các món gà</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
}

export default PartyService;
