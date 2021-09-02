import { useState, useEffect } from 'react';

export function projectNameToURL(name) {
    let lower = name.toLowerCase();
    let final = "/projects/" + lower.replace(/ /g, "-");

    return final;
}

export function useMarkdownFile(file) {
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch(file).then(res => res.text()).then(text => setMarkdown(text));
    }, [file]);

    return markdown;
}