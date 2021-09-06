import { projectNameToURL } from '../utility.js';


// import page components
import Home from './Home';
import Dyetr from './Dyetr';
import Fabflix from './Fabflix';
import JavaScriptGraphicsEngine from './JavaScriptGraphicsEngine';

// TODO: Find a more contained way to add to this list, maybe through a JSON file.
// export let projectList = [
//     new ProjectInfo(
//         "Dyetr",
//         "March 2021",
//         "A calorie-counting app with a food recommendation system.",
//         null,
//         "https://github.com/iancooperman/Dyetr",
//         null
//     ),
//     new ProjectInfo(
//         "Search Engine",
//         "March 2020",
//         "A simple search engine made to search the ics.uci.edu domain. Constructed in an inverted index and ranks links by a tf-idf score.",
//         null,
//         null,
//         null
//     ),
//     new ProjectInfo(
//         "JavaScript Graphics Engine",
//         "December 2019",
//         "A simple Unity-like graphics made for the purpose of displaying simple scenes. Used to render a specific scene in the final project of my Computer Graphics class. Programmed entirely in barebones WebGL; no three.js here.",
//         javascriptGraphicsEngineGif,
//         null,
//         <JavaScriptGraphicsEngineBody />
//     )
// ];

let metadata = [
    {
        name: "Home",
        path: "/",
        isProject: false,
        component: Home
    },
    {
        name: "Dyetr",
        path: projectNameToURL("Dyetr"),
        isProject: true,
        component: Dyetr
    },
    {
        name: "Fabflix",
        path: projectNameToURL("Fabflix"),
        isProject: true,
        component: Fabflix
    },
    {
        name: "JavaScript Graphics Engine",
        path: projectNameToURL("JavaScript Graphics Engine"),
        isProject: true,
        component: JavaScriptGraphicsEngine
    }
];

export default metadata;


