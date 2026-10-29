import { createPage } from "./templateEngine.js"
import path from "path"

const nodePage = createPage(path.join(process.cwd(), "public/pages/frontpage/index.html"));
const javascriptPage = createPage("public/pages/javascript/javascript.html");

export default {
    nodePage,
    javascriptPage
}