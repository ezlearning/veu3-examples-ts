<template>
  <div class="media-card">
    <div class="media-card-image">
      <slot name="image"></slot>
    </div>
    <div class="media-card-content">
      <div class="media-card-heading font-bold text-lg my-3">
        <slot name="header"></slot>
      </div>
      <div class="media-card-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./MediaCard"></script>
