import React from "react";
import { NavLink } from "react-router-dom";
function Leftbox() {
  return (
    <div className='body-left'>
      <div className='left-box'>
        <div className='logo'>
          <img
            src='https://tuyendung.rikkeisoft.com/assets/front/images/logoRikkeisoft.png'
            alt=''
          />
        </div>
        <hr />
        <button className='left-menu'>
          <i className='fa-solid fa-star'></i>
          <NavLink className='a' to='/home/history'>
            Lịch sử sao
          </NavLink>
        </button>
        <button className='left-menu'>
          <i className='fa-solid fa-ranking-star'></i>
          <NavLink to='/home/rank'>Bảng xếp hạng</NavLink>
        </button>
        
        <button className='left-menu'>
          <i className='fa-solid fa-circle-info'></i>
          <NavLink to='/home/about'>Giới thiệu Web</NavLink>
        </button>
        <button className='left-menu'>
          <i className='fa-solid fa-question'></i>
          <NavLink to='/home/support'>Hỗ trợ giải đáp</NavLink>
        </button>
        <div className='voting-symbol'>
          <img
            src='https://media.istockphoto.com/id/1270355309/vi/vec-to/vi%E1%BA%BFt-tay-c%E1%BA%A7m-b%C3%BAt-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-vector-minh-h%E1%BB%8Da.jpg?s=1024x1024&w=is&k=20&c=iUMwl03XRTYiUfpuSZDAQ7NjiXDmwThhALCDa-1a7Lk='
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default Leftbox;
