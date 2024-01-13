function addPerson(name, description, image) {

    let people = document.getElementById("people");

    let person = document.createElement("div");
    person.classList.add("person");

    let image = document.createElement("img");
    image.src = "../assets/bedlessnoob.jpg";
    image.style.borderRadius = "200px";

    let header = document.createElement("h2");
    header.innerHTML = name;
    
    let headerStyle = header.style;
    headerStyle.marginLeft = "65%";
    headerStyle.marginTop = "-50%";

    let paragraph = document.createElement("p");
    paragraph.innerHTML = description;
    paragraph.style.marginLeft = "65%";

    person.appendChild(image, person.children[0]);
    person.appendChild(header, person.children[0]);
    person.appendChild(paragraph, person.children[0]);

    people.appendChild(person, people.children[0]);

}


async function addAllPeople() {

    

}

