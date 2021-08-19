<template>
  <div class="min-h-full bg-gray-500 p-8">
    <SourceLink :sourceLink="sourceLink"></SourceLink>
    <div class="m-8 flex items-center justify-center">
      <t-button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        Download
      </t-button>
    </div>

    <div class="card max-w-md mx-auto mb-8 bg-white">
      <MediaCard>
        <template v-slot:image>
          <img
            src="https://images.unsplash.com/photo-1495835788122-ca48931258be?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=acc48b0187b28f7a221362b843f15755&auto=format&fit=crop&w=3450&q=80"
            alt=""
          />
        </template>
        <template v-slot:header>
          The Long Road to Mastering the Perfect Cartwheel
        </template>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia eos
          accusantium minima architecto natus sequi quisquam incidunt dolorem,
          adipisci accusamus facere dicta magni, qui consectetur, omnis quis,
          voluptas tempore quo!
        </p>
      </MediaCard>
    </div>

    <div class="card max-w-md mx-auto mb-8 bg-white">
      <media-card>
        <template v-slot:header>Crossing the Street for Dummies</template>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia eos
          accusantium minima architecto natus sequi quisquam incidunt dolorem,
          adipisci accusamus facere dicta magni, qui consectetur, omnis quis,
          voluptas tempore quo!
        </p>
        <template v-slot:image>
          <img
            src="https://images.unsplash.com/photo-1490855137152-82177ecaf6e4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2929d63d861df6513b9e1e34196f71a2&auto=format&fit=crop&w=700&q=60"
            alt=""
          />
        </template>
      </media-card>
    </div>

    <div class="card max-w-md mx-auto mb-8 bg-white">
      <media-card>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia eos
          accusantium minima architecto natus sequi quisquam incidunt dolorem,
          adipisci accusamus facere dicta magni, qui consectetur, omnis quis,
          voluptas tempore quo!
        </p>
        <template v-slot:image>
          <img
            src="https://images.unsplash.com/photo-1490855137152-82177ecaf6e4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2929d63d861df6513b9e1e34196f71a2&auto=format&fit=crop&w=700&q=60"
            alt=""
          />
        </template>
      </media-card>
    </div>
  </div>
</template>

<script lang="ts" src="./04Slots"></script>
