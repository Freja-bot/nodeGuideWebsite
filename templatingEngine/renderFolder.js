const FILESYSTEMDATA = new Map();
FILESYSTEMDATA.set(
    "first_project", 
    {
        files: [
            {
                name: "first_project",
                icon: "folder"
            }
        ]
    }
);
FILESYSTEMDATA.set(
    "hello-world", 
    {
        currentDirectory: "first_project",
        files: [
            {
                name: "app.js",
                icon: "file"
            }
        ]
    }
);
FILESYSTEMDATA.set(
    "package.json",
    {
        currentDirectory: "first_project",
        files: [
            {
                name: "app.js",
                icon: "file"
            },
            {
                name: "package.json",
                icon: "config"
            },
            {
                name: "package-lock.json",
                icon: "config"
            }
        ]
    }
);
FILESYSTEMDATA.set(
    "first-html",
    {
        currentDirectory: "first_project",
        files: [
            {
                name: "app.js",
                icon: "file"
            },
            {
                name: "index.html",
                icon: "file"
            },
            {
                name: "package.json",
                icon: "config"
            },
            {
                name: "package-lock.json",
                icon: "config"
            }
        ]
    }
);
const ICONS = new Map();
ICONS.set(
    "folder",
    "Folder_icon.svg"
);
ICONS.set(
    "file",
    "File_icon.svg"
);
ICONS.set(
    "config",
    "Config_file_icon.svg"
);

export function constructFolder(id, USERDATA){
    const window = FILESYSTEMDATA.get(id);
    return `<div class="file-system">
    <div class="header">${window?.currentDirectory || USERDATA.user}</div>
    <div class="text">
    <p class="nameColumn">
    ${createFiles(window.files)}
    </p>
    </div>
    </div>`;
    /*nst fileWindows = document.querySelectorAll(".file-system");
    for(const window of fileWindows){
        let file = FILESYSTEMDATA.get(window.id);
            window.appendChild(createHeader(file?.currentDirectory || USERDATA.user));
            const textBox = document.createElement("div");
            textBox.classList.add("text");

            const nameColumn = document.createElement("p");
            nameColumn.classList.add("nameColumn");

            for(const data of file.files){
                const icon = document.createElement("img");
                icon.classList.add("icon");
                icon.src = `/assets/images/${ICONS.get(data.icon)}`;
                nameColumn.appendChild(icon);

                const filename = document.createElement("span");
                filename.textContent = ` ${data.name} `;
                nameColumn.appendChild(filename);
                textBox.appendChild(nameColumn);
            }

            window.appendChild(textBox);
        
    }*/
};

function createFiles(files){
    let result = "";
    console.log(files);
    for(const file of files){
        console.log(`filedta: ${file}`)
        result += `<img class="icon" src="/assets/images/${ICONS.get(file.icon)}"> <span>${file.name}</span>`;
    }
    return result;
}