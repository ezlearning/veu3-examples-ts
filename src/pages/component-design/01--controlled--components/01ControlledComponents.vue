<template>
  <div class="h-full bg-gray-500 p-8">
    <SourceLink :sourceLink="sourceLink"></SourceLink>

    <div class="max-w-md mx-auto">
      <UserSettingsForm
        @open:confirm-delete-modal="confirmDeleteModalOpen = true"
      ></UserSettingsForm>
    </div>

    <AnnouncementModal
      :show="showAnnouncement"
      @close="showAnnouncement = false"
    />
  </div>
</template>

<script lang="ts" src="./01ControlledComponents"></script>
