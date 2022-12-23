import React from "react";
import All from "./ContentHistory/All";

function Intro() {
  return (
    <div className='intro'>
      <h1>ỨNG DỤNG RATING</h1>
      <div className='intro-content'>
        {" "}
        <div className='intro-content-left'>
          <h4>Trao gửi yêu thương</h4>
          <p>
            Rating App cho phép bạn đăng tin nhắn cảm ơn và khen ngợi thành viên
            khác, qua đó có thể nhận điểm thưởng của app để quy đổi ra những
            phần thưởng giá trị.
          </p>
        </div>
        <div className='intro-content-right'>
          <All />
        </div>
      </div>
      <div className='intro-content'>
        <h4>Hệ thống Bảng xếp hạng</h4>
      </div>
      <div className='intro-content'>
        <h4>Hệ thống Chat trực tuyến</h4>
      </div>
    </div>
  );
}

export default Intro;

// Voting App được thiết kế cho phép người dùng gửi lời cảm ơn, khen ngợi
// hay khuyến khích đến một cá nhân trong tổ chức. Những trải nghiệm tích
// cực từ lòng biết ơn, sự ngưỡng mộ hay những phần thưởng cảm xúc làm tăng
// sự an toàn về tâm lý của các cá nhân để từ đó tạo ra một tổ chức vững
// mạnh
