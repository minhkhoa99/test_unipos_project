import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import styled from "styled-components";
import { allUsersRoute, host } from "../utils/APIRoutes";
import ChatContainer from "../components/ChatContainer";
import Contacts from "../components/Contacts";
// import Welcome from "../components/Welcome";
import "./chatcss/Chat.css";

export default function Chat() {
  const navigate = useNavigate();
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
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
    console.log(currentUser);
  }, [currentUser]);
  useEffect(() => {
    const getData = async () => {
      if (currentUser) {
        const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
        setContacts(data.data.dataMongo);
      }
      getData();
    };
  }, [currentUser]);
  console.log(currentUser);
  const handleChatChange = (chat) => {
    if (currentChat === chat) {
      setCurrentChat(undefined);
    } else {
      setCurrentChat(chat);
    }
  };

  const handleClick = () => {
    setCurrentChat(undefined);
  };
  return (
    <>
      <div className="container">
        {currentChat === undefined ? (
          ""
        ) : (
          <ChatContainer
            currentChat={currentChat}
            socket={socket}
            handleClick={handleClick}
          />
        )}
        {/* <Contacts contacts={contacts} changeChat={handleChatChange} /> */}
      </div>
    </>
  );
}
