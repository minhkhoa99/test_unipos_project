import Nav from "react-bootstrap/Nav";

import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function HeadingNavbar() {
  return (
    <header className='headerWrap mv__header' id='headerWrap'>
      <div className='header' id='js-header__border'>
        <h1 className='header__logo' id='js-header__logo'>
          <Nav.Link className='bottom' href='/'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo-Rikkei.png'
              alt='Rikkei'
            ></img>
          </Nav.Link>
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
          <Navbar bg='light' expand='lg'>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link href='/gioi-thieu'>Giới thiệu</Nav.Link>
                <Nav.Link href='nghien-cuu-dien-hinh'>
                  {" "}
                  Nghiên cứu điển hình
                </Nav.Link>
                <Nav.Link href='/chi-phi'> Cơ cấu chi phí</Nav.Link>
                <Nav.Link href='/tin-tuc'>Tin tức</Nav.Link>

                <Nav.Link href='/login'>Đăng nhập</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </nav>
      </div>
    </header>
  );
}

export default HeadingNavbar;
