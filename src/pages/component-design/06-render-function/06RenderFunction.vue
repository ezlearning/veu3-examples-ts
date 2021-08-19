<template>
  <div class="h-full bg-gray-500 p-8">
    <SourceLink :sourceLink="sourceLink"></SourceLink>

    <div class="max-w-md mx-auto card my-6 p-3 bg-white">
      <div class="flex items-center gap-4">
        <HelloWorld tag="TButton">HELLO WORLD!</HelloWorld>
        <HelloWorld tag="ToggleInput"></HelloWorld>
      </div>
      <div class="bg-gray-100 my-6 p-3">
        <ContactListV2></ContactListV2>
      </div>
      <div class="bg-gray-100 my-6 p-3">
        <HelloWorldV3>
          <template v-slot:default="{ subject }">
            <h1>Hello {{ subject }}</h1>
          </template>
        </HelloWorldV3>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./06RenderFunction"></script>
