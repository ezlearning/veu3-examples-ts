<template>
  <div class="h-full bg-gray-500 p-8">
    <SourceLink :sourceLink="sourceLink"></SourceLink>
    <div class="max-w-md mx-auto">
      <div class="card">
        <label class="block">
          <span class="form-label mb-2">Select a date</span>
          <date-picker
            class="form-input"
            v-model="date"
            format="YYYY-MM-DD"
          ></date-picker>
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./02WrappingLibrary"></script>
