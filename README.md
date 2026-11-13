# Node guide
This project is a website with frontend and backend. The website is a guide on how to make a websites with Node powered by the express package. 
It serves as my note taking for the Node fullstack subject of from my education. The website uses serverside rendering, and is wriyten as a guide for both node basics, node tools and javascript.
## How to use
As of 13-11-2026 this project is under githubs most strict licence by not being specified, since nodes packages often comes wih their own license restrictsions.
This project is currently not deployed, it also has no github packages, releases.
To use the project, copy the github repository. As it is a node project, node is required to self host. The same is true for the node package manager. (this project was developed with node major version 24) Then use call node ./app.js in a terminal, from the root of the project. (or by specifying a different path)
## Folder structure
The root folder contains:
- the main server in app.js. Here routing takes place and not a separate router. The endpoints use pages.js to get rendered pages.
- the projects metadata is saved in package.json

The TemplateEngine folder contains:
- the pages.js serves as the interface for creating pages. It uses the templateing engine. by providing a  path that points to a html file with the pages main content, and expects a finished page to be returned..
- the egnie is contained in templateEngine.js. It reads the relevant html files, populates it and puts the header, footer and main page togehter. The population is handled by render.js.
- the engine calls render.js, that uses regular expressions on the html files, that look for: {{ aPredefinedStyleType(aValidKeyThatPointsToItsData) }}. Then it calls renderes for code editors, terminals and file system window.

The public folder contains files that are public to the client:
- a pages folder that contain folders for html files. These files contain the main content of each page.
- an assets folder for a css, javascript and components. The componets contain html reusable components like the header and footer.