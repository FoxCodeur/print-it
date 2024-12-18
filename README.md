# print-it
# Print-It WebSite v.1
### Étape  1 : Mettre à jour le code HTML

Ajoute les flèches directement dans la structure HTML pour permettre la navigation.

- **Ajout des flèches :**
    - Ajoutez les images `arrow_left.png` et `arrow_right.png` dans le HTML aux emplacements correspondants pour représenter les flèches de navigation.
    - Placez-les à l’intérieur de boutons dédiés pour une meilleure accessibilité et gestion future.
- **Vérifiez l’alignement :**
    - Utilisez les styles CSS existants pour positionner correctement les flèches dans le carrousel.

    <div class="carousel">
  <div id="banner">
    <img class="banner-img" src="./assets/images/slideshow/slide1.jpg" alt="Banner Print-it">
    <div class="carousel-caption">
      <p>Impressions tous formats <span>en boutique et en ligne</span></p>
    </div>
    <div class="dots"></div>
    <!-- Boutons intégrés dans le carrousel -->
    <button class="carousel-btn" id="prev">
      <img src="./assets/images/arrow_left.png" alt="Précédent">
    </button>
    <button class="carousel-btn" id="next">
      <img src="./assets/images/arrow_right.png" alt="Suivant">
    </button>
  </div>
</div>
------------------------------------------------------------------------