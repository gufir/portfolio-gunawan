<script setup lang="ts">
import Tech from '@/components/Tech.vue'
import Interest from '@/components/Interest.vue'
</script>

<template>
  <div class="flex flex-col md:flex-row items-center justify-center pt-10">
    <Interest />
  </div>
  <div class="flex flex-col md:flex-row items-center justify-center py-4">
    <Tech />
  </div>
</template>
