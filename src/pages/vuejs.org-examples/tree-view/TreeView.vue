<template>
  <p>(You can double click on an item to turn it into a folder.)</p>
  <ul id="demo" style="border: 1px solid orange">
    <tree-item
      :item="treeData"
      @make-folder="makeFolder"
      @add-item="addItem"
    ></tree-item>
  </ul>
</template>

<script lang="ts" src="./TreeView"></script>
<style lang="scss" scoped src="./TreeView.scss"></style>
