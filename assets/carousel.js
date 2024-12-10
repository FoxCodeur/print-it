// Sélection des éléments HTML
import { slides } from "../assets/script.js";
// Les variables
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const dotsContainer = document.querySelector(".dots"); // Sélectionner directement <ul> pour ajouter les dots

const slideContainer = document.getElementById("content-slides");
console.log(slideContainer);
const ul = document.createElement("ul");

// --------------------------------------------------------------------

// Les fonctions
prevButton.addEventListener("click", () => {
  console.log("prev");
});
nextButton.addEventListener("click", () => {
  console.log("next");
});
const createImages = () => {};

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
