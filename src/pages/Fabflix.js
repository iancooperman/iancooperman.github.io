// local js
import PageIntro from '../pageComponents/PageIntro';
import { useTitle } from '../customHooks';

// Boostrap
import Container from 'react-bootstrap/Container';

function Fabflix(props) {
    useTitle("Fabflix");

    return (
        <div className="Fabflix">
            <PageIntro
                name="Fabflix"
                date="June 2020"
                description="A sample Netflix-like website created for a class."
            />

            <Container>
                <p>Fabflix is a mock-website created expressly for learning purposes. It hearkens back to the old days where movies were rented instead of streamed over the internet. This was created for the class "Project in Databases and Web Applications," and demonstrates manhy facets of modern web development. In addition to being my first foray into developing a microservices architecture, Fabflix also implements security measures such as password encryption, HTTPS, and reCAPTCHA on the login page. In addition, the application was also deployed on AWS, with some load balancing in the mix. Movi
                e and User data was stored in a MySQL server.</p>

                <p>The result is not perfect. There's so much that could be improved. This class was probably the hardest one I have ever taken. But I learned so much that I carried with me into my other classes and beyond.</p>

                <p>Please refer to one of the many demo videos below to get a feel for how Fabflix worked while it was online.</p>
            </Container>
        </div>
    );
}

export default Fabflix;