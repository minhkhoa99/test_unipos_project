import React, { useState } from "react";
import { Button } from "antd";
import Modal from "react-bootstrap/Modal"
import Blogs from "./Blogs";
function ContentHome() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(show);

  return (
    <div className='content-home'>
      <div className='home-content'>
        <div className='main-form'>
          <div className='input'>
            <div className='avatar-input'>
              <img
                src='https://i.pinimg.com/originals/d9/b8/3a/d9b83aa1a08be3e46ebb47254db8cf75.jpg'
                alt=''
              />
            </div>
            <input
              type='text'
              onClick={handleShow}
              placeholder='Gao ơi, bạn đang nghĩ gì thế?'
            />
          </div>
          <hr />
          <div className='add-option'>
            <button onClick={handleShow}>
              {" "}
              <i className='fa-solid fa-images'></i>Ảnh/video
            </button>
            <button onClick={handleShow}>
              <i className='fa-solid fa-face-smile'></i>Emoji
            </button>
            <button onClick={handleShow}>
              <i className='fa-solid fa-location-dot'></i>Thêm vị trí
            </button>
          </div>
        </div>
      </div>
      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='modal-title'>Tạo bài viết</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='home-content-status'>
            <div className='main-form-status'>
              <div className='avatar-input-status'>
                <img
                  src='https://i.pinimg.com/originals/d9/b8/3a/d9b83aa1a08be3e46ebb47254db8cf75.jpg'
                  alt=''
                />
                <div>siu nhan gao do</div>
              </div>
              <form action=''>
                <div className='input-status'>
                  <label htmlFor="user-input-status"></label>
                  <input
                    id="user-input-status"
                    type='text'
                    placeholder='Gao ơi, bạn đang nghĩ gì thế?'
                  />
                </div>
                <div className='add-option-status'>
                  <div className="video-status">
                    <i className='fa-solid fa-images'></i>Ảnh/video
                  </div>
                  <div>
                    <i className='fa-solid fa-face-smile'></i>Emoji
                  </div>
                  <div>
                    <i className='fa-solid fa-location-dot'></i>Thêm vị trí
                  </div>
                </div>
                <div className='submit-post'>
                  <button className='btn-post'>Đăng bài</button>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* bài đăng */}
      <Blogs />
    </div>
  );
}

export default ContentHome;
