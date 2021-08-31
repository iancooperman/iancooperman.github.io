// Local imports

// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';


function JavaScriptGraphicsEngineBody(props) {
    return (
        <Container>
            <p>In Fall Quarter of 2019, I finally had the chance to take a class I had been eargerly anticipating for years, "Computer Graphics".</p>

            <p>While I could have technically hacked a previous homework assignment into something presentable (its what many people did), I decided to do one better. In the name of modularity, not to mention code cleanliness, I opted to take on the complex task of building a graphics engine from scratch.</p>

            <p>I had two weeks to complete this project: the first week was spent leanning as much about 3-D scene organization as possible, including the all-mighty <a href="https://en.wikipedia.org/wiki/Scene_graph">scene graph.</a> My previous experience with Unity allowed me to get a good understanding of it quickly. By the time the week was up, I had a more than good enough understanding to code it up myself.</p>

            <p>Unfortunately, as this was completed for a school project with specific requirements, in the name of academic honesty, I cannot share the full code.However, I will eagerly provide some snippets here.</p>

            <code>class GameObject:</code>

            <p>How a scene graph basically works is that there is a top-level, empty object that serves as a root for
             the scene. Then, we render any child objects this root may happen to have, then we render the children's children and so on in a full traversal of the tree (it's called a scene graph, but in this case, it's a tree/acyclic graph).</p>

             <p>The biggest advantage of this approach is that, by parenting objects to other objects, they have the exact same relative location, rotation, and scale commpared to their parents. This property came in useful when it was time to make the car move along the road and the wheels of the car spin. Instead of individually instantiating each part of the car on the same level, </p>

             {/* <img alt="Diagram of a scene graph.">Image Courtesy of </img> */}

            <p>If I were to creat another engine, there are plenty of things I would do different. For one, I would perform rotations with Quaternions instead </p>

            

        </Container>
    );
}

export default JavaScriptGraphicsEngineBody;