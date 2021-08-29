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
          <Button variant="link" className="profile-button">
            <a href="https://github.com/iancooperman" ><GithubIcon />
            </a>
          </Button>
          <Button variant="link" className="profile-button">
            <a href="https://www.linkedin.com/in/ian-pl-cooperman/" >
              <LinkedInIcon />
            </a>
          </Button>
          <Button variant="link" className="profile-button">
            <a href="https://www.kaggle.com/iancooperman42"><KaggleIcon /></a>

          </Button>
        </Navbar.Collapse>
      </Navbar>

      <Home />
    </div>
  );
}

export default App;
