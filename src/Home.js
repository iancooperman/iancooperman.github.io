// Bootstrap imports
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Local imports
import AboutMe from './AboutMe.js';
import profilePic from './profilepic.jpg'
import './Home.css';

// Text imports
import { introHeader, introBody } from './text.js';

function Home() {
    return (
        <div>
            <Jumbotron>
                <Container>
                    <Row>
                        <Col>
                            <h1>{introHeader}</h1>
                            <p>{introBody}</p>
                        </Col>
                        <Col>
                            <img src={profilePic} alt="Profile Pic" id="profilePic"></img>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>

            <Container>
                <AboutMe />
            </Container>
        </div>
    );
}

export default Home;



