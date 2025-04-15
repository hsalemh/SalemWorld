<template>
  <div class="my-goals container my-5">
    <h2 class="display-6 text-primary text-center mb-4">Ce que je veux</h2>
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="card shadow-sm border-0">
          <div class="card-body">
            <p class="lead text-muted mb-4">
              Mon objectif est de devenir un expert en cybersécurité et cloud computing,
              contribuant à des architectures sécurisées et évolutives pour les entreprises
              innovantes.
              Avant de gérer des projets et des structures plus grandes et pouvoir me tourner vers
              la R&D
            </p>
            <div class="row">
              <div class="col-md-6 mb-3">
                <h5 class="text-primary">Court terme</h5>
                <p>Maîtriser les outils DevOps (Docker, Kubernetes), obtenir des certifications (AWS, Azure, TryHackme...)
                  et monter en compétences via toutes les aventures auquels je prend part.
                </p>
              </div>
              <div class="col-md-6 mb-3">
                <h5 class="text-primary">Long terme</h5>
                <p>Concevoir des systèmes sécurisés, mener des audits de sécurité complexes et être
                  reconnu dans mon domaine.
                </p>
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
  name: 'my-goals',
});
</script>

<style scoped>
.card {
  background-color: #f8f9fa;
}
</style>