import { Box } from "@mui/material";
import { useSelector } from "react-redux";

const UserImage = ({ image, size = "50px" }) => {
  const state = useSelector((state) => state.iduser);
  const avata = state.Avata
  console.log(state.Avata);
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={avata!=null ? avata : "https://cdn-icons-png.flaticon.com/512/1946/1946429.png"}
      />
    </Box>
  );
};

export default UserImage;
