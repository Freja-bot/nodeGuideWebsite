import fs from "fs";
import { constructCodeEditor } from "./constructCodeEditors.js";
import { constructTerminal } from "./renderTerminal.js";
import { constructFolder } from "./renderFolder.js";

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
    content = constructFilesytemWindows(content);
    return header + content + footer;
}

function readPage(path){
    return fs.readFileSync(path, "utf-8");
}

function constructCodeEditors(page){
    const pattern = /{{\s*code-editor\(([\w-.]+)\)\s*}}/g;
    return page.replace(pattern, (match, id) => {
        return constructCodeEditor(id);
    });
}

function constructTerminals(page){
    const pattern = /{{\s*terminal\(([\w-.]+)\)\s*}}/g;
    return page.replace(pattern, (match, id) => {
        return constructTerminal(id, USERDATA);
    });
}

function constructFilesytemWindows(page){
    const pattern = /{{\s*file-system\(([\w-.]+)\)\s*}}/g;
    return page.replace(pattern, (match, id) => {
        return constructFolder(id, USERDATA);
    });
}