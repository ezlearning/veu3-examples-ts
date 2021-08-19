<template>
  <h1>Account Title Input Demo</h1>
  <div>
    <p>Test Input1 {{ input1?.sbjCode }}</p>
    <p>Test Input2 {{ input2?.sbjCode }}</p>
    <el-row>
      <el-col :span="12">
        <account-title-input
          :show-clear="false"
          v-model="input1"
          api="123"
        ></account-title-input>
      </el-col>
      <el-col :span="2">&nbsp;</el-col>
      <el-col :span="10">
        <el-input v-model="elInput" placeholder="请输入内容"></el-input>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <account-title-input
          @change="onChange"
          v-model="input2"
          :checkLast="false"
          api="123"
        ></account-title-input>
      </el-col>
    </el-row>

    <h3>Readonly Demo</h3>
    <el-row>
      <el-col :span="12">
        <account-title-input
          :readonly="true"
          v-model="input2"
          :checkLast="false"
          api="123"
        ></account-title-input>
      </el-col>
    </el-row>
    <p>&nbsp;</p>

    <h3>Disabled Demo</h3>
    <el-row>
      <el-col :span="12">
        <account-title-input
          :disabled="true"
          v-model="input2"
          :checkLast="false"
          api="123"
        ></account-title-input>
      </el-col>
    </el-row>
    <p>&nbsp;</p>
    <el-row>
      <el-col :span="20">
        <account-title-input
          v-model="input3"
          :checkLast="false"
          api="123"
        ></account-title-input>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" src="./DemoAccountTitle"></script>
<style lang="scss" scoped src="./DemoAccountTitle.scss"></style>
