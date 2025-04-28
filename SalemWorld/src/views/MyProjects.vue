<template>
  <div style="background: linear-gradient(grey,white);">
    <div class="my-projects container">
      <br><br>
    <h4 class="text text-center mb-4">MES PROJETS</h4><br><br>
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="row g-4">
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm" style="background-image: url('../assets/1.jpg'); background-size: cover;">
              <div class="card-body">
                <h5 class="card-title text-primary text-center">TRINITY</h5> <br>
                <p class="card-text">
                  Création d'un ensemble de plateformes pour la vente en ligne de produit alimentaire via
                  <b>l'API openfoodfact</b>.
                  Le projet comprend une <b>application web</b> qui contient l'ensemble des produits que nous vendons.
                  Le projet comprend aussi une application mobile faite avec <b>REACT native</b> qui utilise un <b>scanner</b>
                  pour ajouter les produits aux différents paniers.
                  Le backend a été fait avec <b>nest.js</b>
                  Pour le paiement, nous avons utilisé <b>STRIPE</b>.
                  Pour les outils de devops, nous sommes passés par <b>gitlab (runner)</b> pour notre <b>CI/CD</b> et avons utilisé
                  <b>Terraform</b> et <b>Azur</b> pour le déploiement.
                  <br>NB : il s'agit d'un projet de groupe
                </p>
                <p class="text-center"><router-link to="/trinity" class="btn btn-warning">PDF</router-link></p>
                <p class="text-center"><a href="https://github.com/hsalemh/TRINITY" class="btn btn-warning">Lien Git</a></p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body">
                <h5 class="card-title text-primary text-center">SalemWorld</h5> <br>
                <p class="card-text">
                  Site web faisant office de portfolio. <br>
                  Ce dernier à été fait utilisant <b>Vite/Vuejs</b>. <br>
                  Pour ajouter de la technique au tout, j'ai décidé de créer une image <b>docker</b> et 
                  de la déposer sur <b>docker hub</b>.
                  La <b>CI/CD</b> a été créer avec <b>github Action</b> et permet donc le déploiement du site de
                  façon optimale.
                  <b>AWS</b> a été choisi pour l'hébérgement. 
                  <br> D'autres features seront ajoutées
                  afin de rendre ce simple site web (qui n'est pas si simple) optimal,
                   notamment via l'ajout d'un Backend et la mise à jour de certains points.
                </p> <br><br><br>
                <p class="text-center"><a href="https://github.com/hsalemh/SalemWorld" class="btn btn-warning">Lien Git</a></p>
              </div>
            </div>
          </div>
        </div>
        <br><br>
        <div class="row g-4">
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body">
                <h5 class="card-title text-primary text-center">HEBWEB</h5> <br>
                <p class="card-text">
                  Création d'une <b>plateforme de vente d'hébérgement en ligne</b> en cours de production.
                  Utilisation de <b>Angular 19</b> pour le front end, de <b>Spring boot</b> pour le back-end.
                  <b>Docker</b>, <b>github action</b>, <b>terraform</b> et <b>aws</b> seront aussi utilisés.
<br><br>
                 <b> projet en cours ...</b>
                </p>
                <br>
                <p class="text-center"><a href="https://github.com/hsalemh/HEBWEB" class="btn btn-warning">Lien Git</a></p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body">
                <h5 class="card-title text-primary text-center">CIA</h5> <br>
                <p class="card-text">
                  Attaquer des machines virtuelles afin de récupérer un mot de passe,
                   puis sécuriser les différentes machines
                  Techno : <br>
                  <b>
                    ✓ VmWare <br>
                  ✓ pentesting <br>
                  ✓ React<br>
                  ✓ Redux <br>
                  ✓ Docker <br>
                  ✓ Nexus <br>
                  </b>
                </p>
                <p class="text-center"><router-link to="/my-projects" class="btn btn-warning">En cours ...</router-link></p>
              </div>
            </div>
          </div>
        </div>
        <br> <hr><br>
        <div class="row justify-content-center g-4">
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
              <h5 class="card-title text-primary text-center"> <br>Jack the ripper</h5> <br>
              <p class="text-center">
                Projet de transformation digitale relative à la ville du Kremlin-bicêtre.
                Le sujet étant d'améliorer le processsus de collecte des déchets à travers la 
                ville via une application mobile et un site web.
                <br>

              </p>
              <p class="text-center"><router-link to="/jackripper" class="btn btn-warning">PDF</router-link></p>
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