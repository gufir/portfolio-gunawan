<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const techStack = ref([
  { icon: 'logos:vue', url: 'https://vuejs.org/' },
  { icon: 'logos:vitejs', url: 'https://vitejs.dev/' },
  { icon: 'logos:tailwindcss-icon', url: 'https://tailwindcss.com/' },
  { icon: 'logos:typescript-icon', url: 'https://www.typescriptlang.org/' },
  { icon: 'logos:javascript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { icon: 'logos:gopher', url: 'https://golang.org/' },
  { icon: 'logos:python', url: 'https://www.python.org/' },
  { icon: 'logos:fastapi-icon', url: 'https://fastapi.tiangolo.com/' },
  { icon: 'logos:redis', url: 'https://redis.io/' },
  { icon: 'logos:nodejs-icon', url: 'https://nodejs.org/' },
  { icon: 'logos:visual-studio-code', url: 'https://code.visualstudio.com/' },
  { icon: 'logos:git-icon', url: 'https://git-scm.com/' },
  { icon: 'logos:docker-icon', url: 'https://www.docker.com/' },
  { icon: 'logos:html-5', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
])

const techStack2 = ref([
  { icon: 'logos:c-plusplus', url: 'https://cplusplus.com/' },
  { icon: 'logos:arduino', url: 'https://www.arduino.cc/' },
  { icon: 'logos:raspberry-pi', url: 'https://www.raspberrypi.org/' },
  { icon: 'logos:express', url: 'https://expressjs.com/' },
  { icon: 'logos:mysql', url: 'https://www.mysql.com/' },
  { icon: 'logos:postgresql', url: 'https://www.postgresql.org/' },
  { icon: 'logos:react', url: 'https://reactjs.org/' },
  { icon: 'logos:postman-icon', url: 'https://www.postman.com/' },
  { icon: 'logos:linux-tux', url: 'https://www.kernel.org/' },
  { icon: 'logos:swagger', url: 'https://swagger.io/' },
  { icon: 'logos:github-icon', url: 'https://github.com/' },
  { icon: 'logos:css-3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
])
</script>

<template>
  <div
    class="overflow-hidden w-1/2 flex flex-col items-center p-6 rounded-2xl gap-4 border-x-[5px] border-[#66D2CE]"
  >
    <h2 class="text-2xl font-bold text-black pb-10">Tech and Tools</h2>

    <div class="slider">
      <div class="slide-track track-1">
        <a
          v-for="(tech, index) in [...techStack, ...techStack]"
          :key="`${tech.icon}-${index}`"
          :href="tech.url"
          target="_blank"
          rel="noopener noreferrer"
          class="slide"
        >
          <Icon :icon="tech.icon" class="text-4xl text-white" />
        </a>
      </div>
    </div>

    <div class="slider">
      <div class="slide-track track-2 py-4">
        <a
          v-for="(tech, index) in [...techStack2, ...techStack2]"
          :key="`${tech.icon}-${index}`"
          :href="tech.url"
          target="_blank"
          rel="noopener noreferrer"
          class="slide"
        >
          <Icon :icon="tech.icon" class="text-4xl text-white" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slider {
  display: flex;
  width: 100%;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
}
.slide-track {
  display: flex;
  gap: 2rem;
  width: max-content;
  white-space: nowrap;
}

.track-1 {
  animation: slide-left 15s linear infinite;
}

.track-2 {
  animation: slide-right 15s linear infinite;
}

.slide {
  flex: 0 0 auto;
}

.slider:hover .track-1,
.slider:hover .track-2 {
  animation-play-state: paused;
}

@keyframes slide-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@keyframes slide-right {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
