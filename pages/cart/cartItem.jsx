import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React from "react";
import { useRouter } from "next/router";

function createData(image, name, price, quantity) {
  return { image, name, price, quantity };
}

const rows = [
  createData("/images/food1.png", "Cá chép hấp hồng kong", "10.126.000 đ", "2"),
  createData("/images/food1.png", "Cá chép hấp hồng kong", "10.126.000 đ", "2"),
  createData("/images/food1.png", "Cá chép hấp hồng kong", "10.126.000 đ", "2"),
];

function CartItem() {
  const route = useRouter();
  return (
    <Box sx={{ width: "100%", margin: "0 auto 80px" }}>
      <TableContainer component={Box}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                background: "rgba(205, 169, 34, 0.06)",
                borderBottom: "2px solid #CDA922",
              }}
            >
              <TableCell
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  fontFamily: "Be Vietnam Pro",
                }}
              >
                Sản phẩm
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  fontFamily: "Be Vietnam Pro",
                }}
              >
                Giá đơn vị
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
                Tổng
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ background: "#ffffff" }}>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={row.image}
                      alt=""
                      style={{
                        width: "86px",
                        height: "57px",
                        borderRadius: "4px",
                        marginRight: "16px",
                      }}
                    />
                    <Typography
                      sx={{
                        fontFamily: "Be Vietnam Pro",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      {row.name}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img src="/images/SizeS.png" alt="" />
                    <Typography
                      sx={{
                        fontFamily: "Be Vietnam Pro",
                        fontSize: "16px",
                        fontWeight: "700",
                      }}
                      ml={1}
                    >
                      {row.price}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ fontFamily: "Be Vietnam Pro" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      border: "1px solid #DEDEDE",
                      borderRadius: "8px",
                      padding: "8px",
                    }}
                  >
                    <RemoveIcon
                      sx={{
                        borderRadius: "50%",
                        border: "1px solid #CDA922",
                        color: "#CDA922",
                      }}
                    />
                    <Typography
                      sx={{ fontFamily: "Be Vietnam Pro" }}
                      ml={4}
                      mr={4}
                    >
                      {row.quantity}
                    </Typography>
                    <AddIcon
                      sx={{
                        borderRadius: "50%",
                        border: "1px solid #CDA922",
                        color: "#CDA922",
                      }}
                    />
                  </Box>
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Be Vietnam Pro",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                >
                  20.126.000 đ
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      sx={{
                        border: "1px solid #CDA922",
                        width: "50%",
                        marginRight: "12px",
                      }}
                    >
                      <BorderColorOutlinedIcon
                        sx={{
                          color: "#111111",
                        }}
                      />
                    </Button>
                    <Button
                      sx={{
                        border: "1px solid #CDA922",
                        width: "50%",
                        marginLeft: "12px",
                      }}
                    >
                      <DeleteOutlineIcon sx={{ color: "#111111" }} />
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
            <TableRow sx={{ background: " rgba(205, 169, 34, 0.06)" }}>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell
                sx={{
                  fontFamily: "Be Vietnam Pro",
                  textAlign: "right",
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "1.5",
                }}
              >
                Tổng đơn
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Be Vietnam Pro",
                  fontSize: "24px",
                  fontWeight: "700",
                  lineHeight: "1.5",
                }}
              >
                13.828.000 đ
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "20px",
        }}
      >
        <Button
          sx={{
            width: "383px",
            background: "#CDA922",
            padding: "10px",
            color: "#FFFFFF",
          }}
          onClick={() => route.push("/cartCheckout")}
        >
          ĐẶT HÀNG
        </Button>
      </Box>
    </Box>
  );
}

export default CartItem;
