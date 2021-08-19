<template>
  <figure class="bg-gray-100 rounded-xl p-8 overflow-hidden md:flex md:p-0">
    <img
      class="w-32 h-32 rounded-full mx-auto md:w-48 md:h-auto md:rounded-none"
      src="@/assets/tailwind/sarah-dayan.jpg"
      alt="sarah dayan"
    />
    <div class="pt-6 text-center space-y-4 md:p-8 md:text-left">
      <blockquote>
        <p class="text-lg font-semibold">
          “Tailwind CSS is the only framework that I've seen scale on large
          teams. It’s easy to customize, adapts to any design, and the build
          size is tiny.”
        </p>
      </blockquote>
      <figcaption class="font-medium">
        <p class="text-cyan-600">Sarah Dayan</p>
        <p class="text-gray-500">Staff Engineer, Algolia</p>
      </figcaption>
    </div>
  </figure>
</template>

<script lang="ts" src="./01Figure"></script>
<style lang="scss" scoped src="./01Figure.scss"></style>
