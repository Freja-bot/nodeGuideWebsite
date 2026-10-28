import fs from "fs";
import { populatePage } from "./render.js";

const header = readPage("public/components/header.html");
const footer = readPage("public/components/footer.html");

export function createPage(path) {
    const content = populatePage(readPage(path));
    return header + content + footer;
}

function readPage(path){
    return fs.readFileSync(path, "utf-8");
}