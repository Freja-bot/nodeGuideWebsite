import express from "express";
import { createPage } from "./templatingEngine/templateEngine.js"

const app = express();
app.use(express.static("public"));

const PORT = 8080;


app.get("/", (req, res) => {
    res.send(createPage("public/pages/frontpage/index.html"));
});

app.get("/javascript", (req, res) => {
    res.send(createPage("public/pages/javascript/javascript.html"));
});

app.listen(PORT, error =>{
    if(error){
        console.log(`Error starting the server with port: ${PORT}`)
    }
    console.log(`Server running on port: ${PORT}`)
});