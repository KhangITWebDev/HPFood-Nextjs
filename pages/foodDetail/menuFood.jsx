import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function createData(name, quantity, unit, desc) {
  return { name, quantity, unit, desc };
}

const rows = [
  createData(
    "Thịt bào ngư",
    100,
    "gr",
    "Egestas donec venenatis lacus, aliquam id semper augue"
  ),
  createData(
    "Cải xanh",
    50,
    "gr",
    "Sed est scelerisque auctor ultrices mauris eu eu"
  ),
  createData(
    "Dầu hào",
    5,
    "gr",
    "Lacus elit lectus nullam at cum magna pretium"
  ),
];

function MenuFood() {
  return (
    <Box sx={{ width: "80%", margin: "0 auto" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "24px",
          marginBottom: "20px",
        }}
      >
        <Typography
          variant="h5"
          mr={0.8}
          color="#333333"
          fontSize={20}
          fontWeight={700}
          sx={{ fontFamily: "Be Vietnam Pro" }}
        >
          Size
        </Typography>
        <img src="/images/SizeS.png" alt="" />
      </Box>
      <TableContainer component={Box}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                background: "rgba(205, 169, 34, 0.06)",
              }}
            >
              <TableCell
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  fontFamily: "Be Vietnam Pro",
                }}
              >
                Tên nguyên liệu
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  fontFamily: "Be Vietnam Pro",
                }}
              >
                Số lượng
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  fontFamily: "Be Vietnam Pro",
                }}
              >
                Đơn vị
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  width: "50%",
                  fontFamily: "Be Vietnam Pro",
                }}
              >
                Mô tả
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ fontFamily: "Be Vietnam Pro" }}>
                  {row.name}
                </TableCell>
                <TableCell sx={{ fontFamily: "Be Vietnam Pro" }}>
                  {row.quantity}
                </TableCell>
                <TableCell sx={{ fontFamily: "Be Vietnam Pro" }}>
                  {row.unit}
                </TableCell>
                <TableCell sx={{ fontFamily: "Be Vietnam Pro" }}>
                  {row.desc}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "24px",
          marginBottom: "20px",
        }}
      >
        <Typography
          variant="h5"
          mr={0.8}
          color="#333333"
          fontSize={20}
          fontWeight={700}
          sx={{ fontFamily: "Be Vietnam Pro" }}
        >
          Size
        </Typography>
        <img src="/images/SizeM.png" alt="" />
      </Box>
      <TableContainer component={Box}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                background: "rgba(205, 169, 34, 0.06)",
              }}
            >
              <TableCell
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  fontFamily: "Be Vietnam Pro",
                }}
              >
                Tên nguyên liệu
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  fontFamily: "Be Vietnam Pro",
                }}
              >
                Số lượng
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  fontFamily: "Be Vietnam Pro",
                }}
              >
                Đơn vị
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  width: "50%",
                  fontFamily: "Be Vietnam Pro",
                }}
              >
                Mô tả
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ fontFamily: "Be Vietnam Pro" }}>
                  {row.name}
                </TableCell>
                <TableCell sx={{ fontFamily: "Be Vietnam Pro" }}>
                  {row.quantity}
                </TableCell>
                <TableCell sx={{ fontFamily: "Be Vietnam Pro" }}>
                  {row.unit}
                </TableCell>
                <TableCell sx={{ fontFamily: "Be Vietnam Pro" }}>
                  {row.desc}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default MenuFood;
