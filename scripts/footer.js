function addFavicon(id, link, icon) {

    let favicon = document.createElement("img");
    favicon.id = id;
    favicon.src = "../assets/github.svg";
    favicon.classList.add("favicon");

    document.getElementById("footer").appendChild(favicon, document.children[0]);

}

async function addAllFavicons() {

    let jsonFetch = await fetch("https://raw.githubusercontent.com/s-wendel/s-wendel.github.io/main/assets/footer.json");
    let json = await jsonFetch.json();

    for(let i = 0; i < json.length; i++) {

        addFavicon(
            json.id,
            json.link,
            json.icon
        );

    }

}

addAllFavicons();