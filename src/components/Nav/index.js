import React from "react";
import { Container } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation(props) {
    const { currentTab, setCurrentTab } = props;
  
    return (
    <Container>
    <Navbar variant="light" sticky="top" collapseOnSelect expand="md">
    
        <Navbar.Brand href="/home">
        <img src={logo} width="90px" height="40px" alt="logo" />
        Champion Legends
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={currentTab === "/" ? "mx-2 navActive" : "mx-2"}>
            <span onClick={() => setCurrentTab("home")}>Home</span>
            </Nav.Link>
            <Nav.Link className={currentTab === "arena" ? "mx-2 navActive" : "mx-2"}>
            <span onClick={() => setCurrentTab("arena")}>Arena</span>
            
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    </Container>
  );
}

export default Navigation;