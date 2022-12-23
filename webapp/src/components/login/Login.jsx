import React from "react";
import { Link, redirect } from "react-router-dom";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import Swal from "sweetalert2";
import "./Login.css";

import { signInWithGoogle } from "./firebase";
import FeatureBottum from "../FeatureFooter/FeatureBottom";
import HeadingNavbar from "../dashboard/HeadingNavbar";

// import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const Login = () => {
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
    <>
      <HeadingNavbar />
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <h3 className='title'>
              Welcome to
              <img
                src='https://tuyendung.rikkeisoft.com/assets/front/images/logoRikkeisoft.png'
                alt=''
                className='img-title'
              />
            </h3>
            <Form
              name='normal_login'
              className='login-form'
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Button className='login' onClick={signInWithGoogle}>
                <img
                  src='https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/google-icon.png'
                  alt=''
                  className='logo'
                />
                <b> Sign In with Google</b>
              </Button>
              <Form.Item
                name='email'
                rules={[
                  {
                    required: true,
                    message: "Please input your Email!",
                  },
                ]}
              >
                <Input
                  prefix={<MailOutlined className='site-form-item-icon' />}
                  placeholder='Email'
                  className='input'
                />
              </Form.Item>
              <Form.Item
                name='password'
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className='site-form-item-icon' />}
                  type='password'
                  placeholder='Password'
                  className='input'
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name='remember' valuePropName='checked' noStyle>
                  <Checkbox className='check'>Remember me</Checkbox>
                </Form.Item>

                <Link className='login-form-forgot' to='/resetpassword'>
                  Forgot password
                </Link>
              </Form.Item>

              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  className='login-form-button'
                >
                  <b className='login-title'> Sign In</b>
                </Button>
                <div></div>
                <div className='switch-login'>
                  Do not have an account?
                  <Link to='/signup'> Register now!</Link>
                </div>
              </Form.Item>
            </Form>
          </div>
          <div className='col-6'>
            <img
              src='https://i.pinimg.com/originals/f4/a2/ac/f4a2ace8e8067689b1aeeb602fa12f0f.jpg'
              alt=''
              className='img-content'
            />
          </div>
        </div>
      </div>
      <FeatureBottum />
    </>
  );
};

export default Login;
