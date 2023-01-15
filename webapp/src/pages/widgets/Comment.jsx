import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format, render, cancel, register } from 'timeago.js';


function Comment({comment}) {
    const {commentview,user} = comment
    // console.log(commentview);
    // console.log(user);
    return ( <>
    <div>
        <div className='other-comments'>
          <div className='other-user'>
            <img
              src={user.Avata == null ? "https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg?ver=6" : user.Avata}
              alt=''
            />
          </div>
          <div className='comment-text'>
            <div className="viewcomnent-username">{user.username}</div>
            <div className="viewcomnent-text">
            {commentview.Content}
            </div>
          </div>
        </div>
        <div>
          <ul className='ul-like-time'>
            <li className='li-like'>
              <button>Thích</button>{" "}
            </li>
            <li>{format(commentview.createdAt)}</li>
          </ul>
        </div>
      </div>
    </> );
}

export default Comment;