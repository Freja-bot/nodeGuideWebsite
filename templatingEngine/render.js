import { constructCodeEditor } from "./renderCodeEditors.js";
import { constructTerminal } from "./renderTerminal.js";
import { constructFilesytemWindow } from "./renderFilesystemWindow.js";

const USERDATA = {
    user: "Karen",
    shell: "MINGW64",
    location: ":/c/Users/Karen",
    computer: "LENOVO"
}

export function populatePage(page){
    page = constructCodeEditors(page);
    page = constructTerminals(page);
    page = constructFilesytemWindows(page);
    return page;
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
        return constructFilesytemWindow(id, USERDATA);
    });
}