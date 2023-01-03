/**
 * @author ezekiel kouassi
 */

/* **************** Daily Challenge ***************** */

function displayPlanets() {

    /**
     * @description : cette fonction permet d'afficher l'ensemble des planets du système
     * solaire en leur appliquant des styles différents
     * @param planets -> liste des planetes
     * @param planetsColors -> liste des couleurs pour chaque planete
     * @param planetContainer -> la section des planetes dans le HTML
     * @param div -> création des divs de chaque planetes
     * @param divName -> création du contenu de chaque div (nom de chaque planetes)
     */

    let planets = ["Mercure", "Vénus", "la Terre", "Mars", "Ceres", "Jupiter", "Saturne", "Uranus", "Neptune", "Pluton", "Charon"];
    let planetsColors = ["white", "red", "orange", "pink", "grey", "yellow", "blue", "brown", "aqua", "purple", "green"];

    let planetContainer = document.querySelector(".listPlanets");
    planetContainer.style.display = "flex";
    planetContainer.style.flexWrap = "wrap";

    for(let i = 0; i < planets.length; i++) {
        
        let div = document.createElement("div");
        let divName = document.createTextNode(planets[i]);
        div.appendChild(divName);
        div.classList.add("planet");
        div.style.background = planetsColors[i];
        div.style.margin = "5px";
        div.style.fontWeight = "bold";
        planetContainer.appendChild(div);

    }

}

displayPlanets();

/* **************** End Daily Challenge ******************** */