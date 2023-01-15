import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import { format, render, cancel, register } from 'timeago.js';
import FlexBetween from "../../components/FlexBetween";
import Friend from "../../components/Friend";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "state";

import { useEffect } from "react";
import { setNewpost,} from "../../state/index";
import Comment from "./Comment";
import Commentnew from "./Commentnew";
import { async } from "@firebase/util";


const PostWidget = ({postview,}) => {
  const dispatch = useDispatch();
  // const newpost = useSelector((state) => state.newpost)
  const iduser = useSelector((state) => state.iduser)
  const { id, username } = useSelector((state) => state.iduser);
  const users = useSelector((state) => state.users);
  const {blog, arrUsers, likes, dislikes, command} = postview
  const [commentviewnew,setCommentviewnew] = useState()
  const [isCommentviewnew, setIscommentviewnew] = useState(true)
  const [like, setLike] = useState(false)
  const [dislike, setDislike] = useState(false)
  const [commentinput, setCommentinput] = useState("")
 
     
  // const { palette } = useTheme();
  // const main = palette.neutral.main;
  // const primary = palette.primary.main;
  // setPostview(postviews)
  // console.log(postview);
  // console.log(interactive);
  // console.log(likes);
  // console.log(iduser);
  // console.log(id);
  // console.log(command);
  // console.log(users);
  // console.log(commentinput);
  const handleLikeOnclick = async (e) => {
    let blogid = e.target.parentElement.classList[0]
    const formData = {};
    formData.usernameLikes = username
    formData.userId = id;
    formData.blogId = blogid
    if(!like){
      if(blogid){
        const response = await fetch(`http://127.0.0.1:5000/interactive`, {
          mode: "cors",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const likeposts = await response.json();
        let likepost = likeposts.data
        console.log(likepost);
        setLike(!like);
      }
    }
  }
  const handleDislikeOnclick = async (e) => {
    let blogid = e.target.parentElement.classList[0]
    // console.log(blogid);
    const formData = {};
    formData.usernameDislikes = username
    formData.userId = id;
    formData.blogId = blogid
    if(!dislike){
      if(blogid){
        const response = await fetch(`http://127.0.0.1:5000/interactive`, {
          mode: "cors",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const dislikeposts = await response.json();
        let dislikepost = dislikeposts.data
        console.log(dislikepost);
        setDislike(!dislike);
      }
    }
  }

  const handleChange = (e) => {
    let value = e.target.value;
    setCommentinput(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(isCommentviewnew) {
      // console.log("aaaa");
      let blogid = e.target.classList[0]
      let formData ={}
      formData.Content = commentinput
      formData.userId = id;
      formData.blogId = blogid
      const response = await fetch(`http://127.0.0.1:5000/comment`, {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const piostComments = await response.json();
      let piostComment = piostComments.data
      console.log(piostComment);
      setCommentviewnew(piostComment)
      setCommentinput("")
      setIscommentviewnew(false)
    }

  }


  const liked = likes.find((e)=>e.usernameLikes==iduser.username)
  const disliked = dislikes.find((e)=>e.usernameDislikes==iduser.username)
  // console.log(dislikes);
  // console.log(disliked);
  // console.log(format(blog.createdAt));
  
  useEffect(() => {
    dispatch(setNewpost([]));
  },[]);
  return (<>
 {/* in post từ bảng */}
    <div id = {blog.id} className='home-post'>
      <div className='post-header'>
        <div className='post-header-right'>
          <div id = {arrUsers.id} className='user-post'>
            <img
              src={arrUsers.Avata == null ? "https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg?ver=6" : arrUsers.Avata}
              alt=''
            />
          </div>
          <div className='name-user-post'>
            <div>{arrUsers.username}</div>
            <div className="blog-time">
              <i className='fa-solid fa-earth-americas icon-public'></i>
              <h6>{format(blog.createdAt)}</h6>
            </div>
          </div>
        </div>
        <div className='option-post'>
          <button className='btn-option'>...</button>
        </div>
      </div>
      <div className='post-content'>
        {blog.Content}
      </div>
      {blog.ImgVideo== null ?   ""   :
           <div className='post-picture'>
           <img
             src={blog.ImgVideo}
             alt=''
           />
          </div>
        }
      <br />
      <div className='post-reaction'>
        <div className='number-like'>
          <div className="like">
            <div>
              <i className='fa-regular fa-thumbs-up'></i>
            </div>
            {liked == undefined ? "" : <h6> {liked.length >= 1 ? "Bạn" : ""} {liked.length >= 2 ? `, ${liked[1].usernameLikes}` : ""} {liked.length >= 3 ? `, ${liked[2].usernameLikes}` : ""} {liked.length >= 4 ? `và ${liked.length-3} người khác` : ""}</h6>}
          </div>
          <div className="dislike">
            <div>
              <i className='fa-regular fa-thumbs-down'></i>
            </div>
            {disliked == undefined ? "" : <h6> {disliked.length >= 1 ? "Bạn" : ""} {disliked.length >= 2 ? `, ${disliked[1].usernamedisliked}` : ""} {disliked.length >= 3 ? `, ${disliked[2].usernamedisliked}` : ""} {disliked.length >= 4 ? `và ${disliked.length-3} người khác` : ""}</h6>}
          </div>
        </div>
        <div className='number-user'>
          <div className='number-comment'>23 bình luận</div>
        </div>
      </div>
      <div className={`${blog.id} post-buttons`}>
        <button onClick={handleLikeOnclick}>
          <i className={`fa-regular fa-thumbs-up  ${like || liked ? 'likecoler' : ''}`}></i> Yêu thích
        </button>
        <button onClick={handleDislikeOnclick}>
          <i className={`fa-regular fa-thumbs-down ${dislike || disliked ? 'likecoler' : ''}`}></i> Không thích
        </button>
        <button>
          <i className='fa-regular fa-comments'></i> Bình luận
        </button>
      </div>
      <div className='post-comment'>
        <div className='my-user'>
          <img
            src={iduser.Avata == null ? "https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg?ver=6" : iduser.Avata}
            alt=''
          />
        </div>
        <div className='main-form-comment'>
          <form action='' onSubmit={handleSubmit} className={blog.id}>
            <input
              className='comment-input'
              type='text'
              placeholder='Viết bình luận của bạn...'
              onChange={handleChange}
              value={commentinput}
            />
          </form>
        </div>
      </div>
      {!commentviewnew ? "" : <Commentnew commentviewnew = {commentviewnew} iduser = {iduser}></Commentnew>}
      {command.map((e,i)=>{
        let user = users.find((e1)=>{
          return e1.id == e.userId
        })
        let comment = {commentview:e,user:user}
        return <>
          <Comment key={i} comment={comment}></Comment>
        </>   
      })}
      

    </div>
    </>
  );
};

export default PostWidget;
