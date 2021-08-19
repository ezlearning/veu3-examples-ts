<template>
  <div class="card max-w-md mx-auto">
    <h1 class="text-2xl font-bold mb-6">Your Contacts</h1>
    <div>
      <div
        v-for="contact in contacts"
        :key="contact.id"
        class="flex items-center space-y-6"
      >
        <img
          class="h-12 w-12 rounded-full block mr-2"
          :src="contact.picture.medium"
          alt=""
        />
        <div>
          <div class="font-bold">{{ pseudoSlot(contact) }}</div>
          <div class="font-bold">
            <slot :contact="contact"></slot>
          </div>
          <div class="text-grey-dark">
            {{ contact.email }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./ContactListV1"></script>
