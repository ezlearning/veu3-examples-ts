<template>
  <ModalDialog :show="show" @close="dismiss">
    <h1 class="text-center text-2xl font-bold mb-4">
      Exciting new features are here!
    </h1>
    <p class="text-center text-gray-600 mb-6">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique debitis
      labore consequatur repellendus sit facere temporibus? Consequuntur, ut
      laudantium quibusdam dolor maiores repudiandae reprehenderit molestiae.
      Vitae accusamus saepe doloremque facilis.
    </p>
    <div class="text-center">
      <button @click="dismiss" type="button" class="btn btn-blue">
        Dismiss
      </button>
    </div>
  </ModalDialog>
</template>

<script lang="ts" src="./AnnouncementModal"></script>
