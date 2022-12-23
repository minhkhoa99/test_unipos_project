function HeadingContainer() {
  return (
    <div className='mv__container'>
      <section className='mv'>
        <div className='mv__topContainer'>
          <div className='mv__taglineDescription'>
            <h1 className='mv__tagline'>
              Tăng cường an toàn tâm lý <br></br>
              và tạo ra văn hóa thử thách
            </h1>
            <p className='mv__description'>
              <font className='mv__description'>
                Rating App là một dịch vụ thúc đẩy sự thay đổi của tổ chức thông
                qua Peer Bonus ® *
              </font>
              <br />
              <font className='mv__description'>
                Tạo văn hóa đánh giá cao, tăng cường an toàn tâm lý và <br />
                <font className='mv__description'>
                  đạt được năng suất tăng/doanh thu được cải thiện.
                </font>
              </font>
              <br></br>
            </p>
            <p className='mv__annotation'>
              <font className='mv__description'>
                <font className='mv__description'>
                  * Tiền thưởng ngang hàng là nhãn hiệu đã đăng ký của Unipos
                  Co., Ltd.
                </font>
              </font>
            </p>
            <picture className='mv__book'>
              <source
                srcSet='https://unipos.me/ja/img/index/mv/book-sp.png'
                media='(max-width: 749px)'
              />
              <img
                src='https://unipos.me/ja/img/index/mv/book-sp.png'
                className='mv__bookImage'
                alt=''
              />
            </picture>
          </div>
          <div className='mv__deviceWrap'>
            <picture className='mv__device'>
              <source srcSet='https://unipos.me/ja/img/index/mv/device-sp.png' />
              <img
                src='https://unipos.me/ja/img/index/mv/ab_20220602/device-pc-front.png'
                alt='Sơ đồ chạy Unipos trên PC và điện thoại thông minh'
                className='mv__deviceImage'
              />
            </picture>
            <img
              src='https://unipos.me/ja/img/index/mv/ab_20220602/award-front.png'
              alt='BOXIL SaaS AWARD 2021 Hạng mục Nhân sự/Biên chế Số 1 trong 3 hạng mục theo hạng mục Tính ổn định của dịch vụ Tính hữu dụng Dễ sử dụng'
              className='mv__award'
            />
          </div>
        </div>
        <ul className='mv__buttonList'>
          <li className='mv__buttonItem'>
            <span className='mv__buttonListLabel'>
              <font>Hiểu Rating App trong 3 phút</font>
            </span>
            <a href='/' className='mv__buttonListLink'>
              <span className='mv__buttonListText'>
                <font>Tài liệu (miễn phí)</font>
              </span>
            </a>
          </li>
          <li className='mv__buttonItem'>
            <span className='mv__buttonListLabel'>
              <font>Đề xuất chi tiết và phương án</font>
            </span>
            <a href='/' className='mv__buttonListLink'>
              <span className='mv__buttonListText'>
                <font>Kế hoạch cụ thể</font>
              </span>
            </a>
          </li>
          <li className='mv__buttonItem'>
            <span className='mv__buttonListLabel'>
              <font>Hướng dẫn sử dụng</font>
            </span>
            <a href='/intro' className='mv__buttonListLink'>
              <span className='mv__buttonListText'>
                <font>Giới thiệu Rating App</font>
              </span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default HeadingContainer;
