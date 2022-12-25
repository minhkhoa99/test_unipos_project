import "./ResetPass.css";
import { Button, Checkbox, Form, Input } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import FeatureBottum from "../FeatureFooter/FeatureBottom";
import HeadingNavbar from "../dashboard/HeadingNavbar";

function ResetPass() {
  return (
    <>
      <div className="resetPass">
        <HeadingNavbar />
        <div className="container">
          <div className="row">
            <div className="col-6 resetpass">
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
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button resetpassword"
                >
                  <b className="login-title">Reset Password</b>
                </Button>
              </Form>

              <p>
                <b>Or</b>
              </p>
              <Link to="/login">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button-repass"
                >
                  <b className="login-title">Sign In</b>
                </Button>
              </Link>
            </div>
            <div className="col-6">
              <img
                src="https://media.istockphoto.com/id/1279772419/vi/vec-to/trang-%C4%91%C3%ADch-minh-h%E1%BB%8Da-thi%E1%BA%BFt-k%E1%BA%BF-m%E1%BB%8Di-ng%C6%B0%E1%BB%9Di-qu%C3%AAn-m%E1%BA%ADt-kh%E1%BA%A9u-c%E1%BB%A7a-c%C3%B4-thi%E1%BA%BFt-k%E1%BA%BF-n%C3%A0y-c%C3%B3-th%E1%BB%83-%C4%91%C6%B0%E1%BB%A3c-s%E1%BB%AD-d%E1%BB%A5ng.jpg?s=1024x1024&w=is&k=20&c=o8B_qYDt9JaNTV_ek28uljpQR98S3KbSZwJKMdkB6Sk="
                alt=""
                className="img-robot"
              />
            </div>
          </div>
        </div>
      </div>
      <FeatureBottum />
    </>
  );
}

export default ResetPass;
