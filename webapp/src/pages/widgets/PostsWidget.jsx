import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../state/index";
import { setNewpost } from "../../state/index";
import { setTrueFalse } from "../../state/index";
import PostWidget from "./PostWidget";
import PostNew from "./PostNew";

const PostsWidget = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const users = useSelector((state) => state.users);
  const newpost = useSelector((state) => state.newpost);
  const { id } = useSelector((state) => state.iduser);
  const iduser = useSelector((state) => state.iduser);
  const isProfile = useSelector((state) => state.isProfile);
  const [data, setData] = useState([]);
  const getPosts = async () => {
    const response = await fetch("http://127.0.0.1:5000/blog", {
      mode: "cors",
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    dispatch(setPosts({ posts: data.data }));
  };

  // const getUserPosts = async () => {
  //   const response = await fetch(
  //     `http://localhost:3001/posts/${userId}/posts`,
  //     {
  //       method: "GET",
  //       headers: { Authorization: `Bearer ${token}` },
  //     }
  //   );
  //   const data = await response.json();
  //   dispatch(setPosts({ posts: data }));
  // };

  const getUserpost = async () =>{
    const response = await fetch(`http://127.0.0.1:5000/blog/${id}`, {
      mode: "cors",
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    // console.log(data.data);
    dispatch(setPosts({ posts: data.data }));
  }

  useEffect(() => {
    if (isProfile) {
      // console.log("aa");
      getUserpost();
    } else {
      // console.log("bb");
      getPosts();
    };
    dispatch(setNewpost([]));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // let result = posts.map((e) => {
  //   let arr = users.find((e1) => {
  //     return e1.id === e.userId;
  //   });
  //   return arr;
  // });

  // console.log(result);
  // console.log(posts);
  // console.log(users);
  // console.log(newpost);
  // console.log(isProfile);
  return (
    <>
      {newpost != undefined ?
        newpost.map((e,i) => {
        return <PostNew key={i} newpost={e} />
      })
      :
      ""}
      {isProfile ? 
        posts.map((e,i) => {
          let postviews = [e, iduser];
          return <PostWidget key={i} postview={postviews} />;
        }) 
      :
        posts.map((e,i) => {
          let arr = users.find((e1) => {
            return e1.id === e.userId;
          });
          let postviews = [e, arr];
          return <PostWidget key={i} postview={postviews} />;
        })
      }

      {/* <PostWidget /> */}
    </>
  );
};

export default PostsWidget;
