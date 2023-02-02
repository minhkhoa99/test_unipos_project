import { Box, Typography, useTheme } from "@mui/material";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "../../state/index";
import Contacts from "../../components/Contacts";
import { allUsersRoute, host } from "../../utils/APIRoutes";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import axios from "axios";
import Chat from "../Chat";
import ChatContainer from "./../../components/ChatContainer";



const FriendListWidget = ({ userId }) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  const [friend, setFriends] = useState([]);

  const navigate = useNavigate();
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined); // eslint-disable-line react-hooks/exhaustive-deps
  // console.log(friend);
  useEffect(() => {
    const getItem = async () => {
      if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
        // navigate("/login");
        setCurrentUser(
          await JSON.parse(
            localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
          )
        );
      }
    };
    getItem();
  }, []);
  useEffect(() => {
    const getSocket = () => {
      if (currentUser) {
        socket.current = io(host);
        socket.current.emit("add-user", currentUser._id);
      }
    };
    getSocket();
    // console.log(currentUser);
  }, [currentUser]);
  // console.log(currentUser.id);
  useEffect(() => {
    const getData = async () => {
      if (currentUser) {
        const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);

        setContacts(data.data.dataMongo);
      }
    };
    getData();
  }, [currentUser]);
  // console.log(contacts);
  const handleChatChange = (chat) => {
    if (currentChat === chat) {
      setCurrentChat(undefined);
    } else {
      setCurrentChat(chat);
    }
  };
  console.log(currentChat);
  const handleClick = () => {
    setCurrentChat(undefined);
  };
  return (
<<<<<<< HEAD
    <WidgetWrapper >
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
    </WidgetWrapper>
=======
    <div className="total-chat"
    display="flex"
    >
      <WidgetWrapper>
        <Typography
          color={"#333333"}
          variant="h5"
          fontWeight="500"
          sx={{ mb: "1.5rem" }}
        >
          Friend List
          <div className="container">
            <Contacts contacts={contacts} changeChat={handleChatChange} />
          </div>
        </Typography>
        <Box display="flex" flexDirection="column" gap="1.5rem"></Box>

        {/* <Chat /> */}
      </WidgetWrapper>
      {currentChat === undefined ? (
        ""
      ) : (
        <ChatContainer
          currentChat={currentChat}
          socket={socket}
          handleClick={handleClick}
        />
      )}
    </div>
>>>>>>> master
  );
};

export default FriendListWidget;
