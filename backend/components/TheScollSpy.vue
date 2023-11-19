<template>
  <aside :v-if="showTOC">
    <div class="sticky top-16">
      <h2
        class="dark:text-white uppercase text-black font-h2 text-lg lg:mt-16 tracking-wider"
      >
        Table of contents
      </h2>
      <nav class="mt-4">
        <ul>
          <li
            :key="link.id"
            v-for="link of tocRef?.links"
            @click="tableOfContentsHeadingClick(link.id)"
          >
            <a
              :href="`#${link.id}`"
              :class="{ active: link.id.toLowerCase() === activeItem }"
            >
              {{ link.text }}
            </a>
            <div
              class="pl-2 lg:ml-4"
              v-if="link.children"
            >
              <ul>
                <li v-for="childLink of link.children">
                  <a
                    :href="`#${childLink.id}`"
                    :class="{
                      active: childLink.id.toLowerCase() === activeItem,
                    }"
                  >
                    {{ childLink.text }}
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script setup>
let { toc } = useContent()
// let { tocRef, showTOC, activeItem } = useSpyObservers(toc)
const props = defineProps(['count'])
const reactiveCount = ref(props.count)

watch(
  () => props.count,
  (newCount) => {
    reactiveCount.value = newCount
  }
)

function tableOfContentsHeadingClick(link) {
  activeItem = link.id
}
</script>

<style>
.active {
  color: #41b883;
}
</style>
