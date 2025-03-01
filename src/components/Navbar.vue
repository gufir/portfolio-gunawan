<template>
  <div class="fixed top-0 left-0 w-full flex justify-center py-10">
    <div class="bg-[#66D2CE] rounded-full shadow-lg px-4 py-2 flex space-x-8">
      <a
        v-for="item in items"
        :key="item.text"
        :href="item.link"
        class="text-black hover:text-white px-4 py-2 rounded-full transition duration-300 hover:bg-[#2DAA9E] space-x-8 font-bold"
        style="font-family: 'Roboto', sans-serif"
      >
        {{ item.text }}
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface NavItem {
  text: string
  link: string
}

const items = ref<NavItem[]>([
  { text: 'About', link: '#about' },
  { text: 'Tech', link: '#tech' },
  { text: 'Projects', link: '#project' },
])
</script>

<style></style>
