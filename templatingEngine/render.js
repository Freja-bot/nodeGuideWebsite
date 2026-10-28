import { renderTerminals } from "./renderTerminal.js";
import { renderFolders } from "./renderFolder.js";
import { rendrCodeEditor } from "./constructCodeEditors.js";

const USERDATA = {
    user: "Karen",
    shell: "MINGW64",
    location: ":/c/Users/Karen",
    computer: "LENOVO"
}

renderTerminals(USERDATA);
renderFolders(USERDATA);
renderCodeEditors();