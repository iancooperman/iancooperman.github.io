// local js
import PageIntro from '../pageComponents/PageIntro';

// Bootstrap import
import Container from 'react-bootstrap/Container';

// YouTube import 
import YouTube from 'react-youtube';

// CSS
import './Dyetr.css';

function Dyetr(props) {
    return (
        <div className="Dyetr">
            <PageIntro
                name="Dyetr"
                date="March 2021"
                description="A calorie-counting app with a food recommendation system."
                link="https://github.com/iancooperman/Dyetr"
            />

            <Container>
                <h2>It Knows What Works</h2>

                <p>We evaluated the similarities of food.</p>

                <p>Similar foods will be close together in this embedding space.</p>

                <p>We downloded data from the USDA, and imported it into our </p>

                <p>As it turns out, using only the amount of calories and grams of carbs, protien, and fat, These four metrics alone gave shockingly good results.</p>

                <p>A full explanation and demo can be seen below. I'd like to thank the wonderful Isaiah Rodriguez and Nathaniel Nebel for being there at every step of this project.</p>

                <YouTube id="dyetr-demo" videoId="btsoYqPpQZQ" />
            </Container>
        </div>
    );
}

export default Dyetr;