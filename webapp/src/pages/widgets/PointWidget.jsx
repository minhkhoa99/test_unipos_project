import { Box, Typography, useTheme } from "@mui/material";
import Friend from "../../components/Friend";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "../../state/index";

function PointWidget() {
    const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
    return (   <WidgetWrapper>
        <Typography
          color={"#333333"}
          variant="h5"
          fontWeight="500"
          sx={{ mb: "1.5rem" }}
        >
          Point của bạn
        </Typography>
        <Box display="flex" flexDirection="column" gap="1.5rem">
        <div className='box-total-point'>
        <div className='point'>
          <div className='week-point'>
            <div>Point tuần</div>
            <div className='number-star'>
              <span>
                <i className='fa-solid fa-star '></i>
              </span>
              2.000
            </div>
          </div>
          <div className='month-point'>
            <div>Point tháng</div>
            <div className='number-star'>
              <span>
                <i className='fa-solid fa-star'></i>
              </span>
              12.000
            </div>
          </div>
        </div>
        </div>
        </Box>
      </WidgetWrapper> );
}

export default PointWidget;