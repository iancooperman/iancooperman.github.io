// Local imports
import bodyText from './JavaScriptGraphicsEngineBody.md';

// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

// react-markdown
import ReactMarkdown from 'react-markdown';

function JavaScriptGraphicsEngineBody(props) {
    return (
        <Container>
            <ReactMarkdown source={bodyText} />
        </Container>
    );
}

export default JavaScriptGraphicsEngineBody;