import { renderTerminals } from "./renderTerminal.js";
import { renderFolders } from "./renderFilesystemWindow.js";
import { rendrCodeEditor } from "./renderCodeEditors.js";

const USERDATA = {
    user: "Karen",
    shell: "MINGW64",
    location: ":/c/Users/Karen",
    computer: "LENOVO"
}

renderTerminals(USERDATA);
renderFolders(USERDATA);
renderCodeEditors();