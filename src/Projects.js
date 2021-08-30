export class ProjectInfo {
    constructor(name, date, description, mainImage, link) {
        this.name = name;
        this.date = date;
        this.description = description;
        this.mainImage = mainImage;
        this.link = link;
    }
}

export let projectList = [
    new ProjectInfo(
        "Dyetr",
        "March 2021",
        "A calorie-counting app with a food recommendation system.",
        null,
        "https://github.com/iancooperman/Dyetr"
    ),
    new ProjectInfo(
        "Search Engine",
        "March 2020",
        "A simple search engine made to search to ics.uci.edu domain. Constructed in an inverted index and ranks links by a tf-idf score.",
        null,
        null
    ),
    new ProjectInfo(
        "JavaScript Graphics Engine",
        "December 2019",
        "A simple Unity-like graphics made for the purpose of displaying simple scenes. Used to render a specific scene in the final project of my Computer Graphics class. Programmed entirely in barebones WebGL; no three.js here.",
        null,
        null
    )
];

export function ProjectIntro() {
    let projectInfo = this.props.projectInfo;

    return (
        <div>
            <h1>{projectInfo.name}</h1>
        </div>
    );
}

