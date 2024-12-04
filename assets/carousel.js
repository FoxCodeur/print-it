// Sélection des éléments HTML
import { slides } from "../assets/script.js";
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const dotsContainer = document.querySelector(".dots"); // Sélectionner directement <ul> pour ajouter les dots
prevButton.addEventListener("click", () => {
  console.log("prev");
});
nextButton.addEventListener("click", () => {
  console.log("next");
});

const createDots = () => {
  if (dotsContainer.children.length === 0) {
    slides.forEach(() => {
      const dot = document.createElement("li"); // Créer un nouvel élément <li>
      dot.classList.add("dot"); // Ajouter la classe "dot"
      dotsContainer.appendChild(dot); // Ajouter le dot au conteneur
    });
  }
};
// Appel de la fonction pour créer les dots
createDots();
