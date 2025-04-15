<template>
  <div class="my-work container my-5">
    <h2 class="display-6 text-primary text-center mb-4">Mon Blog</h2>
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="card shadow-sm border-0">
          <div class="card-body">
            <p class="lead text-muted mb-4">
              En tant qu’étudiant à Epitech, je travaille sur des projets pratiques mêlant
              programmation, cybersécurité et cloud. Je développe aussi des projets personnels
              pour approfondir mes compétences.
            </p>
            <div class="row g-4">
              <div class="col-md-6">
                <div class="card h-100 border-0 shadow-sm">
                  <div class="card-body">
                    <h5 class="card-title text-primary">Études</h5>
                    <p class="card-text">
                      Cours avancés en sécurité réseau, cloud computing, et DevOps à Epitech.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card h-100 border-0 shadow-sm">
                  <div class="card-body">
                    <h5 class="card-title text-primary">Projets perso</h5>
                    <p class="card-text">
                      Création d’applications, devenir bon dans le commercial, création d'un réseau
                      et d'un écosystème.
                    </p>
                  </div>
                </div>
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
  name: 'my-work',
});
</script>

<style scoped>
.card {
  background-color: #f8f9fa;
}
</style>