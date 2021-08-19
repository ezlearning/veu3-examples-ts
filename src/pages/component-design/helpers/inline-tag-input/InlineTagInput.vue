<template>
  <label class="form-label mb-2">Renderless Tag Input(InlineTagInput)</label>
  <renderless-tag-input :tags="tags" @update:tags="bubbleTags">
    <template v-slot:default="{ tags, removeTag, inputProps }">
      <div class="tag-input">
        <span v-for="tag in tags" :key="tag" class="tag-input-tag">
          <span>{{ tag }}</span>
          <button
            type="button"
            class="tag-input-remove"
            @click="removeTag(tag)"
          >
            &times;
          </button>
        </span>

        <input
          v-bind="inputProps"
          class="tag-input-text"
          placeholder="Add tag..."
        />
      </div>
    </template>
  </renderless-tag-input>
</template>

<script lang="ts" src="./InlineTagInput"></script>
