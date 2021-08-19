<template>
  <on-click-outside :do="close">
    <template v-slot:default="{ $el }">
      <div :ref="$el" class="search-select" :class="{ 'is-active': isOpen }">
        <button
          ref="openBtn"
          @click="open"
          type="button"
          class="search-select-input"
        >
          <span v-if="modelValue !== null">{{ modelValue }}</span>
          <span v-else class="search-select-placeholder">Select a band...</span>
        </button>
        <div ref="dropdown" v-show="isOpen" class="search-select-dropdown">
          <input
            ref="searchInput"
            class="search-select-search"
            v-model="search"
            @keydown.esc="close"
            @keydown.up="highlightPrev"
            @keydown.down="highlightNext"
            @keydown.enter.prevent="selectHighligted"
            @keydown.tab.prevent
          />
          <ul
            ref="optionsUl"
            v-show="filteredOptions.length > 0"
            class="search-select-options"
          >
            <li
              class="search-select-option"
              v-for="(option, i) in filteredOptions"
              :key="option"
              @click="select(option)"
              :class="{ 'is-active': i === highlightedIndex }"
            >
              {{ option }}
            </li>
          </ul>
          <div
            v-show="filteredOptions.length === 0"
            class="search-select-empty"
          >
            No results found
          </div>
        </div>
      </div>
    </template>
  </on-click-outside>
</template>

<script lang="ts" src="./SearchSelect"></script>
