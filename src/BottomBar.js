// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Local imports
import './BottomBar.css';

function BottomBar(props) {
    const phoneNumber = "(818) 497-7167";
    const emailAddress = "ian.pl.cooperman@gmail.com";

    return (
        <Container className="BottomBar">
            <footer >
                <Row id="bottom-bar-profiles"></Row>
                <Row id="bottom-bar-contact">
                    <Col id="phone-number" md="auto">{phoneNumber}</Col>
                    <Col id="email-address" md="auto"><a href={"mailto:" + emailAddress}>{emailAddress}</a></Col>
                </Row>
            </footer>
        </Container>
    );
}

export default BottomBar;
