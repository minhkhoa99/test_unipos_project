import { useState } from "react";
import { useEffect } from "react";
import MyPostWidget from "./MyPostWidget";
import PostsWidget from "./PostsWidget";

function Blogs() {
    return ( <>
    <MyPostWidget></MyPostWidget>
    <PostsWidget data={data}></PostsWidget>
    
    </> );
}

export default Blogs;