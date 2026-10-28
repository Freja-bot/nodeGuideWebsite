const TERMINALDATA = new Map();
TERMINALDATA.set(
    "node-version", 
    {
        command: "node -v",
        output: "v24.19.0"
    });
TERMINALDATA.set(
    "node-execute",
    {
        command: "node app.js",
        output: "Hello World!"
    }
);
TERMINALDATA.set(
    "node-hello-user",
    {
        command: "node app.js",
        output: "Hello user"
    }
);
TERMINALDATA.set(
    "node-hello-user-with-age",
    {
        command: "node app.js",
        output: "Hello user age: 24"
    }
);
TERMINALDATA.set(
    "backsticks-multiline",
    {
        command: "node app.js",
        output: ["to bee or not be", "i'th th'ere grandest reflection thi universe posed", "let thy question thy sanity`;"]
    }
);
TERMINALDATA.set(
    "backsticks-interpolation",
    {
        command: "node app.js",
        output: "Hello Freja, how are you?"
    }
);
TERMINALDATA.set(
    "object-dotting",
    {
        command: "node app.js",
        output: ["Freja", "developer"]
    }
);
TERMINALDATA.set(
    "object-dotting-into-object",
    {
        command: "node app.js",
        output: "Copenhagen"
    }
);
TERMINALDATA.set(
    "object-add-property",
    {
        command: "node app.js",
        output: ["{", "name: Freja,", "preferences: {", "color-theme: astral,", "cookies: necessary only", "}", "}"]
    }
);
TERMINALDATA.set(
    "install-express",
    {
        command: "npm install express",
        output: ["", "added 65 packages in 7s", "", "28 packages are looking for funding", "run `npm fund` for details"]
    }
);
TERMINALDATA.set(
    "missing-express",
    {
        command: "node app.js",
        output: ["node:internal/modules/package_json_reader:301", " ", "throw new ERR_MODULE_NOT_FOUND(packageName, fileURLToPath(base), null);", "", "Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'express' imported from C:\\Users\\Karen\\vs-code-programmer\\Node\\test\\app.js", "at Object.getPackageJSONURL (node:internal/modules/package_json_reader:301:9)", "at packageResolve (node:internal/modules/esm/resolve:768:81)", "at moduleResolve (node:internal/modules/esm/resolve:859:18)", "at defaultResolve (node:internal/modules/esm/resolve:992:11)", "at #cachedDefaultResolve (node:internal/modules/esm/loader:701:20)", "at #resolveAndMaybeBlockOnLoaderThread (node:internal/modules/esm/loader:721:38)", "at ModuleLoader.resolveSync (node:internal/modules/esm/loader:759:56)", "at #resolve (node:internal/modules/esm/loader:683:17)", "at ModuleLoader.getOrCreateModuleJob (node:internal/modules/esm/loader:603:35)", "at ModuleJob.syncLink (node:internal/modules/esm/module_job:163:33) {", "code: 'ERR_MODULE_NOT_FOUND'", "}", "", "Node.js v24.19.0"]
    }
);
TERMINALDATA.set(
    "npm-init",
    {
        command: "npm init",
        output: ["This utility will walk you through creating a package.json file.", "It only covers the most common items, and tries to guess sensible defaults.", "", "See `npm help init` for definitive documentation on these fields and exactly what they do.", "", "Use `npm install <pkg>` afterwards to install a package and save it as a dependency in the package.json file.", "", "Press ^C at any time to quit.", "package name: (first_project)", "version: (1.0.0)", "description: ", "entry point: (index.js) app.js", "test command: ", "git repository: ", "keywords: ", "author: ", "license: ", "type: (commonjs) ", "About to write to C:\\Users\\Karen\\first_project\\package.json:", "", "{", "\"name\": \"first_project\",","\"version\": \"1.0.0\",", "\"description\": \"\",", "\"main\": \"app.js\",", "\"scripts\": {", "\"test\": \"echo \\\"Error: no test specified\\\" && exit 1\"", "},", "\"type\": \"commonjs\"", "}", "", "Is this OK? (yes) "]    
    }
);
TERMINALDATA.set(
    "npm-install",
    {
        command: "npm install",
        output: ["", "added 65 packages in 7s", "", "28 packages are looking for funding", "run `npm fund` for details"]
    }
);
TERMINALDATA.set(
    "first-express-server",
    {
        command: "node app.js",
        output: [""]
    }
);


export function constructTerminal(id, USERDATA){
    const terminal = TERMINALDATA.get(id);
    return `<div class="terminal">
    <div class="header">${USERDATA.shell}${USERDATA.location}</div>
    <div class="text">
    <p class="identifier"><span class="user">${USERDATA.user}@${USERDATA.computer} </span><span class="shell">${USERDATA.shell} </span><span class="location">${USERDATA.location}</span></p>
    <p>$ ${terminal.command}</p>
    ${createOutput(terminal.output)}
    </div>
    </div>
    `;
    /*const terminals = document.querySelectorAll(".terminal");
    for(const terminal of terminals){
        let data = TERMINALDATA.get(terminal.dataset.id);
            terminal.appendChild(createHeader(USERDATA));
            const textBox = document.createElement("div");
            textBox.classList.add("text");

            const identifier = document.createElement("p");
            identifier.classList.add("identifier");

            const user = document.createElement("span");
            user.classList.add("user");
            user.textContent = `${USERDATA.user}@${USERDATA.computer} `;
            identifier.appendChild(user);

            const shell = document.createElement("span");
            shell.classList.add("shell");
            shell.textContent = `${USERDATA.shell} `;
            identifier.appendChild(shell);
            textBox.appendChild(identifier);

            const location = document.createElement("span");
            location.classList.add("location");
            location.textContent = `${USERDATA.location}`;
            identifier.appendChild(location);
            textBox.appendChild(identifier);

            const command = document.createElement("p");
            command.classList.add("command");
            command.textContent = `$ ${data.command}`;
            textBox.appendChild(command);

            if(Array.isArray(data.output)){
                for(const line of data.output){
                const output = document.createElement("p");
                output.classList.add("output");
                output.textContent = line;
                textBox.appendChild(output);
                }
            }else{
                const output = document.createElement("p");
                output.classList.add("output");
                output.textContent = data.output;
                textBox.appendChild(output);
            }
            
            terminal.appendChild(textBox);
        
    }
}*/
}

function createOutput(text) {
    let result = "";
    if(Array.isArray(text)){
        for(const line of text){
            result += `<p class=\"output\">${line}</p>`;
        }
    }else{
        result += `<p class=\"output\">${text}</p>`;
    }
    return result;
}