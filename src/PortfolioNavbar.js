// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

// Local imports
import ProfileButtons from './ProfileButton';
import { projectList } from "./Projects";
import { projectNameToURL } from './utility'


function PortfolioNavbar(props) {
    return (
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
                <ProfileButtons />
            </Navbar.Collapse>
        </Navbar>
    );
}

export default PortfolioNavbar;
