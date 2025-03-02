<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const icons = ref([
  { name: 'github', icon: 'skill-icons:github-dark', link: 'https://github.com/gufir' },
  {
    name: 'linkedin',
    icon: 'skill-icons:linkedin',
    link: 'https://www.linkedin.com/in/gunawan-firdaus/',
  },
  {
    name: 'instagram',
    icon: 'skill-icons:instagram',
    link: 'https://www.instagram.com/gunawan.fir/',
  },
  { name: 'ymail', icon: 'mdi:email', link: 'mailto:gunawan.firdaus99@ymail.com' },
])
</script>

<template>
  <div class="relative p-6 border-[3px] border-[#66D2CE] rounded-2xl w-full mx-auto text-center">
    <h2 class="text-2xl font-bold pt-2 flex items-center justify-center pb-5">Let's Connect</h2>
    <div class="flex justify-center items-center gap-x-6 w-full">
      <a
        v-for="icon in icons"
        :key="icon.name"
        :href="icon.link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          :icon="icon.icon"
          class="text-5xl transition-transform duration-300 hover:scale-130"
        />
      </a>
    </div>
  </div>
</template>

<style scoped></style>
