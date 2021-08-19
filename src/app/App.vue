<template>
  <div class="app-container" style="width: 100vw; height: 100vh">
    <header class="col-span-full bg-gray-900 text-gray-100">
      <nav>
        <ul>
          <li
            class="inline-block hover:underline p-3"
            @click="app$.switchMenu(menu)"
            v-for="menu in menus"
            :key="menu.prefix"
          >
            {{ menu.name }}
          </li>
        </ul>
      </nav>
    </header>

    <aside class="app-side bg-gray-800 text-gray-100">
      <nav class="p-3">
        <ul>
          <li
            class="hover:underline"
            v-for="route in moduleRoutes"
            :key="route.name"
          >
            <router-link :to="route.path">{{ route.name }}</router-link>
          </li>
        </ul>
      </nav>
    </aside>

    <main class="app-main p-2">
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts" src="./App"></script>
<style lang="scss" scoped src="./App.css"></style>
