import { Button, Select, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React, { useState } from "react";
import CopyRight from "../../components/copyright";
import Footer from "../../components/footer";
import Header from "../../components/header";
import styles from "../../styles/Home.module.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { foodData } from "../api/food";

function NewFood() {
  const route = useRouter();
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const food = foodData;
  return (
    <div className={styles.container}>
      <Header />
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto 50px",
          padding: "0 20px",
          // display: "flex",
          // justifyContent: "space-between",
        }}
      >
        <Box mt={2.4} sx={{ display: "flex" }}>
          <Typography
            mr={1}
            sx={{ cursor: "pointer" }}
            onClick={() => route.push("/")}
            color="#CDA922"
          >
            Trang chủ
          </Typography>
          <Typography mr={1}>{">"}</Typography>
          <Typography>Món mới</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
          <Box sx={{ width: "70%" }}>
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
                <Typography variant="h5" ml={1.2}>
                  Món mới
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography mr={1.6} color="#666666">
                  Lọc theo
                </Typography>
                <FormControl sx={{ m: 1, minWidth: 255 }}>
                  <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    style={{ fontSize: "16px" }}
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
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridGap: "24px",
              }}
            >
              {food.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img src={item.image} alt={item.name} />
                  <Typography
                    variant="h5"
                    fontSize={18}
                    fontWeight={500}
                    mt={0.8}
                    mb={0.8}
                    ml={1.2}
                  >
                    {item.name}
                  </Typography>
                  {item.priceS && (
                    <Typography
                      mb={0.6}
                      ml={1.2}
                      fontSize={14}
                      fontWeight={400}
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <img
                        src="/images/SizeS.png"
                        alt=""
                        style={{
                          width: "18px",
                          height: "18px",
                          marginRight: "7px",
                        }}
                      />
                      {item.priceS}
                    </Typography>
                  )}
                  {item.priceM && (
                    <Typography
                      fontSize={14}
                      fontWeight={400}
                      ml={1.2}
                      mb={0.6}
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <img
                        src="/images/SizeM.png"
                        alt=""
                        style={{
                          width: "18px",
                          height: "18px",
                          marginRight: "7px",
                        }}
                      />
                      {item.priceM}
                    </Typography>
                  )}
                  {item.priceL && (
                    <Typography
                      fontSize={14}
                      fontWeight={400}
                      ml={1.2}
                      pb={1.2}
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <img
                        src="/images/SizeL.png"
                        alt=""
                        style={{
                          width: "18px",
                          height: "18px",
                          marginRight: "7px",
                        }}
                      />
                      {item.priceL}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              width: "30%",
              borderRadius: "8px",
              marginLeft: "48px",
              boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box>
              <Box
                sx={{ display: "flex", width: "90%", margin: "24px auto 20px" }}
              >
                <img
                  src="/images/cart.png"
                  alt=""
                  style={{ width: "32px", height: "32px", marginRight: "12px" }}
                />
                <Typography fontSize={24} fontWeight={700}>
                  GIỎ HÀNG
                </Typography>
              </Box>
              {/* line */}
              <Box
                style={{
                  width: "100%",
                  height: "2px",
                  background: "#DEDEDE",
                  margin: "20px auto",
                }}
              ></Box>
              {/* line */}
              {/* product cart */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "90%",
                  margin: "0 auto",
                }}
              >
                <img
                  style={{ width: "76px", height: "50px" }}
                  src="/images/food4.png"
                  alt=""
                />
                <Box ml={1.2}>
                  <Typography
                    fontSize={16}
                    fontWeight={500}
                    color="#111111"
                    mb={1}
                  >
                    Cá chép hấp hồng kong
                  </Typography>
                  <Box style={{ display: "flex" }}>
                    <Box
                      mr={1.2}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <img
                        src="/images/SizeM.png"
                        style={{ width: "18px", height: "18px" }}
                        alt=""
                      />
                      <Typography ml={0.8} fontSize={14} fontWeight={400}>
                        X1
                      </Typography>
                    </Box>
                    <Box style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src="/images/SizeM.png"
                        style={{ width: "18px", height: "18px" }}
                        alt=""
                      />
                      <Typography ml={0.8} fontSize={14} fontWeight={400}>
                        X1
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Typography fontSize={16} fontWeight={700} mb={1}>
                    10.126.000 đ
                  </Typography>
                  <Box style={{ display: "flex", justifyContent: "flex-end" }}>
                    <img
                      src="/images/edit.png"
                      alt=""
                      style={{ width: "20px", height: "20px" }}
                    />
                    <img
                      src="/images/delete.png"
                      alt=""
                      style={{
                        marginLeft: "20px",
                        width: "20px",
                        height: "20px",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
              {/* product */}
              {/* line */}
              <Box
                style={{
                  width: "90%",
                  height: "2px",
                  background: "#DEDEDE",
                  margin: "20px auto",
                }}
              ></Box>
            </Box>
            {/* total */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
                width: "90%",
                margin: "0 auto",
              }}
            >
              <Typography fontSize={16} fontWeight={500}>
                Tổng tiền
              </Typography>
              <Typography fontSize={24} fontWeight={700}>
                13.828.000 đ
              </Typography>
            </Box>
            {/* button */}
            <Button sx={{ width: "100%", margin: "0 auto 24px" }}>
              <Typography
                sx={{
                  backgroundColor: "#CDA922",
                  width: "90%",
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#ffffff",
                  padding: "10px 0",
                  borderRadius: "8px",
                }}
              >
                Đặt hàng
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
      <CopyRight />
    </div>
  );
}

export default NewFood;
