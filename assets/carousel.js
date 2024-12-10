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
