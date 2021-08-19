<template>
  <div class="min-h-full bg-gray-500 p-8">
    <div class="max-w-md mx-auto">
      <p class="card mb-8 bg-white">
        Migrate from:
        <br />
        <a
          class="text-blue-500 hover:underline"
          :href="sourceLink"
          target="_blank"
        >
          {{ sourceLink }}
        </a>
      </p>

      <div class="card">
        <h1 class="text-2xl font-bold mb-6">Your Contacts</h1>
        <p>{{ contacts.map((c) => c.id).join("-") }}</p>
        <sortable-list v-model="contacts">
          <div class="contact-list">
            <sortable-item v-for="contact in contacts" :key="contact.id">
              <div class="contact-list-item">
                <div class="contact-list-contact">
                  <img
                    :src="contact.avatar"
                    alt=""
                    class="contact-list-avatar"
                  />
                  <div>
                    <div class="contact-list-name">{{ contact.name }}</div>
                    <div class="contact-list-email">{{ contact.email }}</div>
                  </div>
                </div>
                <sortable-handle>
                  <svg
                    class="contact-list-handle"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14 4h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM8 4h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm6 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm-6 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm6 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm-6 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"
                    />
                  </svg>
                </sortable-handle>
              </div>
            </sortable-item>
          </div>
        </sortable-list>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./11SortableList"></script>
