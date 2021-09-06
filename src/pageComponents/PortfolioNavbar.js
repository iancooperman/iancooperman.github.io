// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

// Local imports
import ProfileButtons from './ProfileButton';
import metadata from "../pages/metadata";


function PortfolioNavbar(props) {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/" title="Home">Ian Cooperman</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Projects" id="basic-nav-dropdown">
                        {
                            metadata.map((data, index) => {
                                return data.isProject ?
                                    (<NavDropdown.Item href={data.path} >{data.name}</NavDropdown.Item>)
                                    : null;
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
