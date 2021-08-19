<template>
  <div id="editor">
    <textarea :value="input" @input="update"></textarea>
    <div v-html="compiledMarkdown"></div>
  </div>
</template>

<script lang="ts" src="./MarkdownEditor"></script>
<style lang="scss" scoped src="./MarkdownEditor.scss"></style>
