<template>
  <div class="flex justify-center py-10">
    <div class="bg-[#66D2CE] rounded-full shadow-lg px-4 py-2 flex space-x-8">
      <a
        v-for="item in items"
        :key="item.text"
        :href="item.link"
        class="text-black-200 hover:text-white font-medium px-4 py-2 rounded-full transition duration-300 hover:bg-[#2DAA9E] space-x-8"
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
  { text: 'Skill', link: '#skill' },
  { text: 'Project', link: '#project' },
  { text: 'Contact', link: '#contact' },
])
</script>

<style></style>
