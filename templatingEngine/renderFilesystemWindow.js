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

export function constructFilesytemWindow(id, USERDATA){
    const window = FILESYSTEMDATA.get(id);
    return `<div class="file-system">
    <div class="header">${window?.currentDirectory || USERDATA.user}</div>
    <div class="text">
    <p class="nameColumn">
    ${createFiles(window.files)}
    </p>
    </div>
    </div>`;
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