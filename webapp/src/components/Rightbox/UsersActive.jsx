import React from "react";
function UsersActive() {
  return (
    <>
      <div className='users-active'>
        <div className='search'>
          <h5>Người liên hệ</h5>
          <button className='btn-search'>
            <i className='fa-sharp fa-solid fa-magnifying-glass'></i>
          </button>
        </div>
        <div className='user-contact'>
          <div className='avatar-user-contact'>
            <img
              src='https://i.pinimg.com/originals/d9/b8/3a/d9b83aa1a08be3e46ebb47254db8cf75.jpg'
              alt=''
            />
            <div className='icon-active'></div>
          </div>
          <div className='name-user-contact'>Siêu nhân Gao</div>
        </div>
      </div>
    </>
  );
}

export default UsersActive;
