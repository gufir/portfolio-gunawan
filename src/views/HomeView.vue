<script setup lang="ts">
import AboutView from './AboutView.vue'
import TechView from './TechView.vue'
import ProjectView from './ProjectView.vue'
import Connect from '@/components/Connect.vue'
</script>

<template>
  <section id="about">
    <AboutView />
  </section>

  <section id="tech" class="min-h-screen">
    <TechView />
  </section>

  <section id="project" class="min-h-screen">
    <ProjectView />
  </section>
</template>

<style scoped></style>
