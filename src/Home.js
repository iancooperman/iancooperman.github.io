import profilePic from './profilepic.jpg'

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Home() {
    return (
        <div>
            <Jumbotron>
                <Container>
                    <h1>Hi. I'm Ian Cooperman.</h1>
                    <p>I'm a recently graduated Computer Science student.</p>
                    <img src={profilePic} alt="Profile Pic"></img>
                </Container>
            </Jumbotron>

            <Container>
                <h2>About Me</h2>
            </Container>
        </div>
    );
}

export default Home;



