import { Box, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import NavbarHomePage from "./navbarhomepage/NavbarHomePage";
// import MyPostWidget from "./widgets/MyPostWidget";
// import PostsWidget from "./widgets/PostsWidget";
import AdvertWidget from "./widgets/AdvertWidget";
import FriendListWidget from "./widgets/FriendListWidget";
import UserWidget from "./widgets/UserWidget";
import PointWidget from "./widgets/PointWidget";
import { Outlet } from "react-router";
import { setUsers } from "../state/index";
import { useEffect } from "react";

function Homepages() {
  const dispatch = useDispatch();
  const getusers = async () => {
    const restuser = await fetch("http://localhost:5000/user", { modo: "cors" })
      // const users = restuser.json()
      .then((res) => res.json())
      .then((result) => {
        // console.log(result.data);
        let arr = result.data;
        dispatch(setUsers({ users: arr }));
      });
  };
  useEffect(() => {
    getusers();
  }, []);

  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const state = useSelector((state) => state.iduser);
  const users = useSelector((state) => state.users);
  // console.log(users);
  // console.log(state);

  return (
    <>
      <Box>
        <NavbarHomePage />
        <Box
          width='100%'
          padding='2rem 6%'
          display={isNonMobileScreens ? "flex" : "block"}
          gap='0.5rem'
          justifyContent='space-between'
        >
          <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
            {/* <UserWidget userId={_id} picturePath={picturePath} /> */}
            <UserWidget />
          </Box>
          <Box
            flexBasis={isNonMobileScreens ? "42%" : undefined}
            mt={isNonMobileScreens ? undefined : "2rem"}
          >
            {/* <MyPostWidget /> */}
            {/* <MyPostWidget picturePath={picturePath} /> */}

            {/* <PostsWidget userId={_id} /> */}
            {/* <PostsWidget /> */}
            <Outlet></Outlet>
          </Box>

          {isNonMobileScreens && (
            <Box flexBasis='26%'>
              <AdvertWidget />
              <Box m='2rem 0' />
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
