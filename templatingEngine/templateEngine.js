import fs from "fs";
import path from "path"
import { populatePage } from "./render.js";

const header = readPage("public/components/header.html");
const footer = readPage("public/components/footer.html");

export function createPage(filepath) {
    const content = populatePage(readPage(path.join(process.cwd(), filepath)));
    return header + content + footer;
}

function readPage(fullpath){
    return fs.readFileSync(fullpath, "utf-8");
}