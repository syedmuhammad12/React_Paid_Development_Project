import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { HashLink } from 'react-router-hash-link';
import ContactUsForm from '../ContactUsForm';
import Service from '../Services/Service';
import Sdlc from '../SDLC/Sdlc';
import PartnershipModel from '../PartnershipModel/PartnershipModel';
import Industry from '../Industry/Industry';
import Home from '../Home/Home';



export default function Navbar_update(props) {
  return (
    <Navbar bg="light" expand="lg" style={{backgroundColor:props.back_color}}>
      <Container>
        <Navbar.Brand href="#home" className="me-auto">{props.web_name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
            
            <Nav.Link as= {HashLink} to="/home#home"  >HOME</Nav.Link>
            <Nav.Link as= {HashLink} to="/home#values"  >OUR VALUES</Nav.Link>
            <Nav.Link as= {HashLink} to="/industry#industry"  >INDUSTRIES</Nav.Link>
            <Nav.Link as= {HashLink} to="/services#services"  >SERVICES</Nav.Link>
            <Nav.Link as= {HashLink} to="/sdlc#sdlc"  >SOFTWARE DEVELOPEMENT LIFE CYCLE</Nav.Link>
            <Nav.Link as= {HashLink} to="/partnershipmodel#partnershipmodel"  >PARTNERSHIP MODEL</Nav.Link>
            <Nav.Link as= {HashLink} to="/contact#contact"  >CONTACT US</Nav.Link>
            <Nav.Link as= {HashLink}    onClick={()=>{alert("No info");}}>CAREERS</Nav.Link>
            {/* <Nav.Link as= {HashLink}    onClick={()=>{alert("No info");}}>Home</Nav.Link> */}
            
            
            
            
            
            
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}




          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
