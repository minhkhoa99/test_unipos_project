import React, { useState, useEffect } from "react";
// import styled from "styled-components";
import "./css/Contacts.css";

export default function Contacts({ contacts, changeChat, online }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
 console.log(contacts);
  useEffect(
    () => {
      const getData = async () => {
        const data = await JSON.parse(
          localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
        
        );
       

        setCurrentUserName(data);
        // setCurrentUserImage(data.avatarImage);
        console.log(currentUserName);
      };
      getData();
    },[]);
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };

  return (
    <>
      {currentUserImage && currentUserImage && (
        <div className='contact-container'>
          <div className='brand'></div>
          <div className='contacts'>
            
            {contacts.map((contact, index) => {
              return (
                <div
                  key={contact._id}
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  {/* <div className='avatar'>
                    <img
                      src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                      alt=''
                    />
                  </div> */}
                  <div className='username'>
                    <span className='title-name'>
                      <b>{contact.username}</b>
                    </span>
                    <span style={{ color: online ? "" : "#31A24C" }}>
                      {online ? "Offline" : "Online"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
