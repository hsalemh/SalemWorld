<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">{{ name }}</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <router-link to="/" class="nav-link" active-class="active">Accueil</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about-me" class="nav-link" active-class="active">Ce que je suis</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/my-goals" class="nav-link" active-class="active">Ce que je veux</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/my-work" class="nav-link" active-class="active">Ce que je fais</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/my-projects" class="nav-link" active-class="active">Mes projets</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link" active-class="active">Contact</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <main class="flex-grow-1">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
    <footer class="bg-light text-center py-3">
      <p>© 2025 - {{ name }}</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      name: 'Salem', 
    };
  },
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.nav-link.active {
  background-color: #f97316;
  color: white;
  border-radius: 5px;
}
</style>