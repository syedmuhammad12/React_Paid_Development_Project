import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-scroll';
// import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'

function BasicExample() {

  return (
    <Navbar className='bg' expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='company-name'>Website Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">  
            <Link href="#home" className='nav-item'>Services</Link>
            <Link href="#values" className='nav-item'>OUR VALUES</Link>
            <Link href="#industries" className='nav-item'>INDUSTRIES</Link>
            {/* <HashLink to="/services" className='nav-item'>SERVICES</HashLink> */}
            <Link activeClass="active" to="services" smooth={true} offset={50} duration={500}>
              SERVICES
            </Link>
            <Nav.Link href="#link" className='nav-item'>CONTACT US</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" style={{textTransform: 'uppercase'}}>SOFTWARE DEVELOPEMENT LIFE CYCLE</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={{textTransform: 'uppercase'}}>
                PARTNERSHIP MODEL
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" style={{textTransform: 'uppercase'}}>CAREERS</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

