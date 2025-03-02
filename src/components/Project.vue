<script setup lang="ts">
import { ref, onMounted } from 'vue'

const projectsContainer = ref<HTMLElement | null>(null)

onMounted(() => {
  const projectElements = projectsContainer.value?.querySelectorAll('.project-item')
  projectElements?.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('slide-in')
    }, index * 200)
  })
})

interface Project {
  title: string
  description: string
  tech: string
  image: string
  link?: string
}

const projects = ref<Project[]>([
  {
    title: 'Money Wise',
    description: 'Personal Finance Management App',
    tech: 'Golang, PostgreSQL, PrimeVue, Vue, Vite, Redis, Swagger, grpc',
    image: '../src/assets/images/money-wise.png',
    link: 'https://github.com/gufir/money-management',
  },
  {
    title: 'Simple Bank API',
    description: 'Simple Bank API for Personal Use',
    tech: 'Golang, PostgreSQL, Redis, Swagger, grpc, Docker',
    image: '../src/assets/images/money-wise.png',
  },
  {
    title: 'Discord Chatbot',
    description: 'Discord Chatbot for Personal Use',
    tech: 'Golang, Discord API, OpenAI API',
    image: '../src/assets/images/discord-chatbot.png',
    link: 'https://github.com/gufir/discord-chatbot',
  },
  {
    title: 'Maintaining MSIB and KM Website',
    description: 'Maintaining MSIB and KM Website for Pusat Pelaksana Kampus Merdeka',
    tech: 'Golang, PostgreSQL, React, Vue, BigQuery, Google Cloud Platform, Data Studio',
    image: '../src/assets/images/confidential.png',
  },
  {
    title: 'Smart Compressor System (PAKO)',
    description: 'Compressor System for Factory',
    tech: 'Figma, PLC, Python, SQLite',
    image: '../src/assets/images/confidential.png',
  },
  {
    title: 'Dies Maintenance Monitoring (PAKO)',
    description: 'Project Controller for Dies Monitoring Project',
    tech: 'PHP, MySQL, CodeIgniter',
    image: '../src/assets/images/confidential.png',
  },
  {
    title: 'Autoscan Cutting Line (PAKO)',
    description: 'Modifying Cutting Line for AutoCounter to Enterprise Resource Planning',
    tech: 'Weintek HMI, MySQL, PHP',
    image: '../src/assets/images/confidential.png',
  },
  {
    title: 'Gas Consumption Monitoring (PAKO)',
    description: 'Handling Monitoring System for Gas Consumption in Painting Process',
    tech: 'Suto Flow Meter, Moxa, PHP, MySQL',
    image: '../src/assets/images/confidential.png',
  },

  {
    title: 'AutoScan All Line (PAKO)',
    description: 'Improving Accuracy AutoScan System for All Line at Hardware Level',
    tech: 'HMI, PLC, MySQL, PHP',
    image: '../src/assets/images/confidential.png',
  },
  {
    title: 'Smart Classroom Simulator',
    description: 'Simulator for Education collaboration with Asperio and Toyota Indonesia Academy',
    tech: 'React, FastAPI, Omron PLC',
    image: '../src/assets/images/smc_simulator.jpeg',
    link: 'https://github.com/gufir/Control_PLC_Lamp-AC_-from-React',
  },
  {
    title: 'Smart Classroom and Smart Gate (Supporting Project)',
    description:
      'Smart Classroom and Smart Gate for decreasing the spread of COVID-19 and Energy Efficiency in Toyota Indonesia Academy',
    tech: 'React, FastAPI, Omron PLC, Mongo, Websocket',
    image: '../src/assets/images/smc-smg.png',
  },
  {
    title: 'Shuttlecock Thrower Machine',
    description: 'Machine for Badminton Training',
    tech: 'Arduino, C++, Stepper Motor, Servo Motor, DC Motor',
    image: '../src/assets/images/shuttlecock_thrower.png',
    link: 'https://github.com/gufir/shuttlecock_thrower',
  },
  {
    title: 'Automatic Fish Feeder',
    description: 'Feeder for Fish in fish pond',
    tech: 'ESP32, DS3231, Servo Motor',
    image: '../src/assets/images/fish-feed.png',
    link: 'https://github.com/gufir/Fish_Feeding',
  },
  {
    title: 'Note App',
    description: 'CRUD Note App',
    tech: 'Go, PostgreSQL, React, Vite',
    image: '../src/assets/images/note-app.png',
    link: 'https://github.com/gufir/note-app-react',
  },
  {
    title: 'Room Monitoring System',
    description: 'Monitoring Humidity and Temperature in Room',
    tech: 'ESP32, DHT22, Express.js, MySQL, Vue, Raspberry Pi, MQTT, CoAP',
    image: '../src/assets/images/iot-dashboard.png',
    link: 'https://github.com/gufir/room-monitoring-dashboard',
  },
])
</script>

<template>
  <div class="container mx-auto pb-30 flex flex-col items-center">
    <h2 class="text-3xl font-bold text-center pt-10 pb-5 mb-6">Projects</h2>
    <p class="text-gray-600 text-center mb-10">
      This section showcases projects to which I have contributed, both individually and in team
      environments
    </p>
    <div
      ref="projectsContainer"
      class="grid grid-cols-1 md:grid-cols-3 gap-8 w-3/4 mx-auto justify-center"
    >
      <a
        v-for="project in projects"
        :key="project.title"
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="project-item bg-white p-6 rounded-xl shadow-lg text-center flex flex-col items-center hover:shadow-xl transition-shadow duration-300 opacity-0 transform translate-y-10"
      >
        <img
          :src="project.image"
          :alt="project.title"
          class="max-w-xs h-32 object-cover rounded-md mb-4 mx-auto transition-transform duration-300 hover:scale-130"
        />
        <h3 class="text-xl font-bold mb-2 pt-2">{{ project.title }}</h3>
        <p class="text-gray-600 mb-2 pb-3">{{ project.description }}</p>
        <span class="inline-block bg-[#66D2CE] text-black text-sm px-3 py-1 rounded-full">
          {{ project.tech }}
        </span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.project-item {
  transition:
    opacity 5s ease-out,
    transform 5s ease-out;
}

.project-item.slide-in {
  opacity: 1;
  transform: translateY(0);
}
</style>
