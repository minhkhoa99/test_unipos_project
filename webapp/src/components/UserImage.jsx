import { Box } from "@mui/material";

const UserImage = ({ image, size = "50px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={image!=null ? image : "https://cdn-icons-png.flaticon.com/512/1946/1946429.png"}
      />
    </Box>
  );
};

export default UserImage;
