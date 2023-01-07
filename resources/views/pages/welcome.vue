<script setup lang="ts">
import Block from '@/views/components/block.vue'
</script>

<template>
  <div class="items-top rel flex jc:center min-h:100vh bg:gray-80 bg:gray-10@dark ai:center@sm py:16 pt:0@sm">
    <div class="max-w:3x mx:auto px:24@sm px:32@lg">
      <div class="flex jc:center ai:center pt:32 pt:0@sm gap:48@sm">
        <!-- Hybridly logo -->
        <div class="flex ai:center">
          <svg
            width="90"
            height="90"
            viewBox="0 0 190 190"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M119.513 123.299C135.361 112.699 146.758 86.6936 132.495 61.6673L94.4647 9C79.5395 23.1832 73.7851 34.9279 75.4141 51.0769C76.4903 61.7463 82.002 71.3344 88.2785 80.0293L119.513 123.299Z"
              fill="url(#paint0_linear_3_25)"
            />
            <path
              d="M93.3662 183.811C109.215 173.211 120.612 147.205 106.348 122.179L68.3178 69.5114C53.3926 83.6946 47.6382 95.4393 49.2672 111.588C50.3435 122.258 55.8552 131.846 62.1316 140.541L93.3662 183.811Z"
              fill="url(#paint1_linear_3_25)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_3_25"
                x1="107.073"
                y1="9"
                x2="107.073"
                y2="123.299"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF96DD" />
                <stop
                  offset="1"
                  stop-color="#FBB5E4"
                />
              </linearGradient>
              <linearGradient
                id="paint1_linear_3_25"
                x1="80.9266"
                y1="69.5114"
                x2="80.9266"
                y2="183.811"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#E3BFFF" />
                <stop
                  offset="1"
                  stop-color="#CC8DFD"
                />
              </linearGradient>
            </defs>
          </svg>
          <span class="title f:bold bg:text t:center t:48 t:transparent">Hybridly</span>
        </div>
      </div>

      <div class="mt:32 bg:white bg:gray-100@dark overflow:hidden shadow r:4@sm">
        <div class="grid grid-cols:1 grid-cols:2@md">
          <!-- Documentation -->
          <Block
            title="Documentation"
            url="https://laravel.com/docs"
          >
            <template #icon>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                class="w:32 h:32 fg:gray-40"
              >
                <path
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </template>
            <template #default>
              Laravel has wonderful, thorough documentation covering every aspect of the framework.
              Whether you are new to the framework or have previous experience with Laravel, we recommend
              reading all of the documentation from beginning to end.
            </template>
          </Block>

          <!-- Laracasts -->
          <Block
            class="bt:1|solid border-color:gray-70 border-color:gray-20@dark bt:0|solid@md bl:1|solid@md"
            title="Laracasts"
            url="https://laracasts.com"
          >
            <template #icon>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                class="w:32 h:32 fg:gray-40"
              >
                <path
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </template>
            <template #default>
              Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development.
              Check them out, see for yourself, and massively level up your development skills in the
              process.
            </template>
          </Block>

          <!-- Laracasts -->
          <Block
            class="bt:1|solid border-color:gray-70 border-color:gray-20@dark"
            title="Laravel News"
            url="https://laravel-news.com/"
          >
            <template #icon>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                class="w:32 h:32 fg:gray-40"
              >
                <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </template>
            <template #default>
              Laravel News is a community driven portal and newsletter aggregating all of the latest and
              most important news in the Laravel ecosystem, including new package releases and tutorials.
            </template>
          </Block>

          <!-- Ecosystem -->
          <Block
            class="p:24 bt:1|solid border-color:gray-70 border-color:gray-20@dark bl:1|solid@md"
            title="Vibrant ecosystem"
          >
            <template #icon>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                class="w:32 h:32 fg:gray-40"
              >
                <path
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </template>
            <template #default>
              Laravel's robust library of first-party tools and libraries, such as <a
                href="https://forge.laravel.com"
                class="underline"
              >Forge</a>, <a
                href="https://vapor.laravel.com"
                class="underline"
              >Vapor</a>, <a
                href="https://nova.laravel.com"
                class="underline"
              >Nova</a>, and <a
                href="https://envoyer.io"
                class="underline"
              >Envoyer</a> help you take your projects to the next level. Pair them with powerful open
              source libraries like <a
                href="https://laravel.com/docs/billing"
                class="underline"
              >Cashier</a>, <a
                href="https://laravel.com/docs/dusk"
                class="underline"
              >Dusk</a>, <a
                href="https://laravel.com/docs/broadcasting"
                class="underline"
              >Echo</a>, <a
                href="https://laravel.com/docs/horizon"
                class="underline"
              >Horizon</a>, <a
                href="https://laravel.com/docs/sanctum"
                class="underline"
              >Sanctum</a>, <a
                href="https://laravel.com/docs/telescope"
                class="underline"
              >Telescope</a>, and more.
            </template>
          </Block>
        </div>
      </div>

      <div class="flex jc:center mt:16 ai:center@sm jc:end@sm">
        <div class="ml:16 t:center f:14 fg:gray-40 t:right@sm ml:0@sm">
          <!-- Laravel v{{ Illuminate\Foundation\Application::VERSION }} (PHP v{{ PHP_VERSION }}) -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  animation: title-gradient 20s ease infinite;
  background-size: 400% 400%;
  background-image: linear-gradient(-45deg,
      #7c3aed,
      #fda4af,
      #f0abfc,
      #a78bfa,
      #fda4af,
      #a78bfa,
      #f0abfc,
      #fda4af);
}

@keyframes title-gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
