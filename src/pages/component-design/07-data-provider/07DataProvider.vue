<template>
  <div class="min-h-full bg-gray-500 flex flex-col justify-center items-center">
    <SourceLink :sourceLink="sourceLink"></SourceLink>
    <fetch-json url="/data/contacts.json" class="mb-8">
      <template v-slot:default="{ responseData: contacts, loading }">
        <div v-if="loading">Loading ...</div>
        <ContactListV3 v-else :contacts="contacts"></ContactListV3>
      </template>
    </fetch-json>
  </div>
</template>

<script lang="ts" src="./07DataProvider"></script>
