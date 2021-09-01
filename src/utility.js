export function projectNameToURL(name) {
    let lower = name.toLowerCase();
    let final = "/projects/" + lower.replace(/ /g, "-");

    return final;
}



// export function Code(props) {
//     return (
//         <pre>
//             {props.code}
//         </pre>
//     );
// }