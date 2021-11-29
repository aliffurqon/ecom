import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeaderAdmin = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to="/">ADMIN TOKO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-link">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/users" className="nav-link">
              USERS
            </Nav.Link>
            <Nav.Link as={Link} to="/category" className="nav-link">
              CATEGORIES
            </Nav.Link>
            <Nav.Link as={Link} to="/products" className="nav-link">
              PRODUCTS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderAdmin;
