<template>
  <div class="flex justify-center items-start p-6 gap-10 w-3/4">
    <section class="w-1/2">
      <h2 class="text-2xl font-bold py-2">Education</h2>
      <div v-for="edu in education" :key="edu.title" class="mt-2 p-4 rounded-lg">
        <p class="font-bold">{{ edu.title }}</p>
        <p class="text-sm text-gray-600">{{ edu.time }}</p>
        <p class="text-gray-700">{{ edu.detail }}</p>
      </div>
    </section>
    <section class="w-1/2">
      <h2 class="text-2xl font-bold py-2">Experience</h2>
      <div v-for="exp in experience" :key="exp.title" class="mt-2 p-4 rounded-lg">
        <p class="font-bold">{{ exp.title }}</p>
        <p class="text-sm text-gray-600">{{ exp.time }}</p>
        <p class="text-gray-700">{{ exp.detail }}</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const education = [
  {
    title: 'ELECTRONICS AND INSTRUMENTATION',
    time: 'Aug 2019 - Jul 2023',
    detail: 'Universitas Gadjah Mada, Yogyakarta - GPA 3.65',
  },
  {
    title: 'Senior High School 2 Kebumen',
    time: '2016 - 2019',
    detail: 'Senior High School, Kebumen - Science Major',
  },
]

const experience = [
  {
    title: 'Fullstack Developer at Pusat Pelaksana Kampus Merdeka',
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
