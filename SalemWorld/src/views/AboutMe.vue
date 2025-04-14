<template>
    <div class="about-me">
      <h2>Ce que je suis</h2>
      <p>{{ description }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'AboutMe',
    data() {
      return {
        description:
          'Je suis un étudiant passionné par la cybersécurité, le cloud, et l’architecture système. J’aime résoudre des problèmes complexes et apprendre continuellement.',
      };
    },
  });
  </script>
  
  <style scoped>
  .about-me {
    font-family: 'Inter', Arial, sans-serif;
    text-align: center;
    padding: 2rem;
    min-height: 80vh;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #1e3a8a;
  }
  p {
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
    color: #555;
  }
  </style>