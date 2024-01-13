function addPerson() {

    let people = document.getElementById("people");

    let person = document.createElement("div");
    person.classList.add("person");

    let image = document.createElement("img");
    image.src = "../assets/auzora_minions.gif";

    person.appendChild(image, person.children[0]);

    people.appendChild(person, people.children[0]);

}

addPerson();
addPerson();