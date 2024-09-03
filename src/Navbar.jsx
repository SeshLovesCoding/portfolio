import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {

  const resume = () => {
    window.location.href = 'https://seshresume.tiiny.site';
  }

return (
<Navbar fixed="top" collapseOnSelect expand="lg" className="custom-color">
  <Container>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav id="mobile-text" className="me-auto justify-content-center fw-bold custom-text-color">
        <Nav.Link href="#features">home</Nav.Link>
        <Nav.Link href="#pricing">about</Nav.Link>
        <Nav.Link href="#projects">projects</Nav.Link>
        <Nav.Link onClick={resume}>resume</Nav.Link>
      </Nav>
      <Nav id="mobile-remove" className='flex-row fw-bold'>
      <Nav.Link id='default-cursor'><div className='online'></div></Nav.Link>
      <Nav.Link id='default-cursor'>Actively looking for work</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default NavBar;