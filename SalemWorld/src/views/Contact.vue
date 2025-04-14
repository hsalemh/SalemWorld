<template>
    <div class="contact">
      <h2>Contact</h2>
      <p>
        Envoyez-moi un message à
        <a :href="'mailto:' + email">{{ email }}</a> ou via LinkedIn.
      </p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Contact',
    data() {
      return {
        email: 'salem.hamiane@outlook.fr', 
      };
    },
  });
  </script>
  
  <style scoped>
  .contact {
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
    color: #555;
  }
  a {
    color: #f97316;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  </style>