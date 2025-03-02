<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div v-for="(item, index) in items" :key="index" class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-bold mb-2">{{ item.title }}</h2>
      <p class="text-gray-700 mb-4">{{ item.description }}</p>
      <a :href="item.link" class="text-blue-500 hover:text-blue-700">Baca Selengkapnya</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface CardItem {
  title: string
  description: string
  link: string
}

const props = defineProps<{
  items: CardItem[]
}>()
</script>

<style scoped>
/* Tambahkan gaya tambahan jika diperlukan */
</style>
