import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Home from './Home'
import { GithubIcon, LinkedInIcon, KaggleIcon } from './Icons';



function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Ian Cooperman</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Dyetr</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Search Engine</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">JavaScript Game Engine</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant="link">
            <GithubIcon />
          </Button>
          <Button variant="link">
            <LinkedInIcon />
          </Button>
          <Button variant="link">
            <KaggleIcon />
          </Button>
        </Navbar.Collapse>
      </Navbar>

      <Home />
    </div>
  );
}

export default App;
