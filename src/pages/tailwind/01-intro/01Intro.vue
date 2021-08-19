<template>
  <div class="flex justify-center bg-gray-300">
    <div class="mx-4 order-last self-center">
      <img class="rounded-full" :src="music" size="100x100" alt="Logo" />
    </div>

    <div class="mx-4 self-center text-center">
      <h1 class="text-6xl font-bold text-blue-700">Welcome to NorthBy</h1>
      <h2 class="text-3xl font-semibold text-blue-300">
        A premium in sight and sound
      </h2>
      <button
        class="
          my-4
          px-4
          py-2
          border-2 border-black
          rounded-lg
          text-white
          bg-blue-900
        "
      >
        Learn More
      </button>
    </div>
  </div>
</template>

<script lang="ts" src="./01Intro"></script>
<style lang="scss" scoped src="./01Intro.scss"></style>
