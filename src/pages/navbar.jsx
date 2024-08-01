
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css';
const navbar = () => {
  return (
    <Navbar expand="lg" className=" bgn  navbar-dark ">
      <Container>        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/snippets">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <NavDropdown title="Actions" id="basic-nav-dropdown">
              <NavDropdown.Item href="/snippets/create-snippets">Create Snippets</NavDropdown.Item>
              <NavDropdown.Item href="/snippets/get-snippets">
              Fetch Snippets
              </NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default navbar
