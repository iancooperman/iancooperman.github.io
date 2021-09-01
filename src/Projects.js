// Bootstrap imports
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// local imports
import JavaScriptGraphicsEngineBody from './JavaScriptGraphicsEngineBody';
import javascriptGraphicsEngineGif from './javascript-graphics-engine.gif';

// A convenient place to store info relating to different projects.
export class ProjectInfo {
    constructor(name, date, description, mainImage, link, body) {
        this.name = name;
        this.date = date;
        this.description = description;
        this.mainImage = mainImage;
        this.link = link;
        this.body = body;
    }
}

// TODO: Find a more contained way to add to this list, maybe through a JSON file.
export let projectList = [
    new ProjectInfo(
        "Dyetr",
        "March 2021",
        "A calorie-counting app with a food recommendation system.",
        null,
        "https://github.com/iancooperman/Dyetr",
        null
    ),
    new ProjectInfo(
        "Search Engine",
        "March 2020",
        "A simple search engine made to search the ics.uci.edu domain. Constructed in an inverted index and ranks links by a tf-idf score.",
        null,
        null,
        null
    ),
    new ProjectInfo(
        "JavaScript Graphics Engine",
        "December 2019",
        "A simple Unity-like graphics made for the purpose of displaying simple scenes. Used to render a specific scene in the final project of my Computer Graphics class. Programmed entirely in barebones WebGL; no three.js here.",
        javascriptGraphicsEngineGif,
        null,
        <JavaScriptGraphicsEngineBody />
    )
];

// This component is meant to be placed at the top of a project page component.
// It provides a brief summary of what the project is.
export function ProjectIntro(props) {
    let projectInfo = props.projectInfo;

    return (
        <div>
            <Jumbotron>
                <Container>
                    <Row>
                        <Col>
                            <h1>{projectInfo.name}</h1>
                            <h4>{projectInfo.date}</h4>
                            <p>{projectInfo.description}</p>
                            <a href={projectInfo.link}>{projectInfo.link}</a>
                        </Col>
                        <Col>
                            <img src={projectInfo.mainImage} id="preview-picture" alt={'Screenshot of "' + projectInfo.name + '" in action.'} />
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    );
}

