import Container from "./Container";
import HeadingNavbar from "./HeadingNavbar";
import HeadingContainer from "./HeadingContainer";
import Footer from "./Footer";
function NavbarTab() {
  return (
    <>

      <section className='mv'>
    <HeadingNavbar/>

        <div className='mv'>
          <div className='mv_bgware'></div>
          <div id='js-blog_header'>
            <HeadingContainer />
          </div>
        </div>

        <Footer />
        <Container />

      </section>
    
    </>
  );
}

export default NavbarTab;
