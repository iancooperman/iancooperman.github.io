export function projectNameToURL(name) {
    let lower = name.toLowerCase();
    let final = "/projects/" + lower.replace(/ /g, "-");

    return final;
}
