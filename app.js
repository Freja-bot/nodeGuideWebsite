import express from "express";
import pages from "./templatingEngine/pages.js";

const app = express();
app.use(express.static("public"));

const PORT = 8080;


app.get("/", (req, res) => {
    res.send(pages.nodePage);
});

app.get("/javascript", (req, res) => {
    res.send(pages.javascriptPage);
});

app.listen(PORT, error =>{
    if(error){
        console.log(`Error starting the server with port: ${PORT}`)
    }
    console.log(`Server running on port: ${PORT}`)
});