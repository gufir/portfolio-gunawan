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
  avatar: '/gunawan.jpeg',
})
</script>

<template>
  <div class="flex justify-center items-center pt-30 pb-15">
    <div class="flex flex-col md:flex-row items-center">
      <!-- Avatar -->
      <div class="flex justify-center mb-4 md:mb-0 md:mr-32 sm:mr-16">
        <div class="w-48 h-48 rounded-full overflow-hidden shadow-lg">
          <img class="w-full h-full object-cover" :src="user.avatar" alt="Gunawan Firdaus" />
        </div>
      </div>

      <!-- Text -->
      <div class="flex flex-col items-center md:items-start px-8 py-4">
        <h1 class="text-4xl text-black">{{ user.name }}</h1>
        <p class="text-lg text-gray-500 mt-2 py-2">{{ user.bio }}</p>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-3">
          <a
            href="/documents/Gunawan Firdaus_Resume.pdf"
            download="Gunawan Firdaus_Resume.pdf"
            class="bg-[#66D2CE] hover:bg-[#2DAA9E] text-black font-medium px-4 py-2 rounded-full transition duration-300 mt-4 flex items-center"
          >
            <i class="mdi mdi-file mr-2"></i>
            Resume
          </a>
          <a
            href="/documents/Gunawan Firdaus_CV.pdf"
            download="Gunawan Firdaus_CV.pdf"
            class="bg-[#66D2CE] hover:bg-[#2DAA9E] text-black font-medium px-4 py-2 rounded-full transition duration-300 mt-4 flex items-center"
          >
            <i class="mdi mdi-file mr-2"></i>
            CV
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* You can remove the scoped styles since Tailwind already handles the styling */
</style>
