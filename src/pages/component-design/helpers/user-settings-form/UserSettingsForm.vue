<template>
  <form class="card" @submit.prevent="submit">
    <h1 class="text-2xl font-bold mb-6">Your Settings</h1>
    <label class="block mb-6">
      <span class="form-label mb-2">Email Address</span>
      <input class="form-input" v-model="email" placeholder="you@example.com" />
    </label>
    <div class="mb-8">
      <span class="form-label mb-2">Newsletter</span>
      <div class="flex justify-between items-center">
        <p class="mr-4">Send you occasional news and updates.</p>
        <ToggleInput v-model="receiveNewsletter"></ToggleInput>
      </div>
    </div>
    <div class="flex justify-between">
      <DeleteAccountButton class="btn btn-red" :accountId="accountId">
        Cancel Account
      </DeleteAccountButton>
      <button class="btn btn-blue">Update Settings</button>
    </div>
  </form>
</template>

<script lang="ts" src="./UserSettingsForm"></script>
