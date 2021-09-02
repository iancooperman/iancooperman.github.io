// Local imports
import bodyText from './JavaScriptGraphicsEngineBody.md';
import { useMarkdownFile } from './utility';

// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

// react-markdown
import ReactMarkdown from 'react-markdown';

function JavaScriptGraphicsEngineBody(props) {

    const markdown = useMarkdownFile(bodyText);

    return (
        <Container>
            <ReactMarkdown children={markdown} />
        </Container>
    );
}

export default JavaScriptGraphicsEngineBody;