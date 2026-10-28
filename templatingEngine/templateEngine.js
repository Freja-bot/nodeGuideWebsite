import fs from "fs";
import { constructCodeEditor } from "./constructCodeEditors.js";
import { constructTerminal } from "./renderTerminal.js";

const header = readPage("public/components/header.html");
const footer = readPage("public/components/footer.html");
const USERDATA = {
    user: "Karen",
    shell: "MINGW64",
    location: ":/c/Users/Karen",
    computer: "LENOVO"
}

export function createPage(path) {
    let content = readPage(path);
    content = constructCodeEditors(content);
    content = constructTerminals(content);
    return header + content + footer;
}

function readPage(path){
    return fs.readFileSync(path, "utf-8");
}

function constructCodeEditors(page){
    //console.log(page)
    const pattern = /{{\s*code-editor\(([\w-.]+)\)\s*}}/g;
    return page.replace(pattern, (match, id) => {
        console.log(`The found match: ${match}
            The found id: ${id}`);
        return constructCodeEditor(id);
        //console.log(`The found id: ${id}`);
    });
    /*console.log(test);
    const test = pattern.exec(page);
    test.forEach(element => {
        console.log(`line: ${element}`);
    });
    return test;*/
}

function constructTerminals(page){
    const pattern = /{{\s*terminal\(([\w-.]+)\)\s*}}/g;
    return page.replace(pattern, (match, id) => {
        console.log(`The found match: ${match}
            The found id: ${id}`);
        return constructTerminal(id, USERDATA);
        //console.log(`The found id: ${id}`);
    });
}