import "./ResetPass.css";
import { Checkbox, Form, Input } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import FeatureBottum from "../FeatureFooter/FeatureBottom";
import HeadingNavbar from "../dashboard/HeadingNavbar";
import { Button, useTheme } from "@mui/material";
import { Typography } from "@mui/material";
import Swal from "sweetalert2";


function ResetPass() {
  const { palette } = useTheme();
  const onFinish = (values) => {
    const pass = values.password;
    const email = values.email;
    const repass = values.repassword;
    console.log(pass, email, repass);

    const data = {
      id: null,
      username: null,
      Email: email,
      Password: pass,
      DOB: null,
      Gender: null,
      Avata: null,
      Level: null,
      referralCode: null,
      Status: null,
    };

    console.log(values);
    fetch("http://localhost:5000/user/forgot", {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        Swal.fire("Good job!", "Sign Up Success!", "success");
        console.log(data);
        window.location.href = "http://localhost:8800/login"
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "password does not match!",
        });
        console.log(error);
      });
  };

  return (
    <>
      <div className="resetPass">
        <HeadingNavbar />
        <div className="container">
          <div className="row resetPass-container">
            <div className="col-6 resetpass">
              <Typography fontWeight="bold" fontSize="32px" color="primary">
                Rating App
              </Typography>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
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
                    placeholder="Forgot Password"
                    className="input"
                  />
                </Form.Item>
                <Button
                  fullWidth
                  type="submit"
                  sx={{
                    m: "2rem 0",
                    p: "1rem",
                    backgroundColor: "#00d5fa",
                    color: "white",
                    "&:hover": { backgroundColor: palette.error.main },
                  }}
                >
                  Reset Password
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <FeatureBottum />
    </>
  );
}

export default ResetPass;
