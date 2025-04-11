<!-- src/App.vue -->
<template>
  <div id="app">
    <header>
      <h1>HAMIANE Salem</h1>
      <p>Étudiant en Cybersécurité & Cloud à Epitech</p>
    </header>
    <main>
      <section class="hero">
        <img src="C:/Users/salem/Desktop/Projets personnels/SALEMWORLD/Mon Site/SalemWorld/SalemWorld/src/assets/salem.jpg" alt="Ton Nom" class="profile-img" />
        <h2>Bienvenue sur mon portfolio</h2>
        <p>
          Je suis passionné par l’architecture des systèmes, la cybersécurité, et le cloud.
          Découvrez mes projets et mes compétences !
        </p>
        <button class="cta">Voir mes projets</button>
      </section>
    </main>
    <footer>
      <p>&copy; 2025 - Salem</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
#app {
  font-family: 'Inter', Arial, sans-serif;
  color: #333;
}
header {
  background-color: #1e3a8a; /* Bleu tech */
  color: white;
  text-align: center;
  padding: 2rem;
}
header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}
header p {
  font-size: 1.2rem;
  opacity: 0.9;
}
main {
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero {
  text-align: center;
  padding: 2rem;
  max-width: 600px;
}
.hero h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.hero p {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: #555;
}
.cta {
  background-color: #f97316; /* Orange moderne */
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}
.cta:hover {
  background-color: #e55a00;
}
footer {
  background-color: #f1f1f1;
  text-align: center;
  padding: 1rem;
  position: relative;
  bottom: 0;
  width: 100%;
}
</style>