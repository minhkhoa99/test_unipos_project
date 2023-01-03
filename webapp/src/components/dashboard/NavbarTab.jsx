import Container from "./Container";
import HeadingNavbar from "./HeadingNavbar";
import HeadingContainer from "./HeadingContainer";
import FreatureBottom from "../FeatureFooter/FeatureBottom";
import Footer from "./Footer";
function NavbarTab() {
  return (
    <>
      <section className='mv'>
        <HeadingNavbar />

        <div className='mv'>
          <div className='mv_bgware'></div>
          <div id='js-blog_header'>
            <HeadingContainer />
          </div>
        </div>

        <Footer />
        <Container />
      </section>
      <FreatureBottom />
    </>
  );
}

export default NavbarTab;
