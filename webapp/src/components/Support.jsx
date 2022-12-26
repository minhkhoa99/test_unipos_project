import React from "react";
import rank from "../assets/image/rank.jpg";
import Table from "react-bootstrap/Table";
import WidgetWrapper from "../components/WidgetWrapper";

function Support() {
  return (
    <WidgetWrapper>
      <h1>Bảng xếp hạng</h1>
      <h4>1. Top User</h4>
      <div className='rank-img'>
        <img src={rank} alt='rank' />
      </div>
      <h4>2. Bảng xếp hạng User</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên người dùng</th>
            <th>Tổng Sao</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Gao đỏ</td>
            <td>5.000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Gao xanh</td>
            <td>3.000</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Gao vàng</td>
            <td>1.000</td>
          </tr>
        </tbody>
      </Table>
    </WidgetWrapper>
  );
}

export default Support;
