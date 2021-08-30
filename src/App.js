import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from './Home'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import { projectList, ProjectIntro } from "./Projects"

function App() {
  return (
    <Router>
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
        </Navbar.Collapse>
      </Navbar>

      <Route path="/" exact>
        <Home />
      </Route>

      {/* Give all the projects a proper route name */}
      {
        projectList.map((projectInfo, index) => {
          let lower = projectInfo.name.toLowerCase();
          let final = lower.replace(/ /g, "-");

          return (
            <Route key={index} path={"/" + final}>
              Hey
              {projectInfo.projectPage}
            </Route>
          )
        })
      }

    </Router>
  );
}

export default App;
