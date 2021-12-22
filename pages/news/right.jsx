import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import BreadCurmb from "./breadcurmb";

function Right(props) {
  const route = useRouter();
  return (
    <Box sx={{ width: "80%" }}>
      <BreadCurmb />
      <Typography
        sx={{
          fontFamily: "Be Vietnam Pro",
          fontSize: "42px",
          fontWeight: "700",
          lineHeight: 1.5,
          textTransform: "uppercase",
        }}
      >
        Tin Ẩm thực
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Box
          mt={3.2}
          sx={{ width: "50%", cursor: "pointer" }}
          onClick={() => route.push("/newsDetail")}
        >
          <img src="/images/news1.png" alt="" />
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "700",
              lineHeight: "1.5",
              width: "90%",
              marginTop: "12px",
            }}
          >
            Donec porta id enim purus lorem consequat aliquet.
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "1.5",
              width: "90%",
              marginTop: "12px",
            }}
          >
            Ac in convallis a pharetra ultrices vestibulum. Ullamcorper augue
            aliquam, ullamcorper eget.
          </Typography>
        </Box>
        <Box
          mt={3.2}
          sx={{ width: "50%", cursor: "pointer" }}
          onClick={() => route.push("/newsDetail")}
        >
          <img src="/images/news1.png" alt="" />
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "700",
              lineHeight: "1.5",
              width: "90%",
              marginTop: "12px",
            }}
          >
            Donec porta id enim purus lorem consequat aliquet.
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "1.5",
              width: "90%",
              marginTop: "12px",
            }}
          >
            Ac in convallis a pharetra ultrices vestibulum. Ullamcorper augue
            aliquam, ullamcorper eget.
          </Typography>
        </Box>
        <Box
          mt={3.2}
          sx={{ width: "50%", cursor: "pointer" }}
          onClick={() => route.push("/newsDetail")}
        >
          <img src="/images/news1.png" alt="" />
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "700",
              lineHeight: "1.5",
              width: "90%",
              marginTop: "12px",
            }}
          >
            Donec porta id enim purus lorem consequat aliquet.
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "1.5",
              width: "90%",
              marginTop: "12px",
            }}
          >
            Ac in convallis a pharetra ultrices vestibulum. Ullamcorper augue
            aliquam, ullamcorper eget.
          </Typography>
        </Box>
        <Box
          mt={3.2}
          sx={{ width: "50%", cursor: "pointer" }}
          onClick={() => route.push("/newsDetail")}
        >
          <img src="/images/news1.png" alt="" />
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "700",
              lineHeight: "1.5",
              width: "90%",
              marginTop: "12px",
            }}
          >
            Donec porta id enim purus lorem consequat aliquet.
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "1.5",
              width: "90%",
              marginTop: "12px",
            }}
          >
            Ac in convallis a pharetra ultrices vestibulum. Ullamcorper augue
            aliquam, ullamcorper eget.
          </Typography>
        </Box>
        <Box
          mt={3.2}
          sx={{ width: "50%", cursor: "pointer" }}
          onClick={() => route.push("/newsDetail")}
        >
          <img src="/images/news1.png" alt="" />
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "700",
              lineHeight: "1.5",
              width: "90%",
              marginTop: "12px",
            }}
          >
            Donec porta id enim purus lorem consequat aliquet.
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "1.5",
              width: "90%",
              marginTop: "12px",
            }}
          >
            Ac in convallis a pharetra ultrices vestibulum. Ullamcorper augue
            aliquam, ullamcorper eget.
          </Typography>
        </Box>
        <Box
          mt={3.2}
          sx={{ width: "50%", cursor: "pointer" }}
          onClick={() => route.push("/newsDetail")}
        >
          <img src="/images/news1.png" alt="" />
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "700",
              lineHeight: "1.5",
              width: "90%",
              marginTop: "12px",
            }}
          >
            Donec porta id enim purus lorem consequat aliquet.
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "1.5",
              width: "90%",
              marginTop: "12px",
            }}
          >
            Ac in convallis a pharetra ultrices vestibulum. Ullamcorper augue
            aliquam, ullamcorper eget.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Right;
