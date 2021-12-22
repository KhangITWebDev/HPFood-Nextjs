import { Box, Typography } from "@mui/material";
import React from "react";

function DetailLeft() {
  return (
    <Box
      sx={{
        width: "60%",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "32px",
        marginTop: "32px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Be Vietnam Pro",
          fontSize: "42px",
          lineHeight: "1.5",
          fontWeight: "700",
          textTransform: "uppercase",
        }}
      >
        Thiết kế tiệc cưới
      </Typography>
      <Typography
        sx={{
          fontFamily: "Be Vietnam Pro",
          fontSize: "16px",
          lineHeight: "1.5",
          fontWeight: "400",
        }}
      >
        Nhà hàng tiệc cưới Hương Phố suốt hơn 14 năm qua đã luôn trở thành một
        trong những nhà hàng tiệc cưới lớn nhất tại quận Gò Vấp nói riêng cũng
        như tại TP.Hồ Chí Minh nói chung. Khách hàng đến với Hương Phố luôn cảm
        thấy thoải mái và an tâm trước sự đa dạng của món ăn, dịch vụ do nhà
        hàng cung cấp và đáp ứng được số lượng khách mời lớn. Theo sau đó là sự
        tận tình, tỉ mỉ của các nhân viên tư vấn luôn luôn sẵn sàng hỗ trợ và
        đưa ra các lời khuyên phù hợp nhất cho khách hàng.
      </Typography>
      <Typography
        sx={{
          fontFamily: "Be Vietnam Pro",
          fontSize: "16px",
          lineHeight: "1.5",
          fontWeight: "400",
          marginBottom: "10px",
          marginTop: "10px",
        }}
      >
        Với 21 sảnh hội nghị và tiệc cưới sang trọng cùng công suất lên tới 1000
        khách mỗi tiệc, nhà hàng tiệc cưới Hương Phố là một lựa chọn xứng tầm
        cho những buổi tiệc cưới đầy dấu ấn trước sự chứng kiến của đông đủ gia
        đình, họ hàng và bè bạn của tất cả các cặp uyên ương.
      </Typography>
      <Typography
        sx={{
          fontFamily: "Be Vietnam Pro",
          fontSize: "16px",
          lineHeight: "1.5",
          fontWeight: "400",
        }}
      >
        Được khách hàng đánh giá là nhà hàng tiệc cưới có món ăn hợp khẩu vị
        nhất, Hương Phố luôn đầu tư và đổi mới chất lượng món ăn, định lượng hợp
        lí. Với hơn 200 món ăn truyền thống và quốc tế, Hương Phố tự tin rằng có
        thể đáp ứng dược mọi nhu cầu ẩm thực của khách hàng. Cùng với đội ngũ
        nhân viên chuyên nghiệp, nhà hàng Hương Phố sẽ đồng hành cùng khách hàng
        để tổ chức những buổi lễ sang trọng và trọn vẹn nhất.
      </Typography>
      <Typography
        sx={{
          fontFamily: "Be Vietnam Pro",
          fontSize: "20px",
          lineHeight: "1.5",
          fontWeight: "700",
          textTransform: "uppercase",
          margin: "12px 0",
        }}
      >
        ƯU ĐIỂM CỦA HP FOOD:
      </Typography>
      <Typography
        sx={{
          fontFamily: "Be Vietnam Pro",
          fontSize: "16px",
          lineHeight: "1.5",
          fontWeight: "400",
        }}
      >
        Nhân viên HP FOOD có thể nhờ sự hỗ trợ của Quý khách khi cần thiết: bếp
        hâm nóng, lò vi sóng (nếu có)
      </Typography>
      <Typography
        sx={{
          fontFamily: "Be Vietnam Pro",
          fontSize: "16px",
          lineHeight: "1.5",
          fontWeight: "400",
          marginTop: "12px",
        }}
      >
        Nhân viên HP FOOD xin phép được từ chối:
      </Typography>
      <Box component="ul" sx={{ listStyleType: "disc" }}>
        <Box component="li" sx={{ marginTop: "12px" }}>
          Uống rượu bia hoặc ăn uống theo lời mời của Quý khách, kể cả hết thời
          gian phục vụ;
        </Box>
        <Box component="li" sx={{ marginTop: "12px" }}>
          Chế biến món ăn khác theo yêu cầu riêng của Quý khách;
        </Box>
        <Box component="li" sx={{ marginTop: "12px" }}>
          Đi mua thêm những việc ngoài đơn hàng Quý khách đã đặt;
        </Box>
        <Box component="li" sx={{ marginTop: "12px" }}>
          Tham gia các hoạt động khác của Quý khách ngoài nhiệm vụ của HP FOOD.
        </Box>
        <Box component="li" sx={{ marginTop: "12px" }}>
          Kết thúc tiệc, xin quý khách vui lòng ký biên bản nghiệm thu, kiểm tra
          mọi vật dụng mà nhân viên HP FOOD mang về, tránh nhầm lẫn.
        </Box>
      </Box>
      <Typography
        sx={{
          marginTop: "24px",
          fontFamily: "Be Vietnam Pro",
          background: "#FBF8ED",
          fontSize: "16px",
          lineHeight: "1.5",
          padding: "16px",
        }}
      >
        Kết thúc tiệc, xin quý khách vui lòng ký biên bản nghiệm thu, kiểm tra
        mọi vật dụng mà nhân viên HP FOOD mang về, tránh nhầm lẫn.
      </Typography>
    </Box>
  );
}

export default DetailLeft;
