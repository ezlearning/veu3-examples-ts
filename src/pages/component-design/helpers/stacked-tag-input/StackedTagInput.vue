<template>
  <label class="form-label mb-2">
    Renderless Stacked Layout(StackedTagInput)
  </label>
  <renderless-tag-input
    :tags="tags"
    :removeOnBackspace="false"
    @update:tags="bubbleTags"
  >
    <template v-slot:default="{ tags, removeTag, addTag, inputProps }">
      <p>addTag: {{ typeof addTag }}</p>
      <div class="stacked-tag-input-form">
        <input
          class="form-input"
          placeholder="Add tag..."
          v-bind="inputProps"
        />
        <button class="btn btn-indigo" @click="addTag">Add Tag</button>
      </div>

      <ul class="stacked-tag-list list-disc">
        <li v-for="tag in tags" :key="tag">
          {{ tag }}
          <button
            type="button"
            class="stacked-tag-link"
            @click="removeTag(tag)"
          >
            Remove
          </button>
        </li>
      </ul>
    </template>
  </renderless-tag-input>
</template>

<script lang="ts" src="./StackedTagInput"></script>
