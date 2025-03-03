<template>
  <div
    class="flex flex-col lg:flex-row justify-center items-start p-6 gap-10 max-w-screen-lg mx-auto py-10"
  >
    <section class="w-full lg:w-1/2">
      <h2 class="text-2xl font-bold py-2 flex items-center justify-center pb-5">Education</h2>
      <div
        v-for="edu in education"
        :key="edu.title"
        class="relative mt-2 p-4 border-l-4 border-gray-700 pl-6"
      >
        <span
          class="material-icons absolute -left-4.5 top-1/2 transform -translate-y-1/2 bg-[#EAEAEA] p-1 rounded-full text-gray-700"
        >
          school
        </span>

        <p class="font-bold">{{ edu.title }}</p>
        <p class="text-sm text-gray-600">{{ edu.time }}</p>
        <p class="text-gray-700">{{ edu.detail }}</p>
      </div>

      <!-- Connect Component -->
      <div class="flex p-6 rounded-2xl mx-auto text-center items-center mt-12 justify-center pt-10">
        <Connect />
      </div>
    </section>

    <section class="w-full lg:w-1/2">
      <h2 class="text-2xl font-bold py-2 flex items-center justify-center pb-5">Experience</h2>
      <div
        v-for="exp in experience"
        :key="exp.title"
        class="relative mt-2 p-4 border-l-4 border-gray-700 pl-6"
      >
        <span
          class="material-icons absolute -left-4.5 top-1/2 transform -translate-y-1/2 bg-[#EAEAEA] p-1 rounded-full text-gray-700"
        >
          work
        </span>

        <p class="font-bold">{{ exp.title }}</p>
        <p class="text-sm text-gray-600">{{ exp.time }}</p>
        <p class="text-gray-700">{{ exp.detail }}</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Connect from './Connect.vue'

const education = [
  {
    title: 'Electronics and Instrumentation',
    time: 'Aug 2019 - Jul 2023',
    detail: 'Universitas Gadjah Mada, Yogyakarta - GPA 3.65',
  },
]

const experience = [
  {
    title: 'Fullstack Developer at Pusat Pelaksana Kampus Merdeka UGM',
    time: 'Sept 2024 - Dec 2024',
    detail: 'Yogyakarta, Special Region of Yogyakarta (Hybrid)',
  },
  {
    title: '4.0 Specialist at Pako Group',
    time: 'Nov 2023 - Apr 2024',
    detail: 'Karawang, West Java',
  },
  {
    title: 'Supporting Project at Toyota Indonesia Academy',
    time: 'Mar 2022 - Aug 2022',
    detail: 'Karawang, West Java',
  },
]
</script>

<style scoped>
/* Custom styles can be added here if needed */
</style>
