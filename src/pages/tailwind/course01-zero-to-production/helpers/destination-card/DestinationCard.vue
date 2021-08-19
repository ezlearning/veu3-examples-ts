<template>
  <div class="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
    <img
      class="h-32 w-32 flex-shrink-0"
      :src="'/images/tailwind/' + destination.imageUrl"
      :alt="destination.imageAlt"
    />
    <div class="px-6 py-4">
      <h3 class="text-lg font-semibold text-gray-800">
        {{ destination.city }}
      </h3>

      <p>${{ destination.averagePrice }} / night average</p>

      <div class="mt-4">
        <a
          href="#"
          class="
            text-brand-500
            hover:bg-brand-800 hover:text-brand-100
            font-semibold
            text-sm
          "
        >
          Explore {{ destination.propertyCount }} properties
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./DestinationCard"></script>
<style lang="scss" scoped src="./DestinationCard.scss"></style>
