<template>
  <div style="position: relative">
    <!-- Use the component -->
    <svg width="200" height="200">
      <polygraph :stats="stats"></polygraph>
    </svg>
    <!-- controls -->
    <div v-for="(stat, index) in stats" :key="index">
      <label>
        <span class="label">{{ stat.label }}</span>
        <input type="range" v-model="stat.value" min="0" max="100" />
      </label>
      <span>{{ stat.value }}</span>
      <button @click="remove(stat)">X</button>
    </div>
    <form id="add">
      <input type="text" name="newlabel" v-model="newLabel" />
      <button @click="add">Add a Stat</button>
    </form>
    <pre id="raw">{{ stats }}</pre>
  </div>
</template>

<script lang="ts" src="./SvgGraph"></script>
<style lang="scss" scoped src="./SvgGraph.scss"></style>
