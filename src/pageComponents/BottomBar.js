// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Local imports
import './BottomBar.css';
import { ProfileButtons } from './ProfileButton';

function BottomBar(props) {
    const phoneNumber = "(818) 497-7167";
    const emailAddress = "ian.pl.cooperman@gmail.com";

    return (
        <Container className="BottomBar">
            <footer >
                <Row id="bottom-bar-profiles" className="justify-content-center my-3">
                    <ProfileButtons />
                </Row>
                <Row id="bottom-bar-contact" className="justify-content-center mb-4">
                    <Col id="phone-number" md="auto">Phone: {phoneNumber}</Col>
                    <Col id="email-address" md="auto">Email: <a href={"mailto:" + emailAddress}>{emailAddress}</a></Col>
                </Row>
            </footer>
        </Container>
    );
}

export default BottomBar;
