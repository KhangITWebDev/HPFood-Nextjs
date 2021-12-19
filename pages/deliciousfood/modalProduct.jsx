import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
function ModalProduct({ open, handleClose }) {
  return (
    <div style={{ width: "660px" }}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Typography
          mt={1.6}
          mr={1.6}
          sx={{ marginLeft: "auto", cursor: "pointer" }}
        >
          <CloseIcon
            sx={{ width: "24px", height: "24px" }}
            onClick={handleClose}
          />
        </Typography>
        <DialogTitle id="alert-dialog-title">
          <Typography
            variant="h5"
            textAlign="center"
            color="#111111"
            fontWeight={700}
            fontSize={28}
          >
            Bào ngư sốt dầu hào cải xanh
          </Typography>
        </DialogTitle>
        <DialogContent mr={6} ml={6}>
          <DialogContentText id="alert-dialog-description">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #000",
                padding: "10px 0",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src="/images/SizeS.png" alt="" />
                <Typography ml={1.2}>100.000 đ</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "160px",
                  justifyContent: "space-between",
                  border: "1px solid #DEDEDE",
                  borderRadius: "8px",
                }}
              >
                <RemoveIcon
                  sx={{
                    margin: "8px 0",
                    marginLeft: "8px",
                    border: "1px solid #CDA922",
                    borderRadius: "100%",
                    color: "#CDA922",
                  }}
                />
                <Typography>1</Typography>
                <AddIcon
                  sx={{
                    margin: "8px 0",
                    marginRight: "8px",
                    border: "1px solid #CDA922",
                    borderRadius: "100%",
                    color: "#CDA922",
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #000",
                padding: "10px 0",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src="/images/SizeM.png" alt="" />
                <Typography ml={1.2}>250.000 đ</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "160px",
                  justifyContent: "space-between",
                  border: "1px solid #DEDEDE",
                  borderRadius: "8px",
                }}
              >
                <RemoveIcon
                  sx={{
                    margin: "8px 0",
                    marginLeft: "8px",
                    border: "1px solid #CDA922",
                    borderRadius: "100%",
                    color: "#CDA922",
                  }}
                />
                <Typography>0</Typography>
                <AddIcon
                  sx={{
                    margin: "8px 0",
                    marginRight: "8px",
                    border: "1px solid #CDA922",
                    borderRadius: "100%",
                    color: "#CDA922",
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #000",
                padding: "10px 0",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src="/images/SizeL.png" alt="" />
                <Typography ml={1.2}>500.000 đ</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "160px",
                  justifyContent: "space-between",
                  border: "1px solid #DEDEDE",
                  borderRadius: "8px",
                }}
              >
                <RemoveIcon
                  sx={{
                    margin: "8px 0",
                    marginLeft: "8px",
                    border: "1px solid #CDA922",
                    borderRadius: "100%",
                    color: "#CDA922",
                  }}
                />
                <Typography>0</Typography>
                <AddIcon
                  sx={{
                    margin: "8px 0",
                    marginRight: "8px",
                    border: "1px solid #CDA922",
                    borderRadius: "100%",
                    color: "#CDA922",
                  }}
                />
              </Box>
            </Box>
          </DialogContentText>
        </DialogContent>
        <Box
          mt={1}
          mb={4}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={handleClose}
            sx={{
              border: "1px solid #D02828",
              fontFamily: "Be Vietnam Pro",
              marginRight: "24px",
              color: "#D02828",
              width: "150px",
            }}
          >
            XÓA GIỎ HÀNG
          </Button>
          <Button
            onClick={handleClose}
            sx={{
              backgroundColor: "#CDA922",
              fontFamily: "Be Vietnam Pro",
              color: "#ffffff",
              width: "150px",
            }}
          >
            LƯU VÀO GIỎ
          </Button>
        </Box>
      </Dialog>
    </div>
  );
}

export default ModalProduct;
