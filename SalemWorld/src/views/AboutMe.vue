<template>
  <div class="about-me container my-5">
    <h2 class="display-6 text-primary text-center mb-4">Ce que je suis</h2>
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="card shadow-sm border-0">
          <div class="card-body">
            <p class="lead text-muted mb-4">
              Je m'appelle {{ name }}, étudiant en MSc Cybersécurité & Cloud à Epitech. Passionné par
              l’architecture des systèmes et la sécurisation des infrastructures, je m’efforce de
              construire des solutions robustes et innovantes.
            </p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <strong>Formation :</strong> MSc Pro Epitech, spécialisation Cloud & Sécurité
              </li>
              <li class="list-group-item">
                <strong>Intérêts :</strong> DevOps, pentesting, cloud computing (AWS, Azure)
              </li>
              <li class="list-group-item">
                <strong>Valeurs :</strong> Curiosité, rigueur, apprentissage continu
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutMe',
  data() {
    return {
      name: 'Salem', 
    };
  },
});
</script>

<style scoped>
.card {
  background-color: #f8f9fa;
}
.list-group-item {
  background-color: transparent;
}
</style>