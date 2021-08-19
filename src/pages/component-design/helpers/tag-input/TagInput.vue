<template>
  <div class="tag-input">
    <span v-for="tag in tags" :key="tag" class="tag-input-tag">
      <span>{{ tag }}</span>
      <button type="button" class="tag-input-remove" @click="removeTag(tag)">
        &times;
      </button>
    </span>
    <input
      class="tag-input-text"
      placeholder="Add tag..."
      v-model="input"
      @keydown.backspace="handleBackspace"
      @keydown.enter.prevent="addTag"
    />
  </div>
</template>

<script lang="ts" src="./TagInput"></script>
