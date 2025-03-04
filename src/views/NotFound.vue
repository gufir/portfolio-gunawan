<script setup lang="ts"></script>

<template>
  <div class="flex items-center justify-center min-h-screen overflow-hidden">
    <div class="flex flex-col items-center justify-center">
      <div>
        <div
          class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20 flex flex-col items-center"
        >
          <span class="text-[#66D2CE] text-9xl">404</span>
          <h1 class="dark:text-surface-0 text-3xl lg:text-7xl mb-2 text-black">Not Found</h1>
          <div class="text-surface-600 dark:text-surface-200 pb-4 text-black">
            Requested resource is not available.
          </div>
          <RouterLink to="/" custom v-slot="{ navigate }">
            <button
              @click="navigate"
              type="button"
              class="bg-[#66D2CE] text-white px-4 py-2 rounded hover:bg-[#2DAA9E] transition"
            >
              Go to Home
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.hover-button {
  background-color: #27fb2d !important;
  border-color: #27fb2d !important;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

.hover-button:hover {
  background-color: #23d628 !important;
  border-color: #23d628 !important;
}
</style>
