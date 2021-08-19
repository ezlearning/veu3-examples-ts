<template>
  <h2>Marging, Padding, Border</h2>
  <div class="mb-10">
    <button class="p-10 border border-black">One</button>
    <button class="m-10 border border-black">Two</button>
    <button class="m-2 p-2 border-4 border-black">Three</button>
  </div>
  <div>
    <button class="m-4 p-4 border-2 border-black rounded-md">Four</button>
    <button class="m-4 p-4 border-2 border-black rounded-2xl">Five</button>
    <button class="m-4 p-4 border-2 border-black rounded-full">Six</button>
  </div>
  <div>
    <button class="m-4 p-4 rounded-md ring">Seven</button>
    <button class="m-4 p-4 rounded-2xl ring-2">Eight</button>
    <button class="m-4 p-4 rounded-full ring-4 ring-offset-4 ring-offset-black">
      Nine
    </button>
  </div>

  <h3>Shadows</h3>
  <div class="bg-gray-50 p-10">
    <div class="mb-10">
      <button class="p-10 mx-10 sadow-sm bg-white">One</button>
      <button class="p-10 mx-10 shadow-md bg-white">Two</button>
      <button class="p-10 mx-10 shadow-lg bg-white">Three</button>
    </div>
    <div>
      <button class="p-10 mx-10 shadow-xl bg-white">Four</button>
      <button class="p-10 mx-10 shadow-2xl bg-white">Five</button>
      <button class="p-10 mx-10 shadow-inner bg-white">Six</button>
    </div>
  </div>

  <h3>Gradients</h3>
  <div>
    <div class="mb-10 bg-gradient-to-r from-gray-50 to-black p-10 w-1/2">
      <button class="p-10 mx-10 bg-white">One</button>
      <button class="p-10 mx-10 bg-white">Two</button>
    </div>
    <div
      class="
        mb-10
        bg-gradient-to-r
        from-gray-50
        via-black
        to-gray-50
        p-10
        w-1/2
      "
    >
      <button class="p-10 mx-10 bg-white">Three</button>
      <button class="p-10 mx-10 bg-white">Four</button>
    </div>
  </div>

  <h3>Background Images</h3>
  <div class="bg-gray-50">
    <div class="text-6xl font-bold p10">
      <div
        class="
          bg-clip-text
          text-transparent
          bg-gradient-to-l
          from-gray-50
          to-black
          py-2
        "
      >
        NorthBy: A premium in Sight and Sound
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./02Box"></script>
<style lang="scss" scoped src="./02Box.scss"></style>
