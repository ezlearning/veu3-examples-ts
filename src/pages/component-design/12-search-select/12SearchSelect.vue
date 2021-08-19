<template>
  <div class="text-black min-h-screen bg-grey-darker p-8">
    <p class="max-w-md mx-auto card mb-8 bg-white">
      Migrate from:
      <br />
      <a
        class="text-blue-500 hover:underline"
        :href="sourceLink"
        target="_blank"
      >
        {{ sourceLink }}
      </a>
    </p>

    <div class="max-w-md mx-auto bg-white rounded shadow-lg p-8">
      <div class="mb-4">
        <label class="form-label mb-2">Favorite Thrash Band</label>
        <p>Selected: {{ selectedBand }}</p>
        <search-select
          v-model="selectedBand"
          :options="bands"
          :filter-function="applySearchFilter"
        ></search-select>
      </div>
      <div class="text-right">
        <button type="button" class="btn btn-blue">Save Changes</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./12SearchSelect"></script>
