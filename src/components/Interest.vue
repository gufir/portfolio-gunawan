<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  { text: 'IoT', icon: '/icon/iot.png' },
  { text: 'Backend', icon: '/icon/backend.png' },
  { text: 'Automation', icon: '/icon/automation.png' },
])
</script>

<template>
  <div
    class="overflow-hidden w-1/2 flex flex-col items-center p-6 rounded-2xl gap-4 border-[#66D2CE]"
  >
    <h2 class="text-3xl text-black text-center pt-4 pb-5 mb-6">Technology Area of Interest</h2>
    <p class="text-gray-600 text-center mb-10">
      I have a keen interest in the following technology areas
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
      >
        <img :src="item.icon" alt="icon" class="w-20 h-20 mx-auto mb-4" />
        <h2 class="text-xl text-black mb-2 text-center">{{ item.text }}</h2>
      </div>
    </div>
  </div>
</template>
