import { renderTerminals } from "./renderTerminal.js";
import { renderFolders } from "./renderFolder.js";
import { renderCodeEditors } from "./renderCodeEditor.js";

const USERDATA = {
    user: "Karen",
    shell: "MINGW64",
    location: ":/c/Users/Karen",
    computer: "LENOVO"
}

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("hello");
    renderTerminals(USERDATA);
    renderFolders(USERDATA);
    renderCodeEditors();
});