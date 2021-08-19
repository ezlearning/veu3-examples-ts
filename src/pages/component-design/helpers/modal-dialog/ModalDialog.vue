<template>
  <teleport to="body" v-if="show">
    <div class="modal-backdrop">
      <div ref="modal" class="modal card">
        <slot></slot>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts" src="./ModalDialog"></script>
