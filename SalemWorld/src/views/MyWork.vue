<template>
  <div style="background: linear-gradient(gray, white);">
    <div class="my-work container">
      <br>
    <h4 class=" text-center text-white mb-4"><b>MON ACTUALITE</b></h4>
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="">
          <div class="">
            <p class="lead text-white mb-4">
              Actuellement étudiant à <b>EPITECH</b> Paris. <br>
              Je travaille sur des projets pratiques mêlant
              programmation, gestion de projet,
              cybersécurité et cloud. <br>
              Je travaille aussi sur des projets personnels
              pour aiguiser mes compétences et m'approcher de mes aspirations afin de devenir
              la meilleure version de moi-même.
            </p>
            <div class="row g-4">
              <div class="col-md-6">
                <div class="card h-100 border-0 shadow-sm">
                  <div class="card-body">
                    <h5 class="card-title text-primary text-center">💼 ALTERNANCE 💼</h5>
                    <p class="card-text">
                      Je suis actuellement en <b>Alternance</b> à <b>ALLIANZ TECHNOLOGY</b>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card h-100 border-0 shadow-sm">
                  <div class="card-body">
                    <h5 class="card-title text-primary text-center">💻 Études 💻</h5>
                    <p class="card-text">
                      Projet complets englobant l'ensemble des compétences 
                      utiles à un développeur en tenant compte de la <b>Cybersécurité</b>, du <b>DevOps</b>, 
                      de la programmation et chaque étape d'un projet à <b>Epitech</b>.
                    </p>
                  </div>
                </div>
              </div>
            </div> <br>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'my-work',
});
</script>

<style scoped>
.card {
  background-color: #f8f9fa;
}
</style>