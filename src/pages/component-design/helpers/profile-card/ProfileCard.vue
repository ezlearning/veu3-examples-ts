<template>
  <with-dimensions>
    <!-- :TODO:  width = ref(0) not work -->
    <template v-slot:default="{ $el, offset }">
      <div
        :ref="$el"
        class="profile-card"
        :class="{ 'profile-card--horizontal': offset.width >= 400 }"
      >
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
    </template>
  </with-dimensions>
</template>

<script lang="ts" src="./ProfileCard"></script>
