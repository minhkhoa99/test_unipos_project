import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = "#333333";
  const main = "#666666";
  const medium = "A3A3A3";

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant='h5' fontWeight='500'>
          Đề xuất
        </Typography>
        <Typography color={medium}>Quảng cáo</Typography>
      </FlexBetween>
      <img
        width='100%'
        height='auto'
        alt='advert'
        src='https://www.gifcen.com/wp-content/uploads/2022/11/goku-gif-14.gif'
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Click ngay</Typography>
        <Typography color={medium}>rikkei.academy.com</Typography>
      </FlexBetween>
      <Typography color={medium} m='0.5rem 0'>
        Trải nghiệm lập trình 6 tháng trở thành lập trình viên chuyên nghiệp với
        kiến thức chuyên sâu, đội ngũ giảng viên kinh nghiệm,môi trường thực
        chiến hiệu Quả mô hình học tập đảo ngược, cam kết việc làm ngay sau khi
        hoàn thành khóa học.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
