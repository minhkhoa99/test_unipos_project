import HeadingNavbar from "../../components/dashboard/HeadingNavbar";
import Image from "../../assets/image/nghiencuudienhinh.png";
import FreatureBottom from "../../components/FeatureFooter/FeatureBottom";
function NewsPage() {
  return (
    <>
      <HeadingNavbar />
      <div className='container-top'>
        <img
          src='https://unipos.me/ja/img/common/subpagehead_background.jpeg'
          alt=''
          className='img-backgrou'
        />
        <h1 className='title'>Tin tức</h1>
      </div>
      <div className='nav'>
        <ul className='toolbar'>
          <li>
            {" "}
            <i class='fa-solid fa-house'></i> Trang Chủ{" "}
            <b className='transfer'></b>
          </li>
          <li>Tin tức</li>
        </ul>
      </div>
      <div></div>

      <FreatureBottom />
    </>
  );
}

export default NewsPage;
