import React from "react";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, DatePicker } from "antd";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./Register.css";
import FeatureBottum from "../FeatureFooter/FeatureBottom";
import { signInWithGoogle } from "../login/firebase";
import HeadingNavbar from "../dashboard/HeadingNavbar";


const Register = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const pass = values.password;
    const rePass = values.repassword;
    const id = Math.floor(Math.random() * 100);
    const email = values.email;
    const userName = values.username;
    const data = {
      id: id,
      username: userName,
      Email: email,
      Password: pass,
      DOB: null,
      Gender: null,
      Avata: null,
      Level: null,
      referralCode: null,
      Status: null,
    };
    // console.log(pass, rePass, id , email, userName);
    fetch("http://localhost:5000/users", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert('thành công')
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    if (pass !== rePass) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "password does not match!",
      });
    } else if (values) {
      Swal.fire("Good job!", "Sign Up Success!", "success");
    } 
  };
  return (
    <>
      <HeadingNavbar/>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h3 className="title">
              Welcome to 
              <img
                src="https://tuyendung.rikkeisoft.com/assets/front/images/logoRikkeisoft.png"
                alt=""
                className="img-title"
              />
            </h3>
            <Form
              name="normal_login"
              className="login-form"
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
                <b> Sign Up with Google</b>
              </Button>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                  className="input"
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email!",
                  },
                ]}
              >
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  type="email"
                  placeholder="Email"
                  className="input"
                />
              </Form.Item>
              <Form.Item
                name="password"
                size="12"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                  className="input"
                />
              </Form.Item>
              <Form.Item
                name="repassword"
                size="12"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Re-password"
                  className="input"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
              </Form.Item>

              <Form.Item>
                <div>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    <b>Sign Up</b>
                  </Button>
                </div>

                <div></div>
                <div>

                </div>
              </Form.Item>
            </Form>
            <span>You already have an account ? </span>
            <Link to="/login">Sign In now</Link>
          </div>
          <div className="col-6">
            <img
              src="https://i.ytimg.com/vi/48ayBkuUrWA/hq720_2.jpg?sqp=-oaymwEYCNAFENAFSFryq4qpAwoIARUAAIhC0AEB&rs=AOn4CLCa71xTdHDO4_6kKkDSjVmERuicqQ"
              alt=""
              className="img-register"
            />
          </div>
        </div>
      </div>
      <FeatureBottum />
    </>
  );
};
export default Register;
