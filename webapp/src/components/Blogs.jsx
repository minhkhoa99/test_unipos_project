import React from "react";
function Blogs() {
  return (
    <div className='home-post'>
      <div className='post-header'>
        <div className='post-header-right'>
          <div className='user-post'>
            <img
              src='https://i.pinimg.com/originals/d9/b8/3a/d9b83aa1a08be3e46ebb47254db8cf75.jpg'
              alt=''
            />
          </div>
          <div className='name-user-post'>
            <div>Nguyễn Xuân Bách</div>
            <h6>1 giờ trước </h6>{" "}
            <i className='fa-solid fa-earth-americas icon-public'></i>
          </div>
        </div>
        <div className='option-post'>
          <button className='btn-option'>...</button>
        </div>
      </div>
      <div className='post-content'>
        Trong những năm 1500, máy in phù hợp của Cicero văn bản để phát triển
        một trang kiểu mẫu. Từ đó, văn bản Latinh như đã tiêu chuẩn của ngành
        công nghiệp in văn bản giả mạo hoặc giả. Trước khi xuất bản, thiết kế đồ
        họa có giả lập bố cục của bản vẽ trong dòng squiggled để cho biết văn
        bản. Xuất hiện tầng tự dính các preprinted "Lorem ipsum" nhường một thực
        tế cho biết văn bản đâu trên trang.
      </div>
      <div className='post-picture'>
        <img
          src='https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/317695595_2328376577331130_4256807180384835310_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=3P06jzZ3C80AX8WP0LE&_nc_ht=scontent.fhan15-1.fna&oh=00_AfBFNfYiR7WAgz_YCKMtO3Ucqo5Q0ntsvQhhsg8JXnCJqw&oe=639D16C9'
          alt=''
        />
      </div>
      <br />
      <div className='post-reaction'>
        <div className='number-like'>
          <div>
            <i className='fa-regular fa-thumbs-up'></i>
          </div>
          <h6>Thành Đô, Hoàng Đức và 23 người khác</h6>
        </div>
        <div className='number-user'>
          {" "}
          <div className='number-comment'>23 bình luận</div>
          <div className='number-view'>108 người đã xem</div>
        </div>
      </div>
      <div className='post-buttons'>
        <button>
          {" "}
          <i className='fa-regular fa-thumbs-up'></i> Yêu thích
        </button>
        <button>
          <i className='fa-regular fa-thumbs-down'></i> Không thích
        </button>
        <button>
          <i className='fa-regular fa-comments'></i> Bình luận
        </button>
      </div>
      <div className='post-comment'>
        <div className='my-user'>
          <img
            src='https://i.pinimg.com/originals/d9/b8/3a/d9b83aa1a08be3e46ebb47254db8cf75.jpg'
            alt=''
          />
        </div>
        <div className='main-form-comment'>
          <form action=''>
            <input
              className='comment-input'
              type='text'
              placeholder='Viết bình luận của bạn...'
            />
          </form>
        </div>
      </div>
      <div className='other-comments'>
        <div className='other-user'>
          <img
            src='https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-1/272253596_10158307835791922_8649551029038105142_n.jpg?stp=cp0_dst-jpg_p48x48&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=RA01PIphbFQAX-QKwHr&_nc_ht=scontent.fhan15-1.fna&oh=00_AfD_ncaM88oph6r7tthvyNEhm76wIUWkw9Nhc_6KqA-Lew&oe=639F76A7'
            alt=''
          />
        </div>
        <div className='comment-text'>
          Trước khi xuất bản, thiết kế đồ họa có giả lập bố cục của bản vẽ trong
          dòng squiggled để cho biết văn bản. Xuất hiện tầng tự dính các
          preprinted "Lorem ipsum" nhường một thực tế cho biết văn bản đâu trên
          trang.
        </div>
      </div>
      <div>
        <ul className='ul-like-time'>
          <li className='li-like'>
            <button>Thích</button>{" "}
          </li>
          <li>50 phút trước</li>
        </ul>
      </div>
    </div>
  );
}

export default Blogs;
