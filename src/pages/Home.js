// Bootstrap imports
import Container from 'react-bootstrap/Container';

// Local imports
import profilePic from '../images/profilepic.jpg'
import './Home.css';
import PageIntro from '../pageComponents/PageIntro';

// Text imports

function Home() {
    return (
        <div className="Home">
            <PageIntro
                name="Hi. I'm Ian Cooperman."
                description="I'm a recent Computer Science graduate from UC Irvine. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Tortor condimentum lacinia quis vel eros donec.Ornare arcu odio ut sem nulla."
                image={profilePic}
            />

            <Container>
                <h2>About Me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor condimentum lacinia quis vel eros donec. Ornare arcu odio ut sem nulla. Ipsum dolor sit amet consectetur adipiscing elit ut. At lectus urna duis convallis convallis tellus id interdum velit. Tempor nec feugiat nisl pretium. Magna eget est lorem ipsum dolor sit amet consectetur. Mauris cursus mattis molestie a iaculis at erat. Turpis massa sed elementum tempus egestas sed. Tincidunt arcu non sodales neque sodales ut etiam. Dignissim convallis aenean et tortor at risus viverra. Sed felis eget velit aliquet sagittis id consectetur purus. Iaculis nunc sed augue lacus viverra. Eget nulla facilisi etiam dignissim diam quis enim.</p>

            </Container>
        </div>
    );
}

export default Home;


