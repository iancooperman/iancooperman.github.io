export function Figure(props) {
    return (
        <figure>
            <img src={props.src} alt=""></img>
            <figcaption>{props.caption}</figcaption>
        </figure>
    );
}

export default Figure;