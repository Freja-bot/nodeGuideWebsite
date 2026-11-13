# Node guide
This project is a website with frontend and backend. The website is a guide on how to make a websites with Node powered by the express package. 
It serves as my note taking for the Node fullstack subject of from my education. The website uses serverside rendering, and is wriyten as a guide for both node basics, node tools and javascript.
## How to use
As of 13-11-2026 this project is under githubs most strict licence by not being specified, since nodes packages often comes wih their own license restrictsions.
This project is currently not deployed, it also has no github packages, releases.
To use the project, copy the github repository. As it is a node project, node is required to self host. The same is true for the node package manager. (this project was developed with node major version 24) Then use call node ./app.js in a terminal, from the root of the project. (or by specifying a different path)
## Folder structure
The root folder contains:
- the main server in app.js. Here routing takes place and not a separate router.
- the projects metadata is saved in package.json
The TemplateEngine folder contains:
- the egnie is contained in templateEngine.js, that uses the other scripts
- the engine calls render.js that will read the raw html files from public