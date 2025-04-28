<template>
  <div style="background: linear-gradient(grey, white);">
    <div class="my-goals container">
      <br><br>
    <h4 class="text text-center mb-4">MES OBJECTIFS</h4> <br><br>
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="card shadow-sm border-0">
          <div class="card-body">
            <p class="lead text-muted mb-4">
              Mon objectif premier est de devenir un expert en cybersécurité et dans le domaine du cloud. <br>
              Contribuant à des architectures sécurisées et évolutives pour des entreprises
              innovantes et/ou pionniaires, je souhaite pouvoir gérer des écosystèmes entiers. <br>
              Par la suite, je souhaiterais gérer des projets et des structures plus grandes et pouvoir me tourner vers
              la R&D
            </p>
            <div class="row">
              <div class="col-md-6 mb-3">
                <h5 class="text-primary">Court terme</h5>
                <p>- Décrocher un poste en Alternance dans mes domaines de compétences. <br>
                  - Maitriser les outils DevOps. <br>
                  - Obtenir des certifications AWS, AZURE, CISCO, TryHackMe. <br>
                  - Obtenir Mon diplôme d'ingénieur.
                </p>
              </div>
              <div class="col-md-6 mb-3">
                <h5 class="text-primary">Long terme</h5>
                <p>- Concevoir des systèmes sécurisés. <br>
                  - Mener des audits de sécurité complexes. <br>
                  - Être reconnu dans mon domaine tout en gérant de grands projets.
                </p>
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
  name: 'my-goals',
});
</script>

<style scoped>
.card {
  background-color: #f8f9fa;
}
</style>