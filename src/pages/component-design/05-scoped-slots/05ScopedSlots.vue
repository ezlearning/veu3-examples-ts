<template>
  <div class="min-h-full bg-gray-500 p-8">
    <SourceLink :sourceLink="sourceLink"></SourceLink>
    <ContactListV1 :pseudo-slot="pseudoSlot">
      <template v-slot:default="{ contact }">
        <a :href="`/contacts/${contact.id}`">
          {{ contact.name.first }}
        </a>
      </template>
    </ContactListV1>
  </div>
</template>

<script lang="ts" src="./05ScopedSlots"></script>
