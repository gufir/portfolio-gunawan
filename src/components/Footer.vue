<template>
  <footer class="bg-[#66D2CE] text-gray text-center py-4 mt-10">
    <p>&copy; {{ currentYear }} Gunawan. All rights reserved.</p>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>

<style>
footer a {
  transition: color 0.3s;
}
</style>
