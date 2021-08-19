<template>
  <g>
    <polygon :points="points"></polygon>
    <circle cx="100" cy="100" r="80"></circle>
    <axis-label
      v-for="(stat, index) in stats"
      :key="index"
      :stat="stat"
      :index="index"
      :total="stats.length"
    ></axis-label>
  </g>
</template>

<script lang="ts" src="./Polygraph"></script>
<style lang="scss" scoped src="./Polygraph.scss"></style>
