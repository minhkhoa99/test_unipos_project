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
  import { setNewpost } from "../../state/index";
  
  const PostNew = ({newpost}) => {
    const dispatch = useDispatch();
    // useEffect(() => {
    //   dispatch(setNewpost([]));
    // }, []);
    // const newpost = useSelector((state) => state.newpost)
    const iduser = useSelector((state) => state.iduser)
    const { id, username } = useSelector((state) => state.iduser);
    const {blog, arrUsers, likes, dislikes, command} = newpost
    const [commentinputnew, setCommentinputnew] = useState("")
    const [commentviewnew,setCommentviewnew] = useState([])
    const [isComment, setIsComment] = useState(true)
    const [likenew, setLike] = useState(false)
    const [dislikenew, setDislike] = useState(false)

    const handleLikeOnclicknew = async (e) => {
      let blogid = e.target.parentElement.classList[0]
      const formData = {};
      formData.usernameLikes = username
      formData.userId = id;
      formData.blogId = blogid
      if(!likenew){
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
          setLike(!likenew);
        }
      }
    }

    const handleDislikeOnclicknew = async (e) => {
      let blogid = e.target.parentElement.classList[0]
      // console.log(blogid);
      const formData = {};
      formData.usernameDislikes = username
      formData.userId = id;
      formData.blogId = blogid
      if(!dislikenew){
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
          setDislike(!dislikenew);
        }
      }
    }


    const handleChangenew = (e) => {
      let value = e.target.value;
      setCommentinputnew(value)
    }
   
    
      const handleSubmitnew = async (e) => {
        e.preventDefault()
        if(isComment){

          // console.log("aaaa");
          let blogid = e.target.classList[0]
          let formData ={}
          formData.Content = commentinputnew
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
          setCommentviewnew(piostComment)
          setCommentinputnew("")
          setIsComment(false)
        }
    }




    const liked = likes.find((e)=>e.usernameLikes==iduser.username)
    const disliked = dislikes.find((e)=>e.usernameDislikes==iduser.username)
    return (<>
      {blog != undefined ?
            <div id = {blog.id} className='home-post'>
            <div className='post-header'>
              <div className='post-header-right'>
                <div id = {iduser.id} className='user-post'>
                  <img
                    src={iduser.Avata == null ? "https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg?ver=6" : iduser.Avata}
                    alt=''
                  />
                </div>
                <div className='name-user-post'>
                  <div>{iduser.username}</div>
                  <h6>{format(blog.createdAt)}</h6>{" "}
                  <i className='fa-solid fa-earth-americas icon-public'></i>
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
                {" "}
                <div className='number-comment'>23 bình luận</div>
                <div className='number-view'>108 người đã xem</div>
              </div>
            </div>
            <div className={`${blog.id} post-buttons`}>
              <button onClick={handleLikeOnclicknew}>
                <i className={`fa-regular fa-thumbs-up  ${likenew || liked ? 'likecoler' : ''}`}></i> Yêu thích
              </button>
              <button onClick={handleDislikeOnclicknew}>
                <i className={`fa-regular fa-thumbs-down ${dislikenew || disliked ? 'likecoler' : ''}`}></i> Không thích
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
                <form action='' onSubmit={handleSubmitnew} className={blog.id}>
                  <input
                    className='comment-input'
                    type='text'
                    placeholder='Viết bình luận của bạn...'
                    onChange={handleChangenew}
                    value={commentinputnew}
                  />
                </form>
              </div>
            </div>
            {commentviewnew.length == 0 ? "" 
            :
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
            }
          </div>
     : ""}
     </>)
  };
  
  export default PostNew;
  