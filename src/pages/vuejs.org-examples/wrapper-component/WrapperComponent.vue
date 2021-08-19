<template>
  <div>
    <p>Selected: {{ selected }}</p>
    <select2 :options="options" v-model="selected">
      <option disabled value="0">Select one</option>
    </select2>
  </div>
</template>

<script lang="ts" src="./WrapperComponent"></script>
<style lang="scss" scoped src="./WrapperComponent.scss"></style>
