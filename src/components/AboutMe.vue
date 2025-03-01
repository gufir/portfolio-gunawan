<template>
  <div class="p-6 border border-[#00879E] rounded-2xl w-3/4 mx-auto text-center items-center">
    <h2 class="text-lg font-bold text-gray-900">
      {{ title }}
    </h2>
    <p class="text-gray-700 mt-2">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
const title = 'About Me'
const description =
  'Graduated with a degree in Electronics and Instrumentation, specializing in IoT, Automation, and Backend Engineering.'
</script>
