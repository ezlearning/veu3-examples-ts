<template>
  <div class="min-h-full bg-gray-500 p-8">
    <p class="w-2/3 mx-auto card mt-8 bg-white">
      Migration from:
      <br />
      <a
        class="text-blue-500 hover:underline"
        :href="sourceLink"
        target="_blank"
      >
        {{ sourceLink }}
      </a>
    </p>

    <div class="flex flex-col-reverse">
      <!-- 1. orignal tag input -->
      <div class="w-2/3 mx-auto card mt-8">
        <label class="form-label mb-2">Original Tag Input</label>
        <tag-input v-model:tags="tags"></tag-input>
      </div>

      <!-- 2. renderless tag input -->
      <div class="w-2/3 mx-auto card mt-8">
        <InlineTagInput v-model:tags="tags" />
      </div>

      <!-- 3. renderless stacked layout -->
      <div class="w-2/3 mx-auto card mt-8">
        <StackedTagInput v-model:tags="tags" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./08RenderlessComponents"></script>
