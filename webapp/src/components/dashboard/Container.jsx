import "../../assets/css/dashboard/container.css";
import homeImage from "../../assets/image/home.JPG";
import historyAll from "../../assets/image/historyall.JPG" 
import FrameVideo from "./FrameVideo";

function Container() {
  return (
    <div className='container__content'>
      <section className='section section--bgGray'>
        <div className='section__inner'>
          <p className='mil__description'>
            <font>Chỉ cần bạn chọn mục bạn muốn biết</font>
          </p>
          <h1 className='mil__title'>
            Một video cho thấy những gì Rating App có thể làm
          </h1>
          <div className='mil__video'>
            <FrameVideo />
          </div>
        </div>
      </section>
      <section className='section section--bgWhite'>
        <div className='section__inner'>
          <h1 className='section__title'>
            <font>Những gì Rating App có thể làm</font>
          </h1>
          <p className='section__description --benefit'>
            <span className='benefitHead'>
              <font>“Tăng cường hành động để thay đổi tổ chức”</font>
            </span>
            <br />
            <font>"Trực quan hóa sự đóng góp" thông qua </font>
            <br />
            <font>Rating App , tạo ra môi trường tổ chức cởi mở.</font>
          </p>
          <img className='benefitKv' src={homeImage} alt='' />
        </div>
      </section>
      <section className="section section--bgGray">
        <h1 className="section__title">
          <font>Đặc điểm của Rating App</font>
        </h1>
        <div className="what">
          <div className="what__textContainer">
            <p className="what__description">
              <span className="what__descriptionNowrap">
                <font>
                <font>Rating App là </font>
                <font>một dịch vụ web thực hiện hóa </font>
                </font>
                
              </span>
              <span className="what__descriptionEmphasis">
                <font>Peer Bonus® </font>
              </span>
              <br />
              <font>
                <font>
                  Những trải nghiệm tích cực về lòng biết ơn,
                 sự ngưỡng mộ và những phần thưởng cảm xúc làm <br />
                  tăng sự 
                </font>
              </font>
              <br />
              <span className="what__descriptionEmphasis">
                <font>an toàn về tâm lý </font>
              </span>
              <font>
                <font>
                tổ chức và tạo ra một tổ chức vững mạnh.
                </font>
              </font>
            </p>
            <div className="peerbonus">
              <div className="peerbonus__textContainer">
                <h2 className="peerbonus__title">
                  <font>
                    <font>Tiền thưởng ngang hàng là gì?</font>
                  </font>
                </h2>
                <p className="peerbonus__subTitle">
                  <font><font>
                  “Đồng đẳng + Tiền thưởng”
                    </font></font>
                </p>
              </div>
              <p className="peerbonus__description">
                <font>
                  <font>
                  Một hệ thống trong đó các nhân viên gửi “tin nhắn khen ngợi 
                  vì những đóng góp của họ” 
                  và “những phần thưởng nhỏ” cho nhau. 
                  </font>
                  <font>
                  Những đóng góp mà người quản lý và các phòng ban khác không thấy được
                   sẽ trở nên hữu hình, và chu kỳ đánh giá 
                   và khen ngợi tích cực trở thành một thói quen.
                  </font>
                </font>
              </p>
            </div>
            <p className="what__annotation">
              <span className="what__sup">
                <font>
                  <font>*</font>
                </font>
              </span>
              <font >
                <font > Tiền thưởng ngang hàng là nhãn hiệu đã đăng ký của Rating App</font>
                </font>
            </p>
          </div>
          <div className="what__imageContainer">
            <img className="what__image" src={historyAll} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
export default Container;
