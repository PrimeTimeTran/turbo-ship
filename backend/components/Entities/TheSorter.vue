<script setup>
import draggable from 'vuedraggable'
const props = defineProps(['entities'])
const collapsed = ref(false)
const collapse = () => {
  collapsed.value = !collapsed.value
}
const collapseText = () => {
  return collapsed.value ? 'Show Attributes' : 'Collapse Attributes'
}
</script>
<template>
  <div
    v-if="store.view === 'sorter'"
    class="opacity-[.7] hover:opacity-90 w-100 justify-end flex flex-col max-h-full"
  >
    <div class="self-end my-2">
      <button
        @click="collapse"
        v-text="collapseText()"
      />
    </div>
    <div class="overflow-auto scrollbar-hide">
      <draggable
        tag="section"
        :list="entities"
        class="list-group"
      >
        <template #item="{ element: entity }">
          <section
            :key="entity._id"
            class="my-1 mx-5 p-5 rounded odd:bg-zinc-100 even: bg-slate-100 border hover:shadow-xl"
          >
            <div class="flex flex-row justify-between">
              <div
                class="font-bold"
                v-text="entity.name"
              ></div>
              <div v-text="`Attributes (${entity.attributes.length})`"></div>
            </div>
            <div v-if="!collapsed">
              <draggable
                tag="ul"
                class="list-group"
                :list="entity.attributes"
              >
                <template #item="{ element: attribute }">
                  <li
                    :key="attribute._id"
                    class="rounded m-1 p-2 odd:bg-zinc-50 even: bg-slate-50 border shadow hover:shadow-lg"
                  >
                    <span v-text="attribute.name" />
                  </li>
                </template>
              </draggable>
            </div>
          </section>
        </template>
      </draggable>
    </div>
  </div>
</template>
