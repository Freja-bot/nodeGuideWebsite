import { createPage } from "./templateEngine.js"

const nodePage = createPage("public/pages/frontpage/index.html");
const javascriptPage = createPage("public/pages/javascript/javascript.html");

export default {
    nodePage,
    javascriptPage
}