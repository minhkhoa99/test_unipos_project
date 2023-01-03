import { Box, useMediaQuery } from "@mui/material";
import FriendListWidget from "../widgets/FriendListWidget";
import MyPostWidget from "../widgets/MyPostWidget";
import PostsWidget from "../widgets/PostsWidget";

function MyProfile() {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  return (
    <>
      <Box
        flexBasis={isNonMobileScreens ? "42%" : undefined}
        mt={isNonMobileScreens ? undefined : "2rem"}
      >
        {/* <MyPostWidget picturePath={user.picturePath} /> */}
        <MyPostWidget />

        <Box m='2rem 0' />
        {/* <PostsWidget userId={userId} isProfile /> */}
        <PostsWidget />
      </Box>
      <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
        {/* <UserWidget userId={userId} picturePath={user.picturePath} /> */}

        {/* <FriendListWidget userId={userId} /> */}
        <FriendListWidget />
      </Box>
    </>
  );
}

export default MyProfile;
