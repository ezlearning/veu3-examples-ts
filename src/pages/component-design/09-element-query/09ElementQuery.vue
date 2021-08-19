<template>
  <div class="min-h-full bg-grey-darker p-4">
    <p class="w-2/3 mx-auto card mt-8 bg-white">
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

    <div
      class="
        w-4/5
        mx-auto
        border-l border-r border-dashed border-grey-darker
        py-4
      "
    >
      <ProfileCard />
    </div>

    <div
      class="
        w-2/3
        mx-auto
        border-l border-r border-dashed border-grey-darker
        py-4
      "
    >
      <ProfileCard />
      <!--
      <div class="profile-card">
        <img class="profile-card-image" src="/images/toby.jpg" alt="" />
        <div class="profile-card-meta">
          <div class="mb-4">
            <p class="text-xl leading-tight">Toby Flenderson</p>
            <p class="text-sm leading-tight text-grey-dark">
              Human Resources at Dunder Mifflin
            </p>
          </div>
          <div>
            <button class="btn btn-sm btn-pill btn-indigo-outline">
              Message
            </button>
          </div>
        </div>
      </div>
      -->
    </div>
  </div>
</template>

<script lang="ts" src="./09ElementQuery"></script>
