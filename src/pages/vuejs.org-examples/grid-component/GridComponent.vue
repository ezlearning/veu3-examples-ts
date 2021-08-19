<template>
  <form id="search">
    Search
    <input name="query" v-model="searchQuery" />
  </form>
  <demo-grid
    :data="gridData"
    :columns="gridColumns"
    :filter-key="searchQuery"
  ></demo-grid>
</template>

<script lang="ts" src="./GridComponent"></script>
<style lang="scss" scoped src="./GridComponent.scss"></style>
