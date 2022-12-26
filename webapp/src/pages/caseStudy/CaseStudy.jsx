import HeadingNavbar from "../../components/dashboard/HeadingNavbar";
import Image from "../../assets/image/nghiencuudienhinh.png";
import FreatureBottom from "../../components/FeatureFooter/FeatureBottom";

function CaseStudy() {
  return (
    <>
      <HeadingNavbar />
      <div className='container-top'>
        <img
          src='https://unipos.me/ja/img/common/subpagehead_background.jpeg'
          alt=''
          className='img-backgrou'
        />
        <h1 className='title'>Nghiên cứu điển hình</h1>
      </div>
      <div className='nav'>
        <ul className='toolbar'>
          <li>
            {" "}
            <i class='fa-solid fa-house'></i> Trang Chủ{" "}
            <b className='transfer'></b>
          </li>
          <li>Nghiên cứu điển hình</li>
        </ul>
      </div>
      <div></div>
      <div>
        <img src={Image} alt='' style={{ width: "80%", marginLeft: "10%" }} />
      </div>
      <FreatureBottom />
    </>
  );
}

export default CaseStudy;
