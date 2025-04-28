<template>
  <div class="contact container my-5">
    <h2 class="display-6 text-primary text-center mb-4">Contact</h2>
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <div class="card shadow-sm border-0">
          <div class="card-body">
            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <label for="name" class="form-label">Nom</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="form.name"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="form.email"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea
                  class="form-control"
                  id="message"
                  rows="4"
                  v-model="form.message"
                  required
                ></textarea>
              </div>
              <!--<button type="submit" class="btn btn-primary">Envoyer</button> -->
            </form>
            <div class="mt-4 text-center">
              <p class="text-muted">
                 Contactez-moi via :
                <a :href="'mailto:salem.hamiane@outlook.fr' + email" class="text-primary">Email</a> |
                <a href="https://www.linkedin.com/in/salem-h-376335223 " target="_blank" class="text-primary">LinkedIn</a>
              </p>
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
  name: 'Contact',
  data() {
    return {
      email: 'salem.hamiane@outlook.fr', // Remplace par ton email
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      alert('Formulaire envoyé ! (Simulation)');
      this.form = { name: '', email: '', message: '' };
    },
  },
});
</script>

<style scoped>
.card {
  background-color: #f8f9fa;
}
.btn-primary {
  background-color: #1e3a8a;
  border-color: #1e3a8a;
}
.btn-primary:hover {
  background-color: #f97316;
  border-color: #f97316;
}
</style>
