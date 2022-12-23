import { Link } from "react-router-dom";
import Container from "./Container";
import Footer from "./Footer";
import HeadingContainer from "./HeadingContainer";
function Navbar() {
  return (
    <>
      <section className='mv'>
        <div className='mv'>
          <div className='mv_bgware'></div>
          <div id='js-blog_header'>
            <header className='headerWrap mv__header' id='headerWrap'>
              <div className='header' id='js-header__border'>
                <h1 className='header__logo' id='js-header__logo'>
                  <a className='bottom' href='/'>
                    <img
                      src='https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo-Rikkei.png'
                      alt='Rikkei'
                    ></img>
                  </a>
                </h1>
                <span className='header__hamberger' id='js-hamberger_open'>
                  <span className='header__hambergerLineTopSp'></span>{" "}
                  <span className='header__hambergerLineMiddleSp'></span>{" "}
                  <span className='header__hambergerLineBottomSp'></span>{" "}
                </span>
                <span
                  className='header__hamberger--scroll'
                  id='js-hamberger_scroll_open'
                >
                  <span className='header__hambergerLineTopSp--scroll'></span>{" "}
                  <span className='header__hambergerLineMiddleSp--scroll'></span>{" "}
                  <span className='header__hambergerLineBottomSp--scroll'></span>
                </span>
                <nav className='header__nav' id='js-header__nav'>
                  <ul className='nav justify-content-center'>
                    <li className='nav-item'>
                      <a
                        className='nav-link active'
                        aria-current='page'
                        href='#'
                      >
                        Giới thiệu
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link' href='#'>
                        Nghiên cứu điển hình
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link' href='#'>
                        Cơ cấu chi phí
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link'>Tin tức</a>
                    </li>
                    <li className='nav-item'>
                      <a href='http://localhost:3000/home' className='nav-link'>
                        Blogs
                      </a>
                    </li>
                    <li className='nav-item'>
                      <Link to='/login' className='nav-link'>
                        Đăng nhập
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>
            <HeadingContainer />
          </div>
        </div>
        <Footer />
      </section>
      <Container />
    </>
  );
}

export default Navbar;
