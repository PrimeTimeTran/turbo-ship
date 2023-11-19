
<template>
  <aside
    ref="toc"
    class="lg:col-span-1 lg:flex lg:flex-col relative right-0 top-0"
  >
    <div class="sticky top-16">
      <h2
        class="dark:text-white uppercase text-black font-h2 text-lg lg:mt-16 tracking-wider"
      >
        Table of contents
      </h2>
      <nav class="mt-4 bg-blue-400">
        <ul>
          <li
            class="toc-list"
            :class="{}"
          >
            <a
              role="button"
              class="dark:text-lightblue transition-colors duration-75 text-base mb-2 block"
            >
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script setup>
let { toc } = useContent()
let { tocRef, observer, activeItem, isClickScrolling } = useSpyObservers()

function tableOfContentsHeadingClick(link) {
  isClickScrolling = true
  activeItem = link.id

  setTimeout(() => {
    isClickScrolling = false
  }, 1000)
}
</script>

<style>
.active {
  color: red;
}
</style>
