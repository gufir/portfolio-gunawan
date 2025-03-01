<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import AboutView from './views/AboutView.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <Navbar />

    <!-- Main Content -->
    <main class="flex-grow">
      <AboutView />
      <RouterView />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<style scoped></style>
