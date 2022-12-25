
import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";

import NavbarHomePage from "./navbarhomepage/NavbarHomePage"
import SubHeader from "../components/SubHeader";
import MyPostWidget from "./widgets/MyPostWidget";
import PostsWidget from "./widgets/PostsWidget";
import AdvertWidget from "./widgets/AdvertWidget";
import FriendListWidget from "./widgets/FriendListWidget";
import UserWidget from "./widgets/UserWidget";



function Homepages() {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  // const { _id, picturePath } = useSelector((state) => state.user);
 

  return (
    <>
       <Box>
      <NavbarHomePage />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          {/* <UserWidget userId={_id} picturePath={picturePath} /> */}
       <UserWidget/>
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget />
          {/* <MyPostWidget picturePath={picturePath} /> */}

          {/* <PostsWidget userId={_id} /> */}
          <PostsWidget />

        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <AdvertWidget />
            <Box m="2rem 0" />
            <FriendListWidget />
            {/* <FriendListWidget userId={_id} /> */}

          </Box>
        )}
      </Box>
    </Box>
    </>
  );
}

export default Homepages;
