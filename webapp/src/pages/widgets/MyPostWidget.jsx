import {
  EditOutlined,
  DeleteOutlined,
  AttachFileOutlined,
  GifBoxOutlined,
  ImageOutlined,
  MicOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Typography,
  InputBase,
  useTheme,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import Dropzone from "react-dropzone";
import UserImage from "../../components/UserImage";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts, setNewpost } from "../../state/index";

const MyPostWidget = ({ picturePath }) => {
  const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const [postData, setPostData] = useState([]);
  const { palette } = useTheme();
  const { id } = useSelector((state) => state.iduser);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const mediumMain = "#858585";
  const medium = "A3A3A3";
  // console.log(id);
  const handlePost = async () => {
    if (image) {
      const formData = new FormData();
      formData.append("Content", post);
      formData.append("userId", id);
      formData.append("ImgVideo", image);
      const response = await fetch(`http://127.0.0.1:5000/blogs`, {
        mode: "cors",
        method: "POST",
        body: formData,
      });
      const postRes = await response.json();
      let a = postRes.data
      setPostData([a,...postData])
      setImage(null);
      setPost("");
    } else {
      const formData1 = {};
      formData1.userId = id;
      formData1.Content = post;
      //  console.log(post);
      //  console.log(formData);
      const response = await fetch(`http://127.0.0.1:5000/blog`, {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData1),
      });
      const postRes = await response.json();
      let a = postRes.data
      setPostData([a,...postData])

      // if(postData.length != 0){
      //   let a = postRes.data
      //   setPostData1([...postData,a])
      //   dispatch(setNewpost({ postData }));
      //   // console.log(postData);
      // }else{
      //   let postData = postRes.data
      //   setPostData1([postRes.data])
      //   dispatch(setNewpost({ postData }));
      // }

      setImage(null);
      setPost("");

    }
  };
  if(postData.length != 0){
    dispatch(setNewpost({ postData }));
    // console.log(postData);
  }
  // console.log(postData);
  return (
    <WidgetWrapper>
      <FlexBetween gap='1.5rem'>
        <UserImage
          image={
            "https://thuthuatnhanh.com/wp-content/uploads/2022/06/Anh-sieu-nhan-mau-do.jpg"
          }
        />
        <InputBase
          placeholder="What's on your mind..."
          onChange={(e) => setPost(e.target.value)}
          value={post}
          sx={{
            width: "100%",
            backgroundColor: "#F0F0F0",
            borderRadius: "2rem",
            padding: "1rem 2rem",
          }}
        />
      </FlexBetween>
      {isImage && (
        <Box
          border={`1px solid ${medium}`}
          borderRadius='5px'
          mt='1rem'
          p='1rem'
        >
          <Dropzone
            acceptedFiles='.jpg,.jpeg,.png'
            multiple={false}
            onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
          >
            {({ getRootProps, getInputProps }) => (
              <FlexBetween>
                <Box
                  {...getRootProps()}
                  border={`2px dashed ${palette.primary.main}`}
                  p='1rem'
                  width='100%'
                  sx={{ "&:hover": { cursor: "pointer" } }}
                >
                  <input {...getInputProps()} />
                  {!image ? (
                    <p>Add Image Here</p>
                  ) : (
                    <FlexBetween>
                      <Typography>{image.name}</Typography>

                      <EditOutlined />
                    </FlexBetween>
                  )}
                </Box>
                {image && (
                  <IconButton
                    onClick={() => setImage(null)}
                    sx={{ width: "15%" }}
                  >
                    <DeleteOutlined />
                  </IconButton>
                )}
              </FlexBetween>
            )}
          </Dropzone>
        </Box>
      )}

      <Divider sx={{ margin: "1.25rem 0" }} />

      <FlexBetween>
        <FlexBetween gap='0.25rem' onClick={() => setIsImage(!isImage)}>
          <ImageOutlined sx={{ color: mediumMain }} />
          <Typography
            color={mediumMain}
            sx={{ "&:hover": { cursor: "pointer", color: medium } }}
          >
            Image
          </Typography>
        </FlexBetween>

        {isNonMobileScreens ? (
          <>
            <FlexBetween gap='0.25rem'>
              <GifBoxOutlined sx={{ color: mediumMain }} />
              <Typography color={mediumMain}>Clip</Typography>
            </FlexBetween>

            <FlexBetween gap='0.25rem'>
              <AttachFileOutlined sx={{ color: mediumMain }} />
              <Typography color={mediumMain}>Attachment</Typography>
            </FlexBetween>

            <FlexBetween gap='0.25rem'>
              <MicOutlined sx={{ color: mediumMain }} />
              <Typography color={mediumMain}>Audio</Typography>
            </FlexBetween>
          </>
        ) : (
          <FlexBetween gap='0.25rem'>
            <MoreHorizOutlined sx={{ color: mediumMain }} />
          </FlexBetween>
        )}

        <Button
          disabled={!post}
          onClick={handlePost}
          sx={{
            color: palette.background.alt,
            backgroundColor: "#00d5fa",
            borderRadius: "3rem",
          }}
        >
          POST
        </Button>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default MyPostWidget;
