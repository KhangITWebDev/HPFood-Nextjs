import { Box, Typography } from "@mui/material";
import React from "react";

function DescriptionFood(props) {
  return (
    <Box sx={{ width: "80%", margin: "0 auto" }}>
      <Typography mt={2.4} mb={2.4} sx={{ fontFamily: "Be Vietnam Pro" }}>
        Bào ngư Hàn Quốc là món hải sản cao cấp, ngon và bổ dưỡng, chế biến
        không khó, nhưng phải có gia vị phù hợp đi kèm thì mới dậy mùi và ngon
        hơn. Bào ngư sốt dầu hào là món ăn có tính bổ âm, tăng khí, bổ thận,
        tăng cường sinh lực cho nam giới và chống suy nhược cơ thể.
      </Typography>
      <img src="/images/detail1.png" alt="" style={{ width: "100%" }} />
      <Typography mt={2.4} mb={2.4} sx={{ fontFamily: "Be Vietnam Pro" }}>
        Bào ngư Hàn Quốc là món hải sản cao cấp, ngon và bổ dưỡng, chế biến
        không khó, nhưng phải có gia vị phù hợp đi kèm thì mới dậy mùi và ngon
        hơn. Bào ngư sốt dầu hào là món ăn có tính bổ âm, tăng khí, bổ thận,
        tăng cường sinh lực cho nam giới và chống suy nhược cơ thể.
      </Typography>
      <img src="/images/detail1.png" alt="" style={{ width: "100%" }} />
    </Box>
  );
}

export default DescriptionFood;
