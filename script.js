const produits = [
  {
    nom: "Smartphone X",
    categorie: "Électronique",
    prix: 699,
    image: "../img/smartphone.avif",
  },
  {
    nom: "Roman Policier",
    categorie: "Livres",
    prix: 14,
    image: "../img/policier.jpg",
  },
  {
    nom: "T-shirt Coton",
    categorie: "Vêtements",
    prix: 25,
    image: "../img/tshirt.webp",
  },
  {
    nom: "Casque Bluetooth",
    categorie: "Électronique",
    prix: 89,
    image: "../img/casque.png",
  },
  {
    nom: "Sweat à capuche",
    categorie: "Vêtements",
    prix: 40,
    image: "../img/sweat.png",
  },
  {
    nom: "Essai Historique",
    categorie: "Livres",
    prix: 19,
    image: "../img/essai.jpg",
  },
];

// CREATING THE HTML STRUCTURE

const container = document.querySelector("#container");

const addProduct = (objet) => {
  let card = document.createElement("div");
    card.classList.add("container__card");
    container.append(card);

    let figure = document.createElement("figure");
    figure.classList.add("container__image");
    let image = document.createElement("img");
    image.src = objet.image;
    card.append(figure);
    figure.append(image);

    let cardTexts = document.createElement("div");
    cardTexts.classList.add("container__card__texts");
    card.append(cardTexts);

    let titre = document.createElement("h3");
    titre.classList.add("container__title");
    titre.textContent = objet.nom;
    cardTexts.append(titre);

    let categorie = document.createElement("h5");
    categorie.classList.add("container__category");
    categorie.textContent = objet.categorie;
    cardTexts.append(categorie);

    let prix = document.createElement("h4");
    prix.classList.add("container__price");
    prix.textContent = `${objet.prix} €`;
    cardTexts.append(prix);
}

// SELECTING THE FILTER CATEGORIES

const search = document.querySelector("#search");
const tout = document.querySelector("#tout");
const livres = document.querySelector("#livres");
const electronique = document.querySelector("#electronique");
const vetements = document.querySelector("#vetements");

// CONDITIONS FOR EACH CATEGORY

for (let objet of produits) {
      addProduct(objet);
}

