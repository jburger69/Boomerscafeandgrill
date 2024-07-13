import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../layout.css';

const Layout = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="Grill">Grill</Nav.Link>
            <Nav.Link href="Cafe">Cafe</Nav.Link>
            <Nav.Link href="Catering">Catering</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
      <div className="footer">
        © 2024 Copyright: Boomers Cafe & Grill
      </div>
    </>
  )
};

export default Layout;