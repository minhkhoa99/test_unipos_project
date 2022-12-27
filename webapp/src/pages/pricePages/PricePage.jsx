import HeadingNavbar from "../../components/dashboard/HeadingNavbar";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import price from "../../assets/image/price.png";
import FreatureBottom from "../../components/FeatureFooter/FeatureBottom";
function PricePage() {
  return (
    <>
      <HeadingNavbar />
      <div className='container-top'>
        <img
          src='https://unipos.me/ja/img/common/subpagehead_background.jpeg'
          alt=''
          className='img-backgrou'
        />
        <h1 className='title'>Cơ cấu chi phí</h1>
      </div>
      <div className='nav'>
        <ul className='toolbar'>
          <li>
            {" "}
            <i class='fa-solid fa-house'></i> Trang Chủ{" "}
            <b className='transfer'></b>
          </li>
          <li>Cơ cấu chi phí</li>
        </ul>
      </div>
      <div>
        <img src={price} alt='' style={{ width: "80%", marginLeft: "10%" }} />
      </div>
      <FreatureBottom />
    </>
  );
}

export default PricePage;
