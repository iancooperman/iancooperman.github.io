// local js
import PageIntro from '../pageComponents/PageIntro';

// Bootstrap import
import Container from 'react-bootstrap/Container';

// CSS
import './Dyetr.css';

// images
import DyetrPreviewImage from '../images/Dyetr Preview Image.png';
import DemoVideo from '../images/45_CasualProcrastination.mov';

function Dyetr(props) {
    return (
        <div className="Dyetr">
            <PageIntro
                name="Dyetr"
                date="March 2021"
                description="A calorie-counting app with a food recommendation system."
                link="https://github.com/iancooperman/Dyetr"
                image={DyetrPreviewImage}
            />

            <Container>
                <p>Dyetr is a calorie-counting app built for one of the final classes taken for my undergrad degree, "Next Generation Search Systems." We were assigned to get into groups of three and create a health-related mobile app that has a recommendation system. With these requirements in mind, we came up with the idea to help people with their weight loss by recommending them foods to eat. Dyetr recommends foods based on what you've previously shown successful weight loss with. For instance, if eat a small breakfast seems to help you with losing weight, Dyetr will recommend similarly small meals for all future breakfasts. You could have ice cream for dinner, and Dyetr would recommend other deserts if it seemed to work!</p>

                <p>We evaluated the similarities of food by taking advantage of Neo4j's data science tools. Neo4j is a graph database; instead of storing data in tables like an SQL database, all data is directly organized into entities and relationships. Not only do I personally find this to be a more intuitive model. Because Neo4j databases are graphs, we can run graph algorithms on it!</p>

                <p>After we downloded data on many foods from the USDA, and ingested it into our Neo4j database, we were able to easily calculate the similarities between all the fooods in there. For the purposes of calculating the similarity, we opted to represent each food as a vector of four values, the amount of calories and the grams of carbs, protein, and fat. In this new embedding space, similar foods are grouped very closely together.</p>

                <p>After calculating the distances between all the foods in the embedding space, it was a simple matter of recommending foods close to the ones the user stayed under the personal calorie goal with.</p>

                <p>As it turned out, using only the amount of calories and grams of carbs, protien, and fat, These four metrics alone gave shockingly good results.</p>

                <p>A full explanation and demo can be seen in the below demo video. I'd like to thank the wonderful Isaiah Rodriguez and Nathaniel Nebel for being there at every step of this project.</p>

                <video width="320" height="240" controls>
                    <source src={DemoVideo}></source>
                </video>
            </Container>
        </div>
    );
}

export default Dyetr;