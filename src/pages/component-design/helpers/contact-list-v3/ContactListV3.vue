<template>
  <div class="max-w-md card">
    <h1 class="text-2xl font-bold mb-6">Your Contacts</h1>
    <div class="flex flex-col gap-6">
      <div
        v-for="contact in contacts"
        :key="contact.id"
        class="flex items-center gap-3"
      >
        <img
          :src="contact.picture.medium"
          class="h-12 w-12 rounded-full block mr-2"
          alt=""
        />
        <div>
          <div class="font-bold">
            {{ contact.name.first }} {{ contact.name.last }}
          </div>
          <div class="text-grey-dark">
            {{ contact.email }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./ContactListV3"></script>
