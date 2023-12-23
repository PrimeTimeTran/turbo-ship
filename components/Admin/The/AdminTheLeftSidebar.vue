<script setup>
import { Icon } from '#components'
import {
  MapIcon,
  Bars4Icon,
  BellIcon,
  LanguageIcon,
  CalendarIcon,
  TableCellsIcon,
  PuzzlePieceIcon,
} from '@heroicons/vue/20/solid'
import { useEventBus } from '@vueuse/core'

const ArtIcon = h(Icon, { name: 'map:art-gallery', color: 'grey' })
const ArtIcon2 = h(Icon, { name: 'icon-park-solid:components', color: 'grey' })
const state = reactive({
  leftOpen: true,
  rightOpen: false,
  notification: false,
  notificationCount: 0,
})

onMounted(() => {
  const bus = useEventBus('newMessage')
  function listener(event) {
    state.notification = true
    state.notificationCount = state.notificationCount + 1
    toastEm({ val: 'New Message', type: 'info', position: 'tRight' })
  }
  const unsubscribe = bus.on(listener)
})

const router = useRouter()
function redirect(entity) {
  router.push(`/administrator/${entity}`)
}

const themeToggle = ref(null)
function onToggleTheme(callback) {
  const checkbox = themeToggle.value
  if (checkbox) {
    checkbox.checked = !checkbox.checked
    callback()
  }
}
</script>
<template>
  <div class="drawer-side z-0 overflow-auto scrollbar-hide">
    <ul
      class="menu px-1 min-h-full bg-base-200 dark:bg-base-200 text-base-content space-y-3 pb-10 overflow-hidden z-0"
      :class="{
        ['w-20']: !state.leftOpen,
        ['w-64']: state.leftOpen,
        ['max-w-20']: !state.leftOpen,
      }"
    >
      <TSidebarItem :text="'Turboship'" :state="state" @click="state.leftOpen = !state.leftOpen" :icon="Bars4Icon" />
      <div class="divider"></div>
      <TSidebarItem
        v-for="foo in GlobalState.sidebar"
        :text="foo.label"
        :state="state"
        @click="redirect(foo.path)"
        :icon="foo.icon || TableCellsIcon"
        :focused="router.currentRoute.value.fullPath.includes(foo.path)"
      />
      <div class="grow" />
      <div class="divider" />
      <TSidebarItem
        :text="'Calendar'"
        :state="state"
        @click="() => router.push(`/administrator/calendar`)"
        :icon="CalendarIcon"
      />
      <TSidebarItem
        :state="state"
        :text="'Messages'"
        :icon="BellIcon"
        :notification="state.notification"
        :notificationCount="state.notificationCount"
        @click="() => router.push(`/administrator/chat`)"
      />
      <TSidebarItem :text="'Map'" :state="state" @click="() => router.push(`/administrator/map`)" :icon="MapIcon" />
      <TSidebarItem
        :text="'Design'"
        :state="state"
        :icon="PuzzlePieceIcon"
        :options="[
          { text: 'Theme/UI', route: '/theme/ui', icon: ArtIcon },
          { text: 'Components', route: '/theme/components', icon: ArtIcon2 },
        ]"
      />
      <TSidebarItem
        :text="'Languages'"
        :state="state"
        :icon="LanguageIcon"
        :options="[
          { text: 'English', icon: ArtIcon },
          { text: 'Vietnamese', icon: ArtIcon2 },
        ]"
      />
      <div
        class="btn btn-ghost flex primary-content justify-start items-center hover:text-green-400 dark:hover:text-green-400"
        @click="
          () => {
            onToggleTheme(toggleTheme)
          }
        "
      >
        <label class="swap swap-rotate">
          <input
            type="checkbox"
            class="theme-controller"
            @click="
              () => {
                onToggleTheme(toggleTheme)
              }
            "
            ref="themeToggle"
          />
          <svg
            class="swap-on fill-yellow-400"
            width="28"
            height="28"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28 28"
          >
            <path
              stroke-width="2"
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
            />
          </svg>
          <svg
            class="swap-off fill-white"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
            />
          </svg>
        </label>
        <span class="ml-2" v-text="'Theme'" v-if="state.leftOpen" />
      </div>
      <button
        class="btn btn-ghost flex primary-content hover:text-green-400 dark:hover:text-green-400"
        :class="{
          ['justify-start']: state.leftOpen,
        }"
      >
        <div class="avatar online placeholder">
          <div
            class="bg-neutral text-neutral-content rounded-full"
            :class="{ 'w-8': !state.leftOpen, 'w-6': state.leftOpen }"
          >
            <span class="text-xs" :class="{ 'text-lg': !state.leftOpen }"> LT </span>
          </div>
        </div>
        <span v-text="'Loi Tran'" v-if="state.leftOpen" />
      </button>
      <!-- <input type="checkbox" id="toggle" />
      <div class="box"></div> -->
    </ul>
  </div>
</template>

<style scoped>
.drawer-side {
  z-index: 0 !important;
}

.box {
  bottom: 0;
  top: 0;
  width: 100px;
  left: -100px;
  height: 100%;
  position: fixed;
  background-color: blue;
  transition: transform 0.3s ease;
}

#toggle:not(:checked) + .box {
  display: none;
}

#toggle:checked ~ .box {
  /* display: none; */
}

#toggle:checked ~ .box {
  transform: translateX(100px);
}
</style>
