// Sélection des éléments HTML
import { slides } from "../assets/script.js";

// Les variables
// const prevButton = document.getElementById("prev");
// const nextButton = document.getElementById("next");
const banner = document.getElementById("banner");

// boutons next et prev
const buttons = document.querySelectorAll(".arrow");
const dotsContainer = document.querySelector(".dots"); // Sélectionner directement <ul> pour ajouter les dots

// Variable pour suivre l'index courant
let currentIndex = 0;
// --------------------------------------------------------------------

// Les fonctions
// prevButton.addEventListener("click", () => {
//   console.log("prev");
// });
// nextButton.addEventListener("click", () => {
//   console.log("next");
// });
// Écouteurs d'événements pour les boutons
// Ajouter un gestionnaire d'événement pour chaque bouton
const initCarouselButtons = () => {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.id === "prev") {
        console.log("Précédent cliqué");
        //pour éviter l'index négatif on ajoute slides.length,
        //cela rend le résultat positif ou nul.
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      } else if (button.id === "next") {
        console.log("Suivant cliqué");
        currentIndex = (currentIndex + 1) % slides.length; // Passage au slide suivant
      }
      updateCarousel();
    });
  });
};

// étape deux, on implémente maintenant la fonction qui crée
// dynamiquement les images.
const createImages = () => {
  console.log("Création des images...");
  //Tant que l'index est infèrieur à la longueur du tableau slides, on
  // itère sur le tableau pour créer les images.
  for (let index = 0; index < slides.length; index++) {
    // 1. Obtenir la valeur de l'élément de la diapositive actuelle (0, 1,
    // 2, 3...)
    const slide = slides[index];
    // console.log(slide);

    // 2. Créer les balises nécessaires
    const image = document.createElement("img");
    const tagline = document.createElement("p");

    // 3. Configurer les attributs des balises img et p
    // on peut aussi le faire avec setAttribute, cela
    // fonctionne trés bien avec la propriété (méthode plus rapide)
    image.src = `./assets/images/slideshow/${slide.image}`;
    image.alt = `Banner Print-it ${index + 1}`;
    image.classList.add("banner-img");
    //Cette méthode enlève toute balise malveillante ou code qui pourrait être injecté dans la chaîne
    tagline.innerHTML = DOMPurify.sanitize(slide.tagLine);

    // 4. Ajouter les éléments créés dans le DOM
    banner.appendChild(image);
    banner.appendChild(tagline);

    console.log("Image ajoutée : ", image);

    // 5. Appliquer la logique pour masquer les images/taglines sauf la première
    // si l'index n'est pas égal à 0, alors ce bloc s'applique à toutes
    // les images et légendes sauf celles correspondant à la première
    // slide, celle avec un index de 0. Seule la première image et sa
    // legende seront visibles.
    if (index !== 0) {
      image.classList.add("hidden");
      tagline.classList.add("hidden");
    } else {
      image.classList.remove("hidden");
      tagline.classList.remove("hidden");
    }

    // Vérification avec console.log pour voir l'état après l'application de la logique
    // console.log(`Index ${index} - Image classList :`, image.classList);
    // console.log(`Index ${index} - Tagline classList :`, tagline.classList);
  }
};
const createDots = () => {
  if (dotsContainer.children.length === 0) {
    slides.forEach((_, index) => {
      const dot = document.createElement("li"); // Créer un nouvel élément <li>
      dot.classList.add("dot"); // Ajouter la classe "dot"
      dotsContainer.appendChild(dot); // Ajouter le dot au conteneur
      //--------------------------------------------------------------
      dot.addEventListener("click", () => {
        // console.log(`Dot cliqué : ${index}`); // Affiche l'index du dot cliqué dans la console
        // Retirer "dot_selected" de tous les dots
        const allDots = dotsContainer.querySelectorAll(".dot"); // Sélectionner tous les dots
        allDots.forEach((d) => d.classList.remove("dot_selected")); // Supprimer la classe
        // Ajouter la classe "dot_selected" uniquement au dot cliqué
        dot.classList.add("dot_selected");
      });
    });
  }
};
// Appel de la fonction pour créer les dots
createDots();
// Appel de la fonction pour créer les images
createImages();
// Initialisation des gestionnaires d'événements après que le DOM est prêt
initCarouselButtons();
