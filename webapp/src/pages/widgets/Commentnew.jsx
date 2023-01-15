import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format, render, cancel, register } from 'timeago.js';


function Commentnew({commentviewnew,iduser}) {

    return ( <>
    <div>
        <div className='other-comments'>
          <div className='other-user'>
            <img
              src={iduser.Avata == null ? "https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg?ver=6" : iduser.Avata}
              alt=''
            />
          </div>
          <div className='comment-text'>
            <div className="viewcomnent-username">{iduser.username}</div>
            <div className="viewcomnent-text">
            {commentviewnew.Content}
            </div>
          </div>
        </div>
        <div>
          <ul className='ul-like-time'>
            <li className='li-like'>
              <button>Thích</button>{" "}
            </li>
            <li>{format(commentviewnew.createdAt)}</li>
          </ul>
        </div>
      </div>
    </> );
}

export default Commentnew;