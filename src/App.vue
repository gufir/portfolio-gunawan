<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const route = useRoute()
const showNavbar = computed(() => route.name !== 'NotFound')
const showFooter = computed(() => route.name !== 'NotFound')
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar v-if="showNavbar" />
    <main class="flex-grow min-h-screen">
      <RouterView />
    </main>

    <Footer v-if="showFooter" />
  </div>
</template>
