import profilePic from './profilepic.jpg'
import './Home.css';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AboutMe from './AboutMe.js';

function Home() {
    return (
        <div>
            <Jumbotron>
                <Container>
                    <Row>
                        <Col>
                            <h1>Hi. I'm Ian Cooperman.</h1>
                            <p>I'm a recently graduated Computer Science student.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor condimentum lacinia quis vel eros donec. Ornare arcu odio ut sem nulla.</p>
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



