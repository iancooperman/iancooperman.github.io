// Bootstrap imports 
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// CSS imports
import './PageIntro.css';


// This component is meant to be placed at the top of a project page component.
// It provides a brief summary of what the project is.
function ProjectIntro(props) {
    return (
        <div className="PageIntro">
            <Jumbotron fluid>
                <Container>
                    <Row>
                        <Col>
                            <h1>{props.name}</h1>
                            <h4>{props.date}</h4>
                            <p>{props.description}</p>
                            <a href={props.link}>{props.link}</a>
                        </Col>
                        <Col>
                            <img src={props.image} id="preview-picture" alt={'Screenshot of "' + props.name + '" in action.'} />
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default ProjectIntro;