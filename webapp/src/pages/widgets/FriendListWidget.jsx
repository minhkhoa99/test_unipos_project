import { Box, Typography, useTheme } from "@mui/material";
import Friend from "../../components/Friend";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "../../state/index";
import Contacts from "../../components/Contacts";
import axios from "axios";
import Chat from "../Chat";
import ChatContainer from './../../components/ChatContainer';

const FriendListWidget = ({ userId }) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
 const [friend,setFriends]=useState([])

  const getFriends = async () => {
   const result = await axios.get(`http://localhost:5000/user`)
   setFriends(result.data.dataMongo)
    console.log(result.data.dataMongo);
  };

  useEffect(() => {
    getFriends();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <WidgetWrapper>
      <Typography
        color={"#333333"}
        variant='h5'
        fontWeight='500'
        sx={{ mb: "1.5rem" }}
      >
        Friend List
      </Typography>
      <Box display='flex' flexDirection='column' gap='1.5rem'>
        {/* {friends.map((friend) => (
          <Friend
            key={friend._id}
            friendId={friend._id}
            name={`${friend.firstName} ${friend.lastName}`}
            subtitle={friend.occupation}
            userPicturePath={friend.picturePath}
          />
        ))} */}
      </Box>
      <Contacts friend ={friend}/>
      {/* <Chat/> */}
    </WidgetWrapper>
  );
};

export default FriendListWidget;
