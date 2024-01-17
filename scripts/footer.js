function addFavicon(id, link, icon) {

    let favicon = document.createElement("img");
    favicon.id = id;
    favicon.src = "../assets/" + icon;
    favicon.classList.add("favicon");

    document.getElementById("footer").appendChild(favicon, document.children[0]);

}

async function addAllFavicons() {

    const jsonFetch = await fetch("https://raw.githubusercontent.com/s-wendel/s-wendel.github.io/main/assets/footer.json");
    const json = await jsonFetch.json();

/**async function addAllFavicons() {

    const jsonFetch = await fetch("https://raw.githubusercontent.com/s-wendel/s-wendel.github.io/main/assets/footer.json");
    const json = await jsonFetch.json();*/

    for(let i = 0; i < json.length; i++) {

        console.log("1 -> " + json.id);

        addFavicon(
            json.id,
            json.link,
            json.icon
        );

    }

}

addAllFavicons();