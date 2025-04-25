<template>
  <div style="background: linear-gradient(grey, white);">
    <div class="about-me container">
      <br><br>
    <h4 class="text-white text-center mb-4"><b>Qui suis je ?</b></h4> <br><br>
    <div class="row justify-content-center">
      <div class="col-sm-4 text-center card 3-z-depth" style="background: lightgrey;">
        <p>            Bonjour, <br>
            Je suis {{ name }}, étudiant en master "Architecte des systèmes d'information" à EPITECH. <br> <br>
            Je pourrais dire plein de choses et me définir de plein de façons. <br>
            Je pourrais dire que je sais écrire des poémes à la limite du slam, que j'aime beaucoup
            le foot, que j'aime apprendre plein d'univers diffèrents mais je vais rester sur ce qui
            nous intéresse et ce qui gravite autour. <br></p>
      </div>
      <div class="col-sm-1"></div>
      <div class="col-sm-4 text-center text-white card 3-z-depth" style="background: black;">
        <br><br>
        <p>            J'ai toujours été passionné par les mathématiques, 
            la physique et le fonctionnement des choses. Après un bac scientifique,
            j'ai étudié les maths, la physique et l'informatique. <br>
            Je me suis d'abord orienté vers la physique 
            avant de revenir à l'informatique.</p>
      </div>
      <div class="col-lg-8"><br></div>
      <div class="col-lg-5 card 3-z-depth text-center">
            Parallèlement à ma scolarité, j'ai acquis une expérience précieuse 
            en service client avec une entreprise de livraison haut de gamme.
            J'ai pu faire tout ce que le poste permettait.
            Des livraisons au recrutement en passant
            par la gestion d'équipes, la relation client, la logistique et la gestion des crises.
            Si je parle avec autant de détails, c'est pour souligner que j'aime être transverse dans
            ce que je fais. <br><br>
            J'ai ensuite obtenu une licence en conception et développement d'applications,
            apprenant à créer des applications de bout en bout.
            Licence qui a été validée suite à un stage de 3 mois dans un environnement agréable. <br><br>
            D'abord attiré par la data science,
            j'ai découvert ma passion pour les réseaux et la cybersécurité lors de ma première année de Master.
            La diversité et la transversalité du domaine m'ont vraiment captivé.
            J'ai réalisé à ce momement là que ce que qui m'animait le plus, c'était l'architecture des systèmes, les améliorer et les développer.
            Qu'il s'agisse d'une application, d'un processus, d'une idée ou autre.
            En ce sens, et en tenant compte de tout ce que j'ai écris auparavant, la cybersécurité et le cloud
            se sont révélés comme des choix naturels. <br><br>
            C'est pourquoi à la suite d'un premier master plus général, j'ai intégré Epitech.
    </div></div> <br>
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="card shadow-sm border-0">
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <strong>Formation :</strong> MSc Architecte des systèmes d'information à Epitech, spécialisation Cloud & Sécurité
              </li>
              <li class="list-group-item">
                <strong>Intérêts :</strong> DevOps, pentesting, cloud computing (AWS, Azure), Histoire,
                Science, Informatique quantique
              </li>
              <li class="list-group-item">
                <strong>Valeurs :</strong> Curiosité, rigueur, apprentissage continu, esprit d'équipe
              </li>
            </ul>
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
  name: 'AboutMe',
  data() {
    return {
      name: 'Salem', 
    };
  },
});
</script>

<style scoped>
.card {
  background-color: #f8f9fa;
}
.list-group-item {
  background-color: transparent;
}
</style>


<!--
              Je m'appelle {{ name }}, étudiant en MSc Cybersécurité & Cloud à Epitech. Passionné par
              l’architecture des systèmes et la sécurisation des infrastructures, je m’efforce de
              construire des solutions robustes et innovantes.
              J'ai toujours été passionné par les mathématiques, 
              la physique et le fonctionnement des choses. Après un bac scientifique,
              j'ai étudié les maths, la physique et l'informatique,
              me spécialisant en physique avant de revenir à ma passion pour l'informatique.
              Pendant cette période, j'ai aussi acquis une expérience précieuse 
              en service client avec une entreprise de livraison haut de gamme.
              J'ai ensuite obtenu une licence en conception et développement d'applications,
              apprenant à créer des applications de bout en bout. D'abord attiré par la data science,
              j'ai découvert ma passion pour les réseaux et la cybersécurité lors de ma première année de Master.
              La diversité et la transversalité du domaine m'ont vraiment captivé.
              J'ai réalisé que ce que j'aime le plus, c'est l'architecture des systèmes, les améliorer et les développer,
              qu'il s'agisse d'une application, d'un processus, d'une idée ou autre.
            </p>
            <hr>
            <p class="text-center">              ENGLISH BELOW</p>
            <hr>
            <p class="lead text-muted mb-4">
                Hi, my name is {{name}}, and I'm currently pursuing my Master's degree in Cybersecurity 
                with a minor in Cloud Computing at EPITECH (MscPro).
                I am looking for either an internship or an Alternance in cloud, cyber,
                programming or linked field.
                I've always been interested in maths, physics, and how things work.
                After my science-focused high school diploma, I studied maths, physics,
                and computer science, eventually specializing in physics before returning to my passion 
                for computer science.
                During this time, I also gained valuable experience in customer service with a high-end delivery
                company.
                Following this, I earned my Bachelor's degree in Application Design and Development, learning
                to build applications from start to finish. Given my background and interests, I initially 
                considered specializing in data science. However, during my first year of my Master's program, 
                I discovered a passion for networking and cybersecurity. The diverse opportunities and
                cross-functional nature of the field truly captivated me.
                I've realized that what I enjoy most is the architecture of things, improving,
                and developing systems, whether it's an application, a process, an idea, or anything else.
              </p>
-->