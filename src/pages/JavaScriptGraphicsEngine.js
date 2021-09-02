// local pictures
import javascriptGraphicsEngineGif from './images/javascript-graphics-engine.gif';
import sceneGraphDiagram from '.images/CS-112-Final-Scene-Graph.png';

function JavaScriptGraphicsEngine(props) {
    return (
        <div className="JavaScriptGraphicsEngine">
            <ProjectIntro
                name="JavaScript Graphics Engine"
                date="December 2019"
                description="A simple Unity-like graphics engine made for the purpose of displaying simple scenes. Used to render a specific scene in the final project of my Computer Graphics class. Programmed entirely in barebones WebGL; no three.js here."
                image={javascriptGraphicsEngineGif}
                link={null}
            />

            <Container>
                <p>In the Fall Quarter of 2019, I finally had the chance to take a class I had been eagerly anticipating for years, "Computer Graphics." Long story short, it was one of the most challenging classes I've ever taken, filled with lots of mini-projects and self-learning.</p>

                <p>In the 8th week of class, we were assigned our final project: to create a 3-D scene of a car driving on the road with the sun constantly rising and setting. While I could have technically hacked a previous homework assignment into something presentable (like many people ended up doing), I decided to do one better. In the name of modularity, not to mention code cleanliness, I opted to take on the complex task of building a graphics engine from scratch.</p>

                <p>I had two weeks to complete this project: the first week was spent learning as much about 3-D scene organization as possible, including the all-mighty <a href="https://en.wikipedia.org/wiki/Scene_graph">scene graph</a>. My previous experience with Unity allowed me to get a good understanding of it quickly. By the time the week was up, I had more than a good mental model to code it up myself.
                </p>

                <p>A scene graph works with a top-level, empty object that serves as a root for the scene. Then, we render any child objects this root may happen to have, then we render the children's children and so on in a complete traversal of the tree (it's called a scene graph, but in this case, it's a tree/acyclic graph).</p>

                <img src={sceneGraphDiagram} alt="A diagram of the scene graph features in the final project."></img>

                <p>The most significant advantage of this approach is that, by parenting objects to other objects, they have the exact same relative location, rotation, and scale compared to their parents. This property came in useful when it was time to make the car move along the road and the wheels of the car spin. Instead of individually instantiating each part of the car on the same level,</p>

                <p>Unfortunately, as this was completed for a school project with specific requirements, I cannot comfortably share the complete, original code in the name of academic honesty. However, I will eagerly provide some snippets here.</p>


                <p>Unfortunately, as this was completed for a school project with specific requirements, I cannot comfortably share the complete, original code in the name of academic honesty. However, I will eagerly provide some snippets here.</p>

                <p>The <code>GameObject</code> class (named similarly to the Unity analogue) is the bread and butter of this engine. It implements the scene graph structure by allowing the attachment of other <code>GameObject</code>s, which get rendered every frame in a traversal of the resulting tree.</p>

                <pre>
                    {`
                        class GameObject: {
                            constructor() {
                                // Array of GameObjects
                                this._children = [];

                                // Array of GameComponents
                                this._components = [];
                                this._transform = new Transform();
                                this._engine = null;
                            }

                            update() {
                                for (var i = 0; i < this._components.length; i++) {
                                    this._components[i].update();
                                }
                            }

                            render(renderingEngine) {
                                for (var i = 0; i < this._components.length; i++) {
                                    this._components[i].render(renderingEngine);
                                }
                            }

                            updateAll() {
                                this.update();
                                for (var i = 0; i < this._children.length; i++) {
                                    this._children[i].updateAll();
                                }
                            }

                            renderAll(renderingEngine) {
                                this.render(renderingEngine);
                                for (var i = 0; i < this._children.length; i++) {
                                    this._children[i].renderAll(renderingEngine);
                                }
                            }
                        }
                    `}
                </pre>

                <p>If I were to create another engine, there are plenty of things I would do differently. For one, I would represent objects' rotation with Quaternions instead of a Vector, as Quaternion operations are more performant. However, perhaps the biggest regret I have with this implementation is the lack of proper lighting. There's a reason the scene ended up fully bright. I spent so much time putting the scene graph structure together that I didn't have enough time to write proper lighting code. Here's how rotation is currently handled in <code>transform.js</code>.</p>

                <pre>
                    {`
                        rotate(axis, angle) {
                            if (axis === "x") {
                                vec3.add(this.rot, this.rot, vec3.fromValues(angle, 0, 0));
                            }
                            else if (axis === "y") {
                                vec3.add(this.rot, this.rot, vec3.fromValues(0, angle, 0));
                            }
                            else if (axis === "z") {
                                vec3.add(this.rot, this.rot, vec3.fromValues(0, 0, angle));
                            }
                        }
                    `}
                </pre>
            </Container>
        </div>
    );
}

export default JavaScriptGraphicsEngine;