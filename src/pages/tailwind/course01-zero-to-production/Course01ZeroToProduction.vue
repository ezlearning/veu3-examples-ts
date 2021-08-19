<template>
  <div class="bg-gray-200">
    <FirstWorkflow />

    <div class="px-8 py-8 mx-auto max-w-md sm:max-w-xl lg:max-w-6xl">
      <h2 class="text-xl text-gray-900">Popular destinations</h2>
      <div class="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        <destination-card
          v-for="d in popularDestinations"
          :destination="d"
          :key="d.city"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Course01ZeroToProduction"></script>
<style lang="scss" scoped src="./Course01ZeroToProduction.scss"></style>
