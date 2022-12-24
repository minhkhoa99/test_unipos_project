import React from "react";
import { Link, redirect } from "react-router-dom";

import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

import Swal from "sweetalert2";
import "./Login.css";

import { signInWithGoogle } from "./firebase";
import FeatureBottum from "../FeatureFooter/FeatureBottom";
import HeadingNavbar from "../dashboard/HeadingNavbar";
// import FlexBetween from "./FlexBetween";
import FormLogin from "./FormLogin";

// import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import FlexBetween from './FlexBetween';

const Login = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  // const provider = new GoogleAuthProvider();

  // const auth = getAuth();

  // const googleLogin = () => {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       const user = result.user;
  //       console.log(result.user.displayName);

  //       // window.location.href = "http://localhost:3000/";
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       const email = error.customData.email;
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //     });
  // };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    let mail = "thong1403@gmail.com";
    let pass = "123456";

    if (values.email === mail && values.password === pass) {
      Swal.fire("Login Successful!", "Logged in successfully!", "success");
      window.location.href = "http://localhost:3000/";
      localStorage.setItem("userEmail", values.email);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Incorrect email or password!",
      });
    }
  };

  return (
    <div className="background">
     
      <HeadingNavbar/>
    
      <Box >
      <Box
      marginTop="5%"
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Rating App
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Rating App
        </Typography>
    <FormLogin/>
       
      </Box>
    </Box>
 
    
      <FeatureBottum/>
    </div>
  );
};

export default Login;
