import { Box, Button, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Line from "./line";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function FoodDetailTop() {
  return (
    <Box mt={3.2} sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ width: "50%" }}>
        <Box>
          <img src="/images/detail1.png" alt="" />
        </Box>
        <Box sx={{ display: "flex" }} mt={1.6}>
          <img
            src="/images/detail1.png"
            alt=""
            style={{
              width: "98px",
              height: "65px",
              borderRadius: "8px",
              marginRight: "12px",
            }}
          />
          <img
            src="/images/detail2.png"
            alt=""
            style={{
              width: "98px",
              height: "65px",
              borderRadius: "8px",
              marginRight: "12px",
            }}
          />
          <img
            src="/images/detail2.png"
            alt=""
            style={{
              width: "98px",
              height: "65px",
              borderRadius: "8px",
              marginRight: "12px",
            }}
          />
        </Box>
      </Box>
      <Box sx={{ width: "50%" }}>
        <Typography variant="h4" fontSize={28} fontWeight={700} mb={1}>
          Bào ngư sốt dầu hào cải xanh
        </Typography>
        <Typography fontSize={14} fontWeight={400} lineHeight={1.5} mb={4}>
          Món bào ngư sốt dầu hào với thịt bào ngư Hàn Quốc mềm mềm dai giòn vị
          ngọt chế biến cùng sốt dầu hào đậm đà hương vị kiểu Trung Hoa, hương
          thơm quyến rũ
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img
              src="/images/SizeS.png"
              alt=""
              style={{ width: "24px", height: "24px" }}
            />
            <Typography ml={1.2} fontSize={20}>
              100.000 đ
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              border: "1px solid #CDA922",
              borderRadius: "8px",
            }}
            pt={0.8}
            pb={0.8}
            pr={0.8}
            pl={0.8}
          >
            <RemoveIcon
              sx={{
                borderRadius: "50%",
                border: "1px solid #CDA922",
                color: "#CDA922",
              }}
            />
            <Typography ml={4} mr={4}>
              1
            </Typography>
            <AddIcon
              sx={{
                borderRadius: "50%",
                border: "1px solid #CDA922",
                color: "#CDA922",
              }}
            />
          </Box>
        </Box>
        <Line />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img
              src="/images/SizeM.png"
              alt=""
              style={{ width: "24px", height: "24px" }}
            />
            <Typography ml={1.2} fontSize={20}>
              250.000 đ
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              border: "1px solid #CDA922",
              borderRadius: "8px",
            }}
            pt={0.8}
            pb={0.8}
            pr={0.8}
            pl={0.8}
          >
            <RemoveIcon
              sx={{
                borderRadius: "50%",
                border: "1px solid #CDA922",
                color: "#CDA922",
              }}
            />
            <Typography ml={4} mr={4}>
              1
            </Typography>
            <AddIcon
              sx={{
                borderRadius: "50%",
                border: "1px solid #CDA922",
                color: "#CDA922",
              }}
            />
          </Box>
        </Box>
        <Line />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img
              src="/images/SizeL.png"
              alt=""
              style={{ width: "24px", height: "24px" }}
            />
            <Typography ml={1.2} fontSize={20}>
              500.000 đ
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              border: "1px solid #CDA922",
              borderRadius: "8px",
            }}
            pt={0.8}
            pb={0.8}
            pr={0.8}
            pl={0.8}
          >
            <RemoveIcon
              sx={{
                borderRadius: "50%",
                border: "1px solid #CDA922",
                color: "#CDA922",
              }}
            />
            <Typography ml={4} mr={4}>
              1
            </Typography>
            <AddIcon
              sx={{
                borderRadius: "50%",
                border: "1px solid #CDA922",
                color: "#CDA922",
              }}
            />
          </Box>
        </Box>
        <Line />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "32px",
          }}
        >
          <Typography>Giá chưa bao gồm 10% VAT</Typography>
          <Button
            sx={{
              background: "#CDA922",
              color: "#ffffff",
              fontFamily: "Be Vietnam Pro",
              fontSize: "14px",
              width: "50%",
              "&:hover": {
                color: "#CDA922",
                background: "transparent",
                border: "1px solid",
              },
            }}
          >
            <ShoppingCartOutlinedIcon />
            <Typography mt={1.2} mb={1.2} ml={1.2}>
              Thêm vào giỏ
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default FoodDetailTop;
