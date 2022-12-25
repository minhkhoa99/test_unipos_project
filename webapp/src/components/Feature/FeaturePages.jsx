import HeadingNavbar from "../dashboard/HeadingNavbar";
import FeatureBottum from "../FeatureFooter/FeatureBottom";
import "./Feature.css";

function FeaturePages() {
  return (
    <>
      <HeadingNavbar />

      <div className='container-top'>
        <img
          src='https://unipos.me/ja/img/common/subpagehead_background.jpeg'
          alt=''
          className='img-backgrou'
        />
        <h1 className='title'>Giới thiệu về Rating App</h1>
      </div>
      <div className='nav'>
        <ul className='toolbar'>
          <li>
            {" "}
            <i class='fa-solid fa-house'></i> Trang Đầu{" "}
            <b className='transfer'></b>
          </li>
          <li>Đặc điểm của Rating App</li>
        </ul>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-1'></div>
          <div className='col-10'>
            <h3 className='title-content'>Rating App là gì ?</h3>
          </div>
          <div className='col-1'></div>
        </div>
        <div className='row'>
          <div className='col-2'></div>
          <div className='col-5'>
            <p className='content'>
              Rating là một dịch vụ web hiện thực hóa
              <span className='letter'> Peer Bonus® *</span>
              <br /> Những trải nghiệm tích cực về lòng biết ơn, sự ngưỡng mộ và
              những phần thưởng cảm xúc làm tăng sự <br />
              <span className='letter'>an toàn về tâm lý</span> của tổ chức và
              tạo ra một tổ chức vững mạnh.
            </p>
            <div className='col-5 little'>
              <div className='little-one'>
                <h3>Tiền thưởng ngang hàng là gì? “Đồng đẳng + Tiền thưởng”</h3>
              </div>
              <div className='little-two'>
                <p>
                  Một hệ thống trong đó các nhân viên gửi “tin nhắn khen ngợi vì
                  những đóng góp của họ” và “những phần thưởng nhỏ” cho nhau.
                  Những đóng góp mà người quản lý và các phòng ban khác không
                  thấy được sẽ trở nên hữu hình, và chu kỳ đánh giá và khen ngợi
                  tích cực trở thành một thói quen.
                </p>
              </div>
            </div>
            <p>
              * Tiền thưởng ngang hàng là nhãn hiệu đã đăng ký của Rating Co.,
              Ltd.
            </p>
          </div>
          <div className='col-3'>
            <img
              src='https://unipos.me/ja/img/index/what_image.png'
              alt=''
              className='img-content'
            />
          </div>
          <div className='col-2'></div>
        </div>
        <div className='row'>
          <div className='col-8'>
            <div className='col'>
              <img
                src='https://unipos.me/ja/img/index/feature_title01.svg'
                alt=''
                className='rectangle'
              />
              <img
                src='https://unipos.me/ja/img/index/feature_image01.png'
                alt=''
                className='img-info'
              />
              <p>
                Gửi tin nhắn và ưu đãi nhỏ. Ưu đãi có <br /> thể được đổi lấy
                các phần thưởng <br /> khác nhau.
              </p>
            </div>
            <div className='col'>
              <img
                src='https://unipos.me/ja/img/index/feature_title02.svg'
                alt=''
                className='rectangle'
              />
              <img
                src='https://unipos.me/ja/img/index/feature_image02.png'
                alt=''
                className='img-info'
              />
              <p>
                Trả lời dễ dàng với phản ứng <br />
                Được thiết kế để giảm tải công việc
              </p>
            </div>
            <div className='col'>
              <img
                src='https://unipos.me/ja/img/index/feature_title03.svg'
                alt=''
                className='rectangle'
              />
              <img
                src='https://unipos.me/ja/img/index/feature_image03.png'
                alt=''
                className='img-info'
              />
              <p>
                Một phần thưởng nhỏ có thể được gửi đến cả <br /> người gửi và{" "}
                <br />
                người nhận.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FeatureBottum />
    </>
  );
}

export default FeaturePages;
