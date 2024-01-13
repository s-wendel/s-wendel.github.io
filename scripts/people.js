function addPerson(name, description, image) {

    let people = document.getElementById("people");

    let person = document.createElement("div");
    person.classList.add("person");

    let imageElement = document.createElement("img");
    imageElement.src = "url(../assets/" + image + ")";
    imageElement.style.borderRadius = "200px";

    let header = document.createElement("h2");
    header.innerHTML = name;
    
    let headerStyle = header.style;
    headerStyle.marginLeft = "65%";
    headerStyle.marginTop = "-50%";

    let paragraph = document.createElement("p");
    paragraph.innerHTML = description;
    paragraph.style.marginLeft = "65%";

    person.appendChild(imageElement, person.children[0]);
    person.appendChild(header, person.children[0]);
    person.appendChild(paragraph, person.children[0]);

    people.appendChild(person, people.children[0]);

}


async function addAllPeople() {

    const jsonFetch = await fetch("https://raw.githubusercontent.com/s-wendel/s-wendel.github.io/main/assets/people.json");
    const json = await jsonFetch.json();

    console.log(json);

    for(let i = 0; i < json.length; i++) {

        const person = json[i];

        addPerson(person.name, person.description, person.icon);

    }

}

addAllPeople();