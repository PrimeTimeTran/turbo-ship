<script setup>
const { isOpen, toggleOpen } = useToggleOpen()
</script>

<template>
  <aside
    :class="isOpen ? 'w-64' : 'w-26'"
    class="hidden sm:flex overflow-y-scroll h-screen z-30 ease-in-out transition-all duration-300 bg-white dark:bg-neutral-950 border-r-2 dark:border-r-zinc-800"
  >
    <div
      class="flex px-3"
      @click="toggleOpen"
    >
      <div :class="{ 'menu-trigger-open': isOpen }">
        <div
          class="menu-link-wrapper bg-white dark:bg-neutral-950 border-t-2 border-t-gray-100 dark:border-t-zinc-800 w-26"
          :class="{ 'w-64': isOpen }"
        >
          <div class="menu-link">
            <span class="lines"></span>
          </div>
        </div>
        <div
          v-if="isOpen"
          class="pt-32 space-y-12"
        >
          <p
            class="text-2xl truncate text-gray-500 dark:text-white my-72 hover:text-green-400 dark:hover:text-green-400"
          >
            Item 1
          </p>
        </div>
        <div
          v-else
          class="pt-32"
        >
          <div
            class="flex flex-col items-middle justify-center dark:text-white space-y-12"
          >
            <font-awesome-icon
              size="2x"
              class="text-gray-400 dark:text-white hover:text-green-400 dark:hover:text-green-400"
              icon="fa-solid fa-bars"
            />
            <font-awesome-icon
              size="2x"
              class="text-gray-400 dark:text-white hover:text-green-400 dark:hover:text-green-400"
              icon="fa-solid fa-blog"
            />
            <font-awesome-icon
              size="2x"
              class="text-gray-400 dark:text-white hover:text-green-400 dark:hover:text-green-400"
              icon="fa-solid fa-hat-wizard"
            />
            <font-awesome-icon
              size="2x"
              class="text-gray-400 dark:text-white hover:text-green-400 dark:hover:text-green-400"
              icon="fa-solid fa-user"
            />
            <font-awesome-icon
              size="2x"
              class="text-gray-400 dark:text-white hover:text-green-400 dark:hover:text-green-400"
              icon="fa-solid fa-address-card"
            />
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<style>
.menu-link-wrapper {
  cursor: pointer;
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 50px;
}

.menu-link {
  height: 100%;
  width: 65px;
}

.lines {
  -moz-transition: background 0.2s ease 0.4s;
  -o-transition: background 0.2s ease 0.4s;
  -webkit-transition: background 0.2s ease;
  transition: background 0.2s ease 0.4s;
  display: block;
  width: 100%;
  height: 2px;
  background: #aaa;
  -moz-transform-origin: 50% 50%;
  -ms-transform-origin: 50% 50%;
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  width: 60%;
  margin: 0 20%;
  position: relative;
  top: 22px;
}

.lines:before,
.lines:after {
  display: block;
  width: 100%;
  height: 2px;
  background: #aaa;
  -moz-transform-origin: 50% 50%;
  -ms-transform-origin: 50% 50%;
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  position: absolute;
  left: 0;
  content: '';
  -moz-transition: -moz-transform 0.2s ease 0s, width 0.2s ease 0.2s,
    top 0.2s ease 0.4s;
  -o-transition: -o-transform 0.2s ease 0s, width 0.2s ease 0.2s,
    top 0.2s ease 0.4s;
  -webkit-transition: -webkit-transform 0.2s ease, width 0.2s ease,
    top 0.2s ease;
  -webkit-transition-delay: 0s, 0.2s, 0.4s;
  transition: transform 0.2s ease 0s, width 0.2s ease 0.2s, top 0.2s ease 0.4s;
  -moz-transform-origin: 0 50%;
  -ms-transform-origin: 0 50%;
  -webkit-transform-origin: 0 50%;
  transform-origin: 0 50%;
}

.lines:before {
  top: -10px;
}

.lines:after {
  top: 10px;
}

.menu-trigger-open .lines {
  -moz-transition: background 0.2s ease 0s;
  -o-transition: background 0.2s ease 0s;
  -webkit-transition: background 0.2s ease;
  -webkit-transition-delay: 0s;
  transition: background 0.2s ease 0s;
}

.menu-trigger-open .lines:before,
.menu-trigger-open .lines:after {
  -moz-transition: top 0.2s ease 0s, width 0.2s ease 0.2s,
    -moz-transform 0.2s ease 0.4s;
  -o-transition: top 0.2s ease 0s, width 0.2s ease 0.2s,
    -o-transform 0.2s ease 0.4s;
  -webkit-transition: top 0.2s ease, width 0.2s ease,
    -webkit-transform 0.2s ease;
  -webkit-transition-delay: 0s, 0.2s, 0.4s;
  transition: top 0.2s ease 0s, width 0.2s ease 0.2s, transform 0.2s ease 0.4s;
  top: 0;
  width: 50%;
}

.menu-trigger-open .lines:before {
  -moz-transform: rotate3d(0, 0, 1, 45deg);
  -webkit-transform: rotate3d(0, 0, 1, 45deg);
  transform: rotate3d(0, 0, 1, 45deg);
}

.menu-trigger-open .lines:after {
  -moz-transform: rotate3d(0, 0, 1, -45deg);
  -webkit-transform: rotate3d(0, 0, 1, -45deg);
  transform: rotate3d(0, 0, 1, -45deg);
}
</style>
