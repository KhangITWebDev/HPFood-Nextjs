import React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#AAAAAA",
  border: "1px solid #DEDEDE",
  fontFamily: "Be Vietnam Pro",
  borderRadius: "40px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(0.5, 0.5, 0.5, 0.5),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));

function SearchBar() {
  return (
    <div style={{ display: "flex" }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon style={{ color: "#CDA922" }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Tim kiếm..."
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </div>
  );
}

export default SearchBar;
