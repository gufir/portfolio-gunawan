<script setup lang="ts">
import Profile from '@/components/Profile.vue'
import AboutMe from '@/components/AboutMe.vue'
import Experience from '@/components/Experience.vue'
</script>

<template>
  <div class="flex flex-col md:flex-row items-center justify-center">
    <Profile />
  </div>
  <div class="flex flex-col md:flex-row items-center justify-center">
    <AboutMe />
  </div>

  <div class="flex flex-col md:flex-row items-center justify-center">
    <Experience />
  </div>
</template>
