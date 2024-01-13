function addPerson(person) {

    let people = document.getElementById("people");

    let personElement = document.createElement("div");
    personElement.classList.add("person");
    personElement.addEventListener("click", function() {
        onClick(person)
    })

    let imageElement = document.createElement("img");
    imageElement.src = "../assets/" + person.icon;
    imageElement.style.borderRadius = "200px";

    let header = document.createElement("h2");
    header.innerHTML = person.name;
    
    let headerStyle = header.style;
    headerStyle.marginLeft = "65%";
    headerStyle.marginTop = "-50%";

    let paragraph = document.createElement("p");
    paragraph.innerHTML = person.description;
    paragraph.style.marginLeft = "65%";

    personElement.appendChild(imageElement, personElement.children[0]);
    personElement.appendChild(header, personElement.children[0]);
    personElement.appendChild(paragraph, personElement.children[0]);

    people.appendChild(personElement, people.children[0]);

}


async function addAllPeople() {

    const jsonFetch = await fetch("https://raw.githubusercontent.com/s-wendel/s-wendel.github.io/main/assets/people.json");
    const json = await jsonFetch.json();

    for(let i = 0; i < json.length; i++) {

        const person = json[i];

        addPerson(person);

    }

}

function onClick(person) {

    window.open(person.link);

}

addAllPeople();