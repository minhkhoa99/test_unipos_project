import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import Friend from "../../components/Friend";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "state";

import { useEffect } from "react";
import { setNewpost,} from "../../state/index";



const PostWidget = ({postview,}) => {
  const dispatch = useDispatch();
  // const newpost = useSelector((state) => state.newpost)
  const iduser = useSelector((state) => state.iduser)
  const { id, username } = useSelector((state) => state.iduser);
  const {blog, arrUsers, likes, dislikes} = postview
  const [like, setLike] = useState(false)
  const [dislike, setDislike] = useState(false)
  // console.log(newpost);
  // const [isComments, setIsComments] = useState(false);
  // const dispatch = useDispatch();
  // const token = useSelector((state) => state.token);
  // const loggedInUserId = useSelector((state) => state.user._id);
  // const isLiked = Boolean(likes[loggedInUserId]);
  // const likeCount = Object.keys(likes).length;
     
  // const { palette } = useTheme();
  // const main = palette.neutral.main;
  // const primary = palette.primary.main;

  // const patchLike = async () => {
  //   const response = await fetch(`http://localhost:3001/posts/${postId}/like`, {
  //     method: "PATCH",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ userId: loggedInUserId }),
  //   });
  //   const updatedPost = await response.json();
  //   dispatch(setPost({ post: updatedPost }));
  // };
  // const [postview, setPostview] = useState()
  // setPostview(postviews)
  // console.log(postview);
  // console.log(interactive);
  // console.log(likes);
  // console.log(iduser);
  // console.log(id);
  const handleLikeOnclick = async (e) => {
    let blogid = e.target.parentElement.id
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
    let blogid = e.target.parentElement.id
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

  const liked = likes.find((e)=>e.usernameLikes==iduser.username)
  const disliked = dislikes.find((e)=>e.usernameDislikes==iduser.username)
  // console.log(dislikes);
  console.log(disliked);
  
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
            <h6>1 giờ trước </h6>{" "}
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
            {likes == undefined ? "" : <h6> {likes.length >= 1 ? "Bạn" : ""} {likes.length >= 2 ? `, ${likes[1].usernameLikes}` : ""} {likes.length >= 3 ? `, ${likes[2].usernameLikes}` : ""} {likes.length >= 4 ? `và ${likes.length-3} người khác` : ""}</h6>}
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
      <div id={blog.id} className='post-buttons'>
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
          <form action=''>
            <input
              className='comment-input'
              type='text'
              placeholder='Viết bình luận của bạn...'
            />
          </form>
        </div>
      </div>
      <div className='other-comments'>
        <div className='other-user'>
          <img
            src='https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-1/272253596_10158307835791922_8649551029038105142_n.jpg?stp=cp0_dst-jpg_p48x48&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=RA01PIphbFQAX-QKwHr&_nc_ht=scontent.fhan15-1.fna&oh=00_AfD_ncaM88oph6r7tthvyNEhm76wIUWkw9Nhc_6KqA-Lew&oe=639F76A7'
            alt=''
          />
        </div>
        <div className='comment-text'>
          Trước khi xuất bản, thiết kế đồ họa có giả lập bố cục của bản vẽ trong
          dòng squiggled để cho biết văn bản. Xuất hiện tầng tự dính các
          preprinted "Lorem ipsum" nhường một thực tế cho biết văn bản đâu trên
          trang.
        </div>
      </div>
      <div>
        <ul className='ul-like-time'>
          <li className='li-like'>
            <button>Thích</button>{" "}
          </li>
          <li>50 phút trước</li>
        </ul>
      </div>
    </div>
    </>
  );

  // return (
  //   <WidgetWrapper m="2rem 0">
  //     <Friend
  //       friendId={postUserId}
  //       name={name}
  //       subtitle={location}
  //       userPicturePath={userPicturePath}
  //     />
  //     <Typography color={main} sx={{ mt: "1rem" }}>
  //       {description}
  //     </Typography>
  //     {picturePath && (
  //       <img
  //         width="100%"
  //         height="auto"
  //         alt="post"
  //         style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
  //         src={`http://localhost:3001/assets/${picturePath}`}
  //       />
  //     )}
  //     <FlexBetween mt="0.25rem">
  //       <FlexBetween gap="1rem">
  //         <FlexBetween gap="0.3rem">
  //           {/* <IconButton onClick={patchLike}> */}
  //           <IconButton >

  //             {isLiked ? (
  //               <FavoriteOutlined sx={{ color: primary }} />
  //             ) : (
  //               <FavoriteBorderOutlined />
  //             )}
  //           </IconButton>
  //           <Typography>{likeCount}</Typography>
  //         </FlexBetween>

  //         <FlexBetween gap="0.3rem">
  //           <IconButton onClick={() => setIsComments(!isComments)}>
  //             <ChatBubbleOutlineOutlined />
  //           </IconButton>
  //           <Typography>{comments.length}</Typography>
  //         </FlexBetween>
  //       </FlexBetween>

  //       <IconButton>
  //         <ShareOutlined />
  //       </IconButton>
  //     </FlexBetween>
  //     {isComments && (
  //       <Box mt="0.5rem">
  //         {comments.map((comment, i) => (
  //           <Box key={`${name}-${i}`}>
  //             <Divider />
  //             <Typography sx={{ color: main, m: "0.5rem 0", pl: "1rem" }}>
  //               {comment}
  //             </Typography>
  //           </Box>
  //         ))}
  //         <Divider />
  //       </Box>
  //     )}
  //   </WidgetWrapper>
  // );
};

export default PostWidget;