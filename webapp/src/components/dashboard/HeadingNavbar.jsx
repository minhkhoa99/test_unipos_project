import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function HeadingNavbar() {
    return (   <header className='headerWrap mv__header' id='headerWrap'>
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
<Navbar bg="light" expand="lg">
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="me-auto">
  <Nav.Link href="/gioi-thieu">Giới thiệu</Nav.Link>
  <Nav.Link href="#link"> Nghiên cứu điển hình</Nav.Link>
  <Nav.Link href="#link">  Cơ cấu chi phí</Nav.Link>
  <Nav.Link to="/tin-tuc">Tin tức</Nav.Link>

  <NavDropdown title="Đăng nhập" id="basic-nav-dropdown">
    <NavDropdown.Item href="/login">Đăng nhập</NavDropdown.Item>
    <NavDropdown.Item href="/signup">
     Đăng ký tài khoản
    </NavDropdown.Item>
   
  </NavDropdown>
</Nav>
</Navbar.Collapse>

</Navbar>
      </nav>
    </div>
  </header>  )
}

export default HeadingNavbar;