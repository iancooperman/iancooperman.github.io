import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from './Home'
import ProfileButton from './ProfileButton';
import { GithubIcon, LinkedInIcon, KaggleIcon } from './Icons';



import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import { projectList } from "./Projects"

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Ian Cooperman</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              {
                projectList.map((projectInfo, index) => {
                  return (
                    <NavDropdown.Item href={projectNameToURL(projectInfo.name)} >{projectInfo.name}</NavDropdown.Item>
                  )
                })
              }
            </NavDropdown>
          </Nav>
          <ProfileButton
            url="https://github.com/iancooperman"
            icon={<GithubIcon />}
          />
          <ProfileButton
            url="https://www.linkedin.com/in/ian-pl-cooperman/"
            icon={<LinkedInIcon />}
          />
          <ProfileButton
            url="https://www.kaggle.com/iancooperman42"
            icon={<KaggleIcon />}
          />
        </Navbar.Collapse>
      </Navbar>

      <Route path="/" exact>
        <Home />
      </Route>

      {/* Give all the projects a proper route name */}
      {
        projectList.map((projectInfo, index) => {
          return (
            <Route key={index} path={projectNameToURL(projectInfo.name)}>
              Hey
              {projectInfo.projectPage}
            </Route>
          )
        })
      }

    </Router>
  );
}

function projectNameToURL(name) {
  let lower = name.toLowerCase();
  let final = "/projects/" + lower.replace(/ /g, "-");

  return final;
}

export default App;
