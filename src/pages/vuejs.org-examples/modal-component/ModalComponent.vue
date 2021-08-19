<template>
  <button id="show-model" @click="showModal = true">Show Modal</button>
  <transition name="modal">
    <!-- use the modal componet, pass in the prop -->
    <modal v-if="showModal" @close="showModal = false">
      <!--
      You can use custom content here to override
      default content
    -->
      <template v-slot:header>
        <h3>custom header</h3>
      </template>
    </modal>
  </transition>
</template>

<script lang="ts" src="./ModalComponent"></script>
<style lang="scss" scoped src="./ModalComponent.scss"></style>
