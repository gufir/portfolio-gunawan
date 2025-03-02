<template>
  <div class="fixed top-0 left-0 w-full flex justify-center py-5 z-50">
    <div class="bg-[#66D2CE] rounded-full shadow-lg px-4 py-2 flex space-x-8">
      <button
        v-for="item in items"
        :key="item.text"
        @click="scrollToSection(item.link)"
        :class="[
          'text-black px-4 py-2 rounded-full transition duration-300 font-bold',
          activeSection === item.link
            ? 'bg-[#2DAA9E] text-white'
            : 'hover:bg-[#2DAA9E] hover:text-white',
        ]"
        style="font-family: 'Roboto', sans-serif"
      >
        {{ item.text }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

interface NavItem {
  text: string
  link: string
}

const items = ref<NavItem[]>([
  { text: 'About', link: 'about' },
  { text: 'Tech', link: 'tech' },
  { text: 'Projects', link: 'project' },
])

const activeSection = ref<string>('about')

const scrollToSection = (id: string) => {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const observeSections = () => {
  nextTick(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        })
      },
      { root: null, threshold: 0.3 },
    )
    items.value.forEach((item) => {
      const section = document.getElementById(item.link)
      if (section) {
        observer.observe(section)
      }
    })
  })
}

onMounted(() => {
  observeSections()
})

onUnmounted(() => {
  activeSection.value = ''
})
</script>

<style></style>
