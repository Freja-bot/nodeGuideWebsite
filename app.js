import express from "express";
import path from "path";

const app = express();
app.use(express.static("public"));

const PORT = 8080;


app.get("/", (req, res) => {
    res.sendFile(path.resolve("public", "index.html"));
});

app.listen(PORT, error =>{
    if(error){
        console.log(`Error starting the server with port: ${PORT}`)
    }
    console.log(`Server running on port: ${PORT}`)
});