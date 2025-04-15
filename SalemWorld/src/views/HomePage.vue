<template>
  <div class="home-page">
    <header class="text-center py-5" style="background: linear-gradient(gray,white);">
      <h1 class="display-4 mb-3">{{ name }}</h1>
      <p class="lead">Étudiant en Cybersécurité & Cloud à <b>EPITECH</b></p>
    </header>
    <main class="container my-5">
      <section class="hero text-center">
        <h2 class="h3 mb-4">Bienvenue sur mon portfolio</h2>
        <p class="text-muted mb-4">
          Je suis passionné par l’architecture des systèmes, la cybersécurité, et le cloud.
          Découvrez mes projets et mes compétences !
        </p>
        <router-link to="/my-projects" class="btn btn-warning">Voir mes projets</router-link><br><br>
       <!-- <a href="./assets/curriculum.pdf" class="btn btn-warning" download="Curriculum_Salem_EPITECH.pdf">Télécharger le CV</a> -->
      </section>
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