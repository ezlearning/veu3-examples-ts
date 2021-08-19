<template>
  <div class="buttons">
    <el-button @click="getCheckedNodes">通过 node 获取 Checked</el-button>
    <el-button @click="getCheckedKeys">通过 key 获取 Checked</el-button>
    <!-- <el-button @click="setCheckedNodes">通过 node 设置 Checked</el-button> -->
    <el-button @click="setCheckedKeys">通过 key 设置 Checked</el-button>
    <el-button @click="resetChecked">清空 Checked</el-button>
  </div>
  <!-- 不指定node-key会导致获取checked有问题 -->
  <el-tree
    :filter-node-method="filterFakeNode"
    :data="treeData"
    :props="treeProps"
    node-key="id"
    show-checkbox
    default-expand-all
    ref="tree"
    highlight-current
    @check="onCheck"
  >
    <!-- node 和 data 主要区别在id，node的id是自增的 -->
    <template #default="{ data }">
      <span class="custom-tree-node">
        <span>ID_{{ data.id }} : {{ data.label }}</span>
      </span>
    </template>
  </el-tree>
</template>

<script lang="ts" src="./DemoElTree"></script>
<style lang="scss" scoped src="./DemoElTree.scss"></style>
