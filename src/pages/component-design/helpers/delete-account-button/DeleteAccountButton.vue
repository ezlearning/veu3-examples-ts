<template>
  <button
    type="button"
    class="hover:underline"
    v-bind="$attrs"
    @click="confirmDeleteModalOpen = true"
  >
    <slot></slot>
  </button>
  <ConfirmDeleteModal
    :show="confirmDeleteModalOpen"
    :account-id="accountId"
    @close="confirmDeleteModalOpen = false"
  ></ConfirmDeleteModal>
</template>

<script lang="ts" src="./DeleteAccountButton"></script>
