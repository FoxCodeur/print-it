// Sélection des éléments HTML
import { slides } from "../assets/script.js";
const banner = document.getElementById("banner");

// boutons next et prev
const buttons = document.querySelectorAll(".arrow");
const dotsContainer = document.querySelector(".dots"); // Sélectionner directement <ul> pour ajouter les dots

// Variable pour suivre l'index courant
let currentIndex = 0;
// --------------------------------------------------------------------
const initCarouselButtons = () => {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.id === "prev") {
        console.log("Précédent cliqué");
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      } else if (button.id === "next") {
        console.log("Suivant cliqué");
        currentIndex = (currentIndex + 1) % slides.length; // Passage au slide suivant
      }
      updateCarousel(currentIndex);
    });
  });
};
// --------------------------------------------------------------------------------
const createImages = () => {
  for (let index = 0; index < slides.length; index++) {
    const slide = slides[index];
    const image = document.createElement("img");
    const tagline = document.createElement("p");

    image.src = `./assets/images/slideshow/${slide.image}`;
    image.alt = `Banner Print-it ${index + 1}`;
    image.classList.add("banner-img");
    tagline.innerHTML = DOMPurify.sanitize(slide.tagLine);

    banner.appendChild(image);
    banner.appendChild(tagline);

    console.log("Image ajoutée : ", image);

    if (index !== 0) {
      image.classList.add("hidden");
      tagline.classList.add("hidden");
    } else {
      image.classList.remove("hidden");
      tagline.classList.remove("hidden");
    }
  }
};

// étape un, on implémente la fonction qui gère les dots.
const createDots = () => {
  if (dotsContainer.children.length === 0) {
    slides.forEach((_, index) => {
      const dot = document.createElement("li");
      dot.classList.add("dot");
      // Ajouter "dot_selected" au dot initial (index 0)
      if (index === 0) {
        dot.classList.add("dot_selected");
      }
      dotsContainer.appendChild(dot);

      dot.addEventListener("click", () => highlightDot(index, dot));
    });
  }
};
const highlightDot = (index, dot) => {
  // Mise à jour de l'index actuel
  currentIndex = index;

  // Mise à jour des classes des points
  const allDots = dotsContainer.querySelectorAll(".dot");
  allDots.forEach((d) => d.classList.remove("dot_selected"));
  dot.classList.add("dot_selected");

  // Affichage dans la console pour débogage
  console.log(`Dot cliqué : ${index}`);

  // Mise à jour du carousel
  updateCarousel(currentIndex);
};

const updateCarousel = (currentIndex) => {
  // Sélection des éléments du carousel
  const images = document.querySelectorAll(".banner-img");
  const taglines = document.querySelectorAll("p");
  const allDots = dotsContainer.querySelectorAll(".dot");

  // Mise à jour des images
  images.forEach((image, index) => {
    if (index === currentIndex) {
      image.classList.remove("hidden");
    } else {
      image.classList.add("hidden");
    }
  });

  // Mise à jour des légendes
  taglines.forEach((tagline, index) => {
    if (index === currentIndex) {
      tagline.classList.remove("hidden");
    } else {
      tagline.classList.add("hidden");
    }
  });

  // Mise à jour des dots
  allDots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
};

// Appel de la fonction pour créer les dots
createDots();
// Appel de la fonction pour créer les images
createImages();
// Initialisation des gestionnaires d'événements après que le DOM est prêt
initCarouselButtons();
