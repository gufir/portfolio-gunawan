<script setup lang="ts">
import { ref } from 'vue'

interface User {
  name: string
  bio: string
  avatar: string
}

const user = ref<User>({
  name: 'Gunawan Firdaus',
  bio: 'IoT, Automation, and Backend Engineer passionate about Industry 4.0',
  avatar: '../src/assets/gunawan.jpeg',
})
</script>

<template>
  <div class="flex justify-center items-center pt-40 pb-10">
    <div class="flex flex-col md:flex-row items-center">
      <!-- Avatar -->
      <div class="flex justify-center mb-4 md:mb-0 md:mr-32 sm:mr-16">
        <div class="w-48 h-48 rounded-full overflow-hidden shadow-lg">
          <img class="w-full h-full object-cover" :src="user.avatar" alt="Gunawan Firdaus" />
        </div>
      </div>

      <!-- Text -->
      <div class="flex flex-col items-center md:items-start px-8">
        <!-- Added margin-left here -->
        <h1 class="text-4xl font-bold">{{ user.name }}</h1>
        <p class="text-lg text-gray-500 mt-2 py-2">{{ user.bio }}</p>
        <button
          class="bg-[#66D2CE] hover:bg-[#2DAA9E] text-black-200 hover:text-white font-medium px-4 py-2 rounded-full transition duration-300 mt-4"
        >
          <i class="mdi mdi-download mr-2"></i>
          Resume
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* You can remove the scoped styles since Tailwind already handles the styling */
</style>
