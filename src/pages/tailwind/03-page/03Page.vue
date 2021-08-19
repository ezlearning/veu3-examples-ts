<template>
  <h3>Table</h3>
  <table class="table-fixed border border-collapse">
    <tr>
      <th class="border border-black w-1/6">Small</th>
      <th class="border border-black w-2/6">Medium</th>
      <th class="border border-black w-3/6">Large</th>
    </tr>
  </table>

  <h3>Grid 1</h3>
  <div class="grid grid-cols-2 gap-4 w-1/4">
    <div class="border bg-gray-300 text-center">A</div>
    <div class="border bg-gray-300 text-center">B</div>
    <div class="border bg-gray-300 text-center">C</div>
    <div class="border bg-gray-300 text-center">D</div>
  </div>

  <h3>Grid 2: grid-rows</h3>
  <div class="grid grid-rows-2 grid-flow-col gap-4 w-1/4">
    <div class="border bg-gray-300 text-center">A</div>
    <div class="border bg-gray-300 text-center">B</div>
    <div class="border bg-gray-300 text-center">C</div>
    <div class="border bg-gray-300 text-center">D</div>
  </div>

  <h3>Grid 3: col-span</h3>
  <div class="grid grid-cols-2 gap-4 w-1/4">
    <div class="border bg-gray-300 text-center col-span-2">A</div>
    <div class="border bg-gray-300 text-center">B</div>
    <div class="border bg-gray-300 text-center">C</div>
    <div class="border bg-gray-300 text-center">D</div>
  </div>

  <h3>Grid 3: row-span</h3>
  <div class="grid grid-cols-2 gap-4 w-1/4">
    <div class="border bg-gray-300 text-center row-span-2">A</div>
    <div class="border bg-gray-300 text-center">B</div>
    <div class="border bg-gray-300 text-center">C</div>
    <div class="border bg-gray-300 text-center">D</div>
  </div>

  <h3>Grid Layout</h3>
  <div class="grid grid-cols-5 bg-gray-100">
    <div class="text-center col-span-5 bg-yellow-100">Header</div>
    <div class="text-center bg-red-100">Left Sidebar</div>
    <div class="text-center col-span-3 bg-green-100">Content</div>
    <div class="text-center bg-red-100">RIght Sidebar</div>
    <div class="text-center col-span-5 bg-blue-100">Footer</div>
  </div>

  <h3>Flex Layout: flex-row</h3>
  <div class="flex flex-row flex-wrap bg-gray-100">
    <div class="w-full text-center bg-yellow-100">Header</div>
    <div class="w-1/5 text-center bg-red-100">Left Sidebar</div>
    <div class="w-3/5 text-center bg-green-100">Content</div>
    <div class="w-1/5 text-center bg-red-100">RIght Sidebar</div>
    <div class="w-full text-center bg-blue-100">Footer</div>
  </div>

  <h3>Flex Layout: flex-col</h3>
  <div class="flex flex-col bg-gray-100">
    <div class="flex-grow text-center bg-yellow-100">Header</div>
    <div class="flex flex-row">
      <div class="w-1/5 text-center bg-red-100">Left Sidebar</div>
      <div class="w-3/5 text-center bg-green-100">Content</div>
      <div class="w-1/5 text-center bg-red-100">RIght Sidebar</div>
    </div>
    <div class="flex-grow text-center bg-blue-100">Footer</div>
  </div>
</template>

<script lang="ts" src="./03Page"></script>
<style lang="scss" scoped src="./03Page.scss"></style>
