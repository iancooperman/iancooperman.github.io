export class ProjectInfo {
    constructor(name, date, description, images, link) {
        this.name = name;
        this.date = date;
        this.description = description;
        this.images = images;
        this.link = link;
    }
}

export class ProjectImage {
    constructor(image, caption) {
        this.image = image;
        this.caption = caption;
    }
}

export function Project() {
    let projectInfo = this.props.projectInfo;

    return (
        <div>
            <h1>{projectInfo.name}</h1>
        </div>
    );
}
