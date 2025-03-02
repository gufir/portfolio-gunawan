<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import AboutView from './views/AboutView.vue'
import TechView from './views/TechView.vue'
import ProjectView from './views/ProjectView.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <Navbar />

    <!-- Main Content -->
    <main class="flex-grow min-h-screen">
      <section id="about">
        <AboutView />
      </section>

      <section id="tech" class="min-h-screen">
        <TechView />
      </section>

      <section id="project" class="min-h-screen">
        <ProjectView />
      </section>
      <!-- <AboutView />
      <TechView />
      <ProjectView /> 
      <RouterView /> -->
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<style scoped></style>
