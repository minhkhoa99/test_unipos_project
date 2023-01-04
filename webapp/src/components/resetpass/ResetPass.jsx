import "./ResetPass.css";
import { Checkbox, Form, Input } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import FeatureBottum from "../FeatureFooter/FeatureBottom";
import HeadingNavbar from "../dashboard/HeadingNavbar";
import { Button, useTheme } from "@mui/material";
import { Typography } from "@mui/material";

function ResetPass() {
  const { palette } = useTheme();

  return (
    <>
      <div className='resetPass'>
        <HeadingNavbar />
        <div className='container'>
          <div className='row resetPass-container'>
            <div className='col-6 resetpass'>
              <Typography fontWeight='bold' fontSize='32px' color='primary'>
                Rating App
              </Typography>
              <Form
                name='normal_login'
                className='login-form'
                initialValues={{
                  remember: true,
                }}
              >
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
                <Button
                  fullWidth
                  type='submit'
                  sx={{
                    m: "2rem 0",
                    p: "1rem",
                    backgroundColor: "#00d5fa",
                    color: "white",
                    "&:hover": { backgroundColor: "#00e1faa3" },
                  }}
                >
                  Reset Password
                </Button>
              </Form>
              <p className='or-title'>
                <b>Or</b>
              </p>
              <Link
                to='/login'
                style={{
                  textDecoration: "none",
                }}
              >
                <Button
                  fullWidth
                  type='submit'
                  sx={{
                    m: "2rem 0",
                    p: "1rem",
                    width: "63%",
                    backgroundColor: "#00d5fa",
                    color: "white",
                    "&:hover": { backgroundColor: "#00e1faa3" },
                  }}
                >
                  SignIn
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <FeatureBottum />
    </>
  );
}

export default ResetPass;
