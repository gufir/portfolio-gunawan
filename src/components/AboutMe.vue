<script setup lang="ts">
import Connect from './Connect.vue'
const title = 'About Me'
const description =
  'Recent Graduated in Electronics and Instrumentation (GPA: 3.65) and a strong foundation in both IoT and backend development. Proven experience as a Full Stack Developer at PPKM UGM, where I developed and maintained web platforms for MBKM Programs. Practical experience in IoT and automation systems through roles at PAKO Group and Toyota Indonesia Academy, including PLC programming and system testing. Skilled in hardware and software integration, API development, and building scalable systems. Demonstrates strong analytical, problem-solving, and teamwork abilities, with a passion for driving innovative technology solutions.'
</script>

<template>
  <div class="relative p-6 border-[3px] border-[#66D2CE] rounded-2xl w-3/4 mx-auto text-center">
    <h2
      class="font-sans absolute -top-5 left-1/2 -translate-x-1/2 bg-[#EAEAEA] rounded-2xl px-2 text-2xl font-bold text-black"
    >
      {{ title }}
    </h2>
    <p class="text-center text-gray-700 mt-2">
      {{ description }}
    </p>

    <div class="flex flex-col items-center justify-center">
      <Connect />
    </div>
  </div>
</template>

<style scoped></style>
