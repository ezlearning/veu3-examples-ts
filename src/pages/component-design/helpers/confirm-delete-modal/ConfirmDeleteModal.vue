<template>
  <ModalDialog :show="show" @close="cancel">
    <div class="modal p-4">
      <h1 class="text-center text-2xl font-bold mb-4">Are You sure?</h1>
      <p class="text-center text-gray-800 mb-6">
        Deleting your account cannot be undone.
      </p>
      <div class="text-center">
        <button type="button" @click="cancel" class="btn btn-grey mr-4">
          Cancel
        </button>
        <button type="button" @click="confirmDelete" class="btn btn-red mr-4">
          Delete it
        </button>
      </div>
    </div>
  </ModalDialog>
</template>

<script lang="ts" src="./ConfirmDeleteModal"></script>
