function addProject(id, header, text, icon) {

    let project = document.getElementById("projects");

    let imageDiv = document.createElement("div");
    imageDiv.id = id;
    imageDiv.style.backgroundImage = "url(../assets/" + icon + ")";

    let textDiv = document.createElement("div");

    let textHeader = document.createElement("h2");
    textHeader.innerHTML = header;

    let textParagraph = document.createElement("p");
    textParagraph.innerHTML = text;

    textDiv.insertBefore(textParagraph, textDiv.children[0]);
    textDiv.insertBefore(textHeader, textDiv.children[0]);

    imageDiv.insertBefore(textDiv, imageDiv.children[0]);
    project.insertBefore(imageDiv, project.children[0]);   

}

async function addAllProjects() {

    const jsonFetch = await fetch("https://raw.githubusercontent.com/s-wendel/s-wendel.github.io/main/assets/info.json");
    const json = await jsonFetch.json();

    for(let i = 0; i < json.length; i++) {

        const project = json[i];

        addProject(project.id, project.name, project.description, project.icon);

    }

}

addAllProjects();