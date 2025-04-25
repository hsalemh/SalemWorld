<template>
  <div style="background: linear-gradient(grey,white);">
    <div class="my-projects container">
      <br><br>
    <h4 class="text text-center mb-4">MES PROJETS</h4><br><br>
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="row g-4">
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body">
                <h5 class="card-title text-primary">TRINITY</h5>
                <p class="card-text">
                  Création d'un ensemble de plateformes pour la vente en ligne de produit alimentaire via
                  l'API openfoodfact.
                  Le projet comprend une application web qui contient l'ensemble des produits que nous vendons.
                  Le projet comprend aussi une application mobile faite avec REACT native qui utilise un scanner
                  pour ajouter les produits aux différents paniers.
                  Le backend a été fait avec nest.js
                  Pour le paiement, nous avons utilisé STRIPE.
                  Pour les outils de devops, nous sommes passés par gitlab pour notre CI/CD et avons utilisé
                  Terraform et Azur pour le déploiement.
                  <br>NB : il s'agit d'un projet de groupe
                </p>
                <a href="https://github.com/hsalemh/TRINITY" class="btn btn-warning">Lien Git</a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body">
                <h5 class="card-title text-primary">SalemWorld</h5>
                <p class="card-text">
                  Site web faisant office de portfolio. <br>
                  Ce dernier à été fait utilisant Vite/Vuejs. <br>
                  Pour ajouter de la technique au tout, j'ai décidé de créer une image docker et 
                  de la déposer sur docker hub.
                  La CI/CD a été créer avec github Action et permet donc le déploiement du site de
                  façon optimale.
                  AWS a été choisi pour l'hébérgement. 
                  <br> Le travail sur ce site web n'est pas finalisé, d'autres fixtures seront ajoutées
                  afin de rendre ce simple site web qui n'est pas si simple optimale, notamment 
                  via l'ajout d'un Backend et la mise à jours de certains points.
                </p> 
                <a href="https://github.com/hsalemh/SalemWorld" class="btn btn-warning">Lien Git</a>
              </div>
            </div>
          </div>
        </div>
        <br><br>
        <div class="row g-4">
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body">
                <h5 class="card-title text-primary">HEBWEB</h5>
                <p class="card-text">
                  Création d'une plateforme de vente d'hébérgement en ligne en cours de production.
                  Utilisation de Angular 19 pour le front end, de Spring boot pour le back-end.
                  Docker, github action, terraform et aws seront aussi utilisés.

                  projet en cours ...
                </p>
                <br><br><br><br>
                <a href="https://github.com/hsalemh/HEBWEB" class="btn btn-warning">Lien Git</a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body">
                <h5 class="card-title text-primary">CIA</h5>
                <p class="card-text">
                  Attaquer des machines virtuelles afin de récupérer un mot de passe, puis 
                  sécurisé les différentes machines.
                  Techno : 
                  ✓ VmWare <br>
                  ✓ pentesting <br>
                  ✓ React<br>
                  ✓ Redux <br>
                  ✓ Docker <br>
                  ✓ Nexus <br>
                  ✓ ... 
                </p>
                <router-link to="/my-projects" class="btn btn-warning">En cours ...</router-link>
              </div>
            </div>
          </div>
        </div>
        <br> <hr><br>
        <div class="row g-4">
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
              <h5 class="card-title text-primary">Jack the ripper</h5>
              <p class="card-text">
                Projet de transformation digitale relative à la ville du Kremlin-bicêtre.
              </p>
                <h5></h5>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <br><br>
          <a href="https://github.com/hsalemh" class="btn btn-warning">Lien vers mon github</a>
        </div>
        <br><br>
      </div>
    </div>
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'my-project',
});
</script>

<style scoped>
.card {
  background-color: #f8f9fa;
}
.btn-outline-primary {
  transition: background-color 0.3s;
}
.btn-outline-primary:hover {
  background-color: #f97316;
  color: white;
  border-color: #f97316;
}
</style>