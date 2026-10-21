const SCRIPTDATA = new Map();
SCRIPTDATA.set(
    "hello-world",
    {
        filename: "app.js",
        text: ['console.log("Hello World!");']
    }
);
SCRIPTDATA.set(
    "hello-user",
    {
        filename: "app.js",
        text: ['console.log("Hello" + "user");']
    }
);
SCRIPTDATA.set(
    "hello-user-with-age",
    {
        filename: "app.js",
        text: ['console.log("Hello", "user", "age:", 24);']
    }
);
SCRIPTDATA.set(
    "first_variable",
    {
        filename: "app.js",
        text: ['const SomeNameOfYourChoice = ?;', 'const youCanEvenUseNumbersLike3HereJustNotAsTheFirstCharacter = ?;']
    }
);
SCRIPTDATA.set(
    "string-variable",
    {
        filename: "app.js",
        text: ['const name = "Freja";', "const cityname = 'Copenhagen';", 'const userinput = `My favorite activity is sailing`;']
    }
);
SCRIPTDATA.set(
    "string-variable-with-quotes",
    {
        filename: "app.js",
        text: ['const importantQuote = \'"Our lives begin to end the day we become silent about hings that matter" - Martin Luther King Jr.\';', 'const text = "I cant\'t belive you done this";', 'const bookQuote = "...he screamed \\"YOU, SHALL NOT, PASS\\"  ";']
    }
);
SCRIPTDATA.set(
    "backsticks-multiline",
    {
        filename: "app.js",
        text: ["const passage = `to bee or not be", "i'th th'ere grandest reflection thi universe posed", "let thy question thy sanity`;", "", "console.log(passage);"]
    }
);
SCRIPTDATA.set(
    "backsticks-interpolation",
    {
        filename: "app.js",
        text: ["const name = \"Freja\"", "const greeting = `Hello ${name}, how are you?`", "console.log(greeting);"]
    }
);
SCRIPTDATA.set(
    "number-variable",
    {
        filename: "app.js",
        text: ["const age = 24", "const PI = 3.1415926", "const id = 89321003504"]
    }
);
SCRIPTDATA.set(
    "object-variable",
    {
        filename: "app.js",
        text: ["const user = {", "name: \"Freja\",", "email: \"freja@gmail.com\",", "id: 239", "};", "", "const plant = {", "name: \"Burro's Tail\",", "latin_name: \"Sedum morganianum\",", "pet_toxicity: false,", "light_level: \"dircet sunlight\",", "min_water_break: 7,", "max_water_break: 10", "};", "", "// You could also asign an empty object, and then add key-value pairs later", "const data = {};"]
    }
);
SCRIPTDATA.set(
    "object-dotting",
    {
        filename: "app.js",
        text: ["const user = {", "name: \"Freja\",", "email: \"freja@gmail.com\",", "id: 239", "userType: \"developer\"", "};", "", "console.log(user.name);", "const userAccessType = user.userType;", "console.log(userAccesType);"]
    }
);
SCRIPTDATA.set(
    "object-add-property",
    {
        filename: "app.js",
        text: ["const user = {", "name: \"Freja\"", "};", "", "user.prefrences = {", "color-theme: \"astral\"", "coockies: \"necessary only\"", "};", "", "console.og(user);"]
    }
);
SCRIPTDATA.set(
    "object-dotting-into-object",
    {
        filename: "app.js",
        text: ["const user = {", "name: \"Freja\",", "email: \"freja@gmail.com\",", "id: 239", "address: {", "city: \"Copenhagen\",", "areacode: 2300", "}", "};", "", "console.log(user.address.city);"]
    }
);
SCRIPTDATA.set(
    "const-reassignment",
    {
        filename: "app.js",
        text: ['// The first assignment of the variable usertype is legal', 'const usertype = "admin";', '// The seconds reassignment of usertype is illegal, and will caue an error to be thrown', 'usertype = "viewer";' ]
    }
);
SCRIPTDATA.set(
    "import-express",
    {
        filename: "app.js",
        text: ["const express = require(\"express\");"]
    }
);
SCRIPTDATA.set(
    "package.json",
    {
        filename: "package.json",
        text: ["{", "\"dependencies\": {", "\"express\": \"^5.3.0\"", "}", "}"]
    }
);
SCRIPTDATA.set(
    "first_project-package.json",
    {
        filename: "package.json",
        text: ["{", "\"name\": \"first_project\",","\"version\": \"1.0.0\",", "\"description\": \"\",", "\"main\": \"app.js\",", "\"scripts\": {", "\"test\": \"echo \\\"Error: no test specified\\\" && exit 1\"", "},", "\"type\": \"commonjs\",", "\"dependencies\": {", "\"express\": \"^5.3.0\"", "}", "}"]
    }
);
SCRIPTDATA.set(
    "first-express-server",
    {
        filename: "app.js",
        text: ["const express = require(\"express\");", "const app = express();", "app.listen(8080);"]
    }
);

export function renderCodeEditors(){
    const editors = document.querySelectorAll(".code-editor");
    for(const editor of editors){
        let script = SCRIPTDATA.get(editor.dataset.id);
        editor.appendChild(createHeader(script.filename));
        const textBox = document.createElement("div");
        textBox.classList.add("text");
        for(let i = 0; i < script.text.length; i++){
            const text = document.createElement("p");
            text.textContent = ` ${i+1} ${script.text[i]}`;
            textBox.appendChild(text);
        }
        editor.appendChild(textBox);
    }
    console.log("kasd");
}

function createHeader(filename) {
    const header = document.createElement("div");
    header.classList.add("header");
    header.textContent = `${filename}`;
    return header;
}