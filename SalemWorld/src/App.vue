<template>
  <div id="app" class="">
    <header>
      <nav>
        <router-link to="/" class="nav-link">Accueil</router-link>
        <router-link to="/about-me" class="nav-link">Ce que je suis</router-link>
        <router-link to="/my-goals" class="nav-link">Ce que je veux</router-link>
        <router-link to="/my-work" class="nav-link">Ce que je fais</router-link>
        <router-link to="/my-projects" class="nav-link">Mes projets</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </nav>
    </header>
    <main>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
    <footer>
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
      name: 'Ton Nom', // Remplace par ton nom
    };
  },
});
</script>

<style scoped>

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  .nav-link {
    font-size: 1rem;
    padding: 0.5rem;
    width: 80%;
    text-align: center;
  }
}
#app {
  font-family: 'Inter', Arial, sans-serif;
  color: #333;
}
header {
  background-color: #1e3a8a;
  padding: 1rem;
}
nav {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.nav-link {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s;
}
.nav-link:hover {
  background-color: #3b82f6;
}
.nav-link.router-link-exact-active {
  background-color: #f97316;
}
main {
  min-height: 80vh;
  padding: 2rem;
}
footer {
  background-color: #f1f1f1;
  text-align: center;
  padding: 1rem;
  position: relative;
  bottom: 0;
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>