import React from "react";
import { Link } from "react-router-dom";
function SubHeader() {
  return (
    <div className='Sub-header'>
      <div className='header-search'>
        <input type='text' placeholder='Tìm kiếm trên Rating App ...' />
        <button className='btn-search-header'>
          <i className='fa-sharp fa-solid fa-magnifying-glass icon-search-header'></i>
        </button>
      </div>
      <div className='avatar'>
        <button className='notification'>
          <i className='fa-solid fa-bell'></i>
        </button>
        <div className='dropdown'>
          <button
            className='btn btn-secondary dropdown-toggle'
            type='button'
            id='dropdownMenuButton1'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            <div className='avatar-img'>
              <img
                src='https://i.pinimg.com/originals/d9/b8/3a/d9b83aa1a08be3e46ebb47254db8cf75.jpg'
                alt=''
              />
            </div>
          </button>
          <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
            <li>
              <Link to='/profile' className='dropdown-item'>
                Thông tin cá nhân
              </Link>
            </li>
            <li>
              <a className='dropdown-item' href='#'>
                Đăng xuất
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
