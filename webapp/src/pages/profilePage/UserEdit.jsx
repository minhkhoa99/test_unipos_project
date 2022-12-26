import React from "react";
import Box from "@mui/material";
import MetaTags from "react-meta-tags";
import {
  Table,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
} from "reactstrap";

import Editable from "react-bootstrap-editable";

//Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb";

const UserEdit = () => {
  return (
    <React.Fragment>
      <div className='page-content'>
        <MetaTags>
          <title>
            Form Xeditable | Veltrix - Responsive Bootstrap 5 Admin Dashboard
          </title>
        </MetaTags>
        <Container fluid={true}>
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle className='h4'>Chỉnh sửa thông tin</CardTitle>
                  {/* <CardSubtitle className='mb-3'>
                    This library allows you to create editable elements on your
                    page. It can be used with any engine (bootstrap, jquery-ui,
                    jquery only) and includes both popup and inline modes.
                    Please try out demo to see how it works.
                  </CardSubtitle> */}

                  <div className='table-responsive'>
                    <Table responsive striped className='table-nowrap mb-0'>
                      <thead>
                        <tr>
                          <th style={{ width: "50%", fontWeight: "bold" }}>
                            Thông tin
                          </th>
                          <th>Chi tiết</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Username</td>
                          <td>
                            <Editable
                              alwaysEditing={false}
                              disabled={false}
                              editText='Siêu nhân Gao'
                              id={null}
                              isValueClickable={false}
                              mode='inline'
                              placement='top'
                              showText
                              type='textfield'
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Avatar</td>
                          <td>
                            <Editable
                              alwaysEditing={false}
                              disabled={false}
                              editText='Siêu nhân Gao'
                              id={null}
                              isValueClickable={false}
                              mode='inline'
                              placement='top'
                              showText
                              type='textfield'
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>bachnx1991@gmail.com</td>
                        </tr>
                        <tr>
                          <td>Giới tính</td>
                          <td>
                            <Editable
                              ajax={null}
                              alwaysEditing={false}
                              className={null}
                              disabled={false}
                              editText='Male'
                              id={null}
                              isValueClickable={false}
                              label={null}
                              mode='inline'
                              onSubmit={null}
                              onValidated={null}
                              options={["male", "female"]}
                              placement='top'
                              showText
                              type='select'
                              validate={null}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Ngày Sinh</td>
                          <td>
                            <Editable
                              ajax={null}
                              alwaysEditing={false}
                              className={null}
                              disabled={false}
                              editText='26/09/1991'
                              id={null}
                              isValueClickable={false}
                              label={null}
                              mode='inline'
                              onSubmit={null}
                              onValidated={null}
                              placement='top'
                              showText
                              type='date'
                              validate={null}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Mật khẩu</td>
                          <td>
                            <Editable
                              ajax={null}
                              alwaysEditing={false}
                              className={null}
                              disabled={false}
                              editText='******'
                              id={null}
                              isValueClickable={false}
                              label={null}
                              mode='inline'
                              onSubmit={null}
                              onValidated={null}
                              placement='top'
                              showText
                              type='password'
                              validate={null}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default UserEdit;
