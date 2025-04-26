<template>
  <div class="home-page">
    <header class="text-center py-5" style="background: linear-gradient(gray,white);">
      <img src="../assets/salem.jpg" alt="Logo" class="rounded-circle mb-4" style="width: 320px; height: 350px;" />
      <h1 class="display-4 mb-3">{{ name }}</h1>
      <p class="lead">Étudiant en Cybersécurité & Cloud à <b>EPITECH</b>. (Déployer via AWS)</p>
    </header>
    <main class="container my-5">
      <section class="hero text-center">
        <h2 class="h3 mb-4">Bienvenue sur mon portfolio</h2>
        <p class="text-muted mb-4">
          Je suis passionné par l’architecture des systèmes, la cybersécurité et le cloud. <br>
          Découvrez mes projets et mes compétences !
        </p>
        <router-link to="/my-projects" class="btn btn-warning">Voir mes projets</router-link><br><br>
        <a href="https://github.com/hsalemh/SalemWorld" class="btn btn-warning">Lien vers mon Github</a>

        <br><br>      <br><br>
       <!-- <a href="./assets/curriculum.pdf" class="btn btn-warning" download="Curriculum_Salem_EPITECH.pdf">Télécharger le CV</a> -->
      </section>
      <div class="row justify-content-center">
        <div class="col-sm-6">
          <img src="../assets/lead1.jpg" alt="image" class="img-fluid  mx-auto d-block" style="width: auto; height: auto;" />
        </div>
        <div class="col-sm-6">
          <img src="../assets/lead2.jpg" alt="image" class="img-fluid  mx-auto d-block" style="width: auto; height: auto;" />
          <br><br><br>
        </div>
        <div class="col-sm-12"> <hr> <br> <br> </div>
        <div class="col-sm-6">
          <img src="../assets/trinity-devops-front-images-0.jpg" alt="image" class="img-fluid  mx-auto d-block" style="width: auto; height: auto;" />
        </div>
        <div class="col-sm-6">
          <img src="../assets/trinity-devops-front-images-1.jpg" alt="image" class="img-fluid  mx-auto d-block" style="width: auto; height: auto;" />
        </div>
        <div class="col-sm-6">
          <img src="../assets/trinity-devops-front-images-2.jpg" alt="image" class="img-fluid  mx-auto d-block" style="width: auto; height: auto;" />
        </div>
        <div class="col-sm-6">
          <img src="../assets/trinity-devops-front-images-3.jpg" alt="image" class="img-fluid  mx-auto d-block" style="width: auto; height: auto;" />
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  data() {
    return {
      name: 'Salem',
    };
  },
});
</script>

<style scoped>
/* Bootstrap gère la plupart des styles */
.btn-warning {
  background-color: #f97316;
  border-color: #f97316;
}
.btn-warning:hover {
  background-color: #e55a00;
  border-color: #e55a00;
}
</style>