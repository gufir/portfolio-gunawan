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
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'

interface NavItem {
  text: string
  link: string
}

const items = ref<NavItem[]>([
  { text: 'About', link: 'about' },
  { text: 'Tech', link: 'tech' },
  { text: 'Projects', link: 'project' },
])

const route = useRoute()
const activeSection = ref<string>('about')

const scrollToSection = (id: string) => {
  nextTick(() => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setTimeout(() => {
        activeSection.value = id
      }, 300)
    }
  })
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

    const sections = document.querySelectorAll('section')
    if (sections.length === 0) {
      // Jika elemen belum ada, tunggu sampai ada
      const observerDOM = new MutationObserver(() => {
        const updatedSections = document.querySelectorAll('section')
        if (updatedSections.length > 0) {
          updatedSections.forEach((section) => observer.observe(section))
          observerDOM.disconnect()
        }
      })

      observerDOM.observe(document.body, { childList: true, subtree: true })
    } else {
      sections.forEach((section) => observer.observe(section))
    }
  })
}
watch(
  () => route.path,
  () => {
    observeSections()
  },
)

onMounted(() => {
  observeSections()
})

onUnmounted(() => {
  activeSection.value = ''
})
</script>

<style></style>
