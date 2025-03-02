<template>
  <div
    class="relative p-6 border-[3px] border-[#66D2CE] rounded-2xl w-3/4 mx-auto text-center items-center"
  >
    <h2
      class="font-sans absolute -top-3 left-4 -top-5 bg-[#EAEAEA] rounded-2xl px-2 text-2xl font-bold text-black"
    >
      {{ title }}
    </h2>
    <p class="text-left text-gray-700 mt-2">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
const title = 'About Me'
const description =
  'Hello! I am an IoT, Automation, and Backend Engineer who is passionate about exploring the potential of technology to create innovative automation solutions. My name is Gunawan and I have a passion for the world of IoT (Internet of Things) and automation systems. I am very interested in developing smart solutions that can connect and integrate the devices around us, thereby creating a more efficient, safe and comfortable environment. During my exploratory journey, I have studied various aspects of IoT, including system design and web development. I have experience in implementing IoT solutions from start to finish, from system design, hardware design, integrate hardware use some protocol like HTTP,MQTT,CoAP,Zigbee, and others. I also have interest in Web Development especially in Backend Development. When I feel burn out, I usually spend time for Playing Game, Traveling or Hiking as my hobbies. '
</script>

<style scoped>
h2 {
  font-family: Arial, sans-serif;
}
</style>
