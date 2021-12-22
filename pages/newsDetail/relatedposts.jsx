import { Box, Typography } from "@mui/material";
import React from "react";

function RelatedPosts(props) {
  return (
    <Box sx={{ maxWidth: "1220px", margin: "0 auto 64px", padding: "0 20px" }}>
      <Typography
        sx={{
          fontFamily: "Be Vietnam Pro",
          fontSize: "28px",
          fontWeight: "700",
          lineHeight: "1.5",
          textAlign: "center",
        }}
      >
        Bài viết liên quan
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "32px",
        }}
      >
        <Box sx={{ width: "calc(33.33% - 24px)" }}>
          <img
            src="/images/detailnews.png"
            alt=""
            style={{ borderRadius: "8px" }}
          />
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Be Vietnam Pro",
              fontSize: "18px",
              fontWeight: 700,
              lineHeight: 1.5,
              marginTop: "12px",
            }}
          >
            Nulla nunc urna non neque, dictum fermentum erat neque
          </Typography>
          <Typography
            sx={{
              fontFamily: "Be Vietnam Pro",
              fontSize: "14px",
              lineHeight: 1.5,
              marginTop: "12px",
            }}
          >
            Ac in convallis a pharetra ultrices vestibulum. Ullamcorper augue
            aliquam, ullamcorper eget.
          </Typography>
        </Box>
        <Box sx={{ width: "calc(33.33% - 24px)" }}>
          <img
            src="/images/detailnews.png"
            alt=""
            style={{ borderRadius: "8px" }}
          />
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Be Vietnam Pro",
              fontSize: "18px",
              fontWeight: 700,
              lineHeight: 1.5,
              marginTop: "12px",
            }}
          >
            Nulla nunc urna non neque, dictum fermentum erat neque
          </Typography>
          <Typography
            sx={{
              fontFamily: "Be Vietnam Pro",
              fontSize: "14px",
              lineHeight: 1.5,
              marginTop: "12px",
            }}
          >
            Ac in convallis a pharetra ultrices vestibulum. Ullamcorper augue
            aliquam, ullamcorper eget.
          </Typography>
        </Box>
        <Box sx={{ width: "calc(33.33% - 24px)" }}>
          <img
            src="/images/detailnews.png"
            alt=""
            style={{ borderRadius: "8px" }}
          />
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Be Vietnam Pro",
              fontSize: "18px",
              fontWeight: 700,
              lineHeight: 1.5,
              marginTop: "12px",
            }}
          >
            Nulla nunc urna non neque, dictum fermentum erat neque
          </Typography>
          <Typography
            sx={{
              fontFamily: "Be Vietnam Pro",
              fontSize: "14px",
              lineHeight: 1.5,
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

export default RelatedPosts;
