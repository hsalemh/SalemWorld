<template>
  <div class="my-projects container my-5">
    <h2 class="display-6 text-primary text-center mb-4">Mes projets</h2>
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="row g-4">
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body">
                <h5 class="card-title text-primary">Trinity</h5>
                <p class="card-text">
                  Une plateforme de gestion de tâches développée en équipe, utilisant Vue.js et
                  Node.js. Objectif : optimiser la collaboration et la productivité.
                </p>
                <router-link to="/my-projects" class="btn btn-outline-primary">En savoir plus</router-link>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body">
                <h5 class="card-title text-primary">Time_Manager</h5>
                <p class="card-text">
                  Une application web personnelle pour suivre le temps passé sur des tâches,
                  codée avec Vue.js et intégrée à une API REST.
                </p>
                <router-link to="/my-projects" class="btn btn-outline-primary">En savoir plus</router-link>
              </div>
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