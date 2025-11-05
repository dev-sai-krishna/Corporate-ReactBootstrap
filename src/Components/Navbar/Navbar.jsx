// import React from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <div className="container header">
//       <nav className="navbar navbar-expand-lg bg-body m-auto p-3">
//         <div className="container-fluid">
//           <a className="navbar-brand text-danger" href="#">
//             CORPORATE
//           </a>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import Container from 'react-bootstrap/Container';
import "./Navbar.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg" className="navbar navbar-expand-lg bg-body m-auto p-3">
      <Container>
        <Navbar.Brand href="#home" className='logo'>
          CORPORATE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#home" className="nav-list">Home</Nav.Link>
            <Nav.Link href="#about" className="nav-list">About</Nav.Link>
            <Nav.Link href="#services" className="nav-list">Services</Nav.Link>
            <Nav.Link href="#works" className="nav-list">Works</Nav.Link>
            <Nav.Link href="#teams" className="nav-list">Teams</Nav.Link>
            <Nav.Link href="#testimonials" className="nav-list">Testimonials</Nav.Link>
            <Nav.Link href="#pricing" className="nav-list">Pricing</Nav.Link>
            <Nav.Link href="#blog" className="nav-list">Blog</Nav.Link>
            <Nav.Link href="#contact" className="nav-list">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
