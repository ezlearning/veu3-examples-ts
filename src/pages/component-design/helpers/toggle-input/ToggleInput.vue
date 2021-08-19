<template>
  <span
    class="toggle"
    role="checkbox"
    tabindex="0"
    @click="toggle"
    @keydown.space.prevent="toggle"
    :data-checked="modelValue.toString()"
  ></span>
</template>

<script lang="ts" src="./ToggleInput"></script>
<style lang="scss" scoped src="./ToggleInput.scss"></style>
