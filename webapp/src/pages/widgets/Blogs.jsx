import { useState } from "react";
import { useEffect } from "react";
import MyPostWidget from "./MyPostWidget";
import PostsWidget from "./PostsWidget";




function Blogs() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch("http://127.0.0.1:3000/blog", { mode: 'cors' })
        .then(res=>res.json())
        .then((result)=>{
            // console.log(result.data);
            let arr = result.data
            setData(arr)
        })
    },[])
    //  console.log(data);
    return ( <>
    <MyPostWidget></MyPostWidget>
    <PostsWidget data={data}></PostsWidget>
    
    </> );
}

export default Blogs;