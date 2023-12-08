<script setup>
import _ from 'lodash'
const props = defineProps(['entity', 'entityIdx'])
const { removeEntity } = useEntities()
let open = ref(true)
const tabIdx = ref(0)
function focusTab(idx) {
  tabIdx.value = idx
  if (!open.value) {
    open.value = !open.value
  } else if (open.value && idx === tabIdx.value) {
    toggle()
  }
}

function toggle() {
  open.value = !open.value
}

watch(
  () => store.collapsed,
  (collapsed) => {
    open.value = !collapsed
  },
)

const isOpen = computed(() => {
  return open.value
})
</script>
<template>
  <section
    :key="entity._id"
    :id="`${entity.name}-${entity._id}`"
    class="dark:border-gray-600 rounded shadow hover:shadow m-1 p-1"
  >
    <div role="tablist" class="flex tabs tabs-lifted">
      <input
        @click="focusTab(0)"
        type="radio"
        role="tab"
        class="tab font-semibold flex-1"
        :class="{
          'even-tab': entityIdx % 2 == 0,
          'odd-tab': !(entityIdx % 2 == 0),
          'active-tab-class': tabIdx === 0,
        }"
        :aria-label="`${capitalize(entity.name)} (Attributes)`"
        :name="`entity-tab-${entity._id}`"
        checked
      />
      <input
        @click="focusTab(1)"
        type="radio"
        role="tab"
        class="tab font-semibold flex-1"
        aria-label="Validations"
        :name="`entity-tab-${entity._id}`"
        :class="{
          'even-tab': entityIdx % 2 == 0,
          'odd-tab': !(entityIdx % 2 == 0),
          'active-tab-class': tabIdx === 1,
        }"
      />
      <input
        @click="focusTab(2)"
        type="radio"
        role="tab"
        class="tab font-semibold flex-1"
        aria-label="Settings"
        :name="`entity-tab-${entity._id}`"
        :class="{
          'even-tab': entityIdx % 2 == 0,
          'odd-tab': !(entityIdx % 2 == 0),
          'active-tab-class': tabIdx === 2,
        }"
      />
      <div class="flex grow self-center justify-end">
        <div class="join">
          <button class="join-item btn btn-sm btn-ghost" @click="toggle">
            <FontAwesomeIcon v-if="open" icon="fa-solid fa-caret-up text-xs" />
            <FontAwesomeIcon v-else icon="fa-solid fa-caret-down text-xs" />
          </button>
          <button class="join-item btn btn-sm btn-ghost" @click="removeEntity(entity._id)">
            <FontAwesomeIcon icon="fa-solid fa-circle-xmark text-xs" class="text-red-400" />
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="tabIdx === 0 && isOpen"
      class="flex pt-2 border-2"
      :class="{
        'border-green-400': entityIdx % 2 == 0,
        'border-green-400': entityIdx % 2 == 0,
        'border-purple-500': !(entityIdx % 2 == 0),
        'border-purple-500': !(entityIdx % 2 == 0),
      }"
    >
      <EntitiesEntityAttributes :entity="entity" />
    </div>
    <div
      v-if="tabIdx === 1 && isOpen"
      class="flex pt-2 border-2"
      :class="{
        'border-green-400': entityIdx % 2 == 0,
        'border-green-400': entityIdx % 2 == 0,
        'border-purple-500': !(entityIdx % 2 == 0),
        'border-purple-500': !(entityIdx % 2 == 0),
      }"
    >
      <EntitiesEntityValidations :entity="entity" />
    </div>
    <div
      v-if="tabIdx === 2 && isOpen"
      class="flex pt-2 flex-col border-2"
      :class="{
        'border-green-400': entityIdx % 2 == 0,
        'border-green-400': entityIdx % 2 == 0,
        'border-purple-500': !(entityIdx % 2 == 0),
        'border-purple-500': !(entityIdx % 2 == 0),
      }"
    >
      <div class="p-16">
        <h1>Settings</h1>
        <input
          role="tab"
          :id="entity._id"
          v-model="entity.name"
          placeholder="customer, transaction, statement..."
          class="flex py-1 px-2 text-md rounded-t border-2 bg-white pr-6 font-bold text-blue-500 entity-input dark:text-white dark:placeholder-white border-opacity-0 hover:border-opacity-100 dark:border-gray-500 dark:bg-slate-800 dark:hover:border-white shadow-md hover:shadow-lg"
        />
        <div>Remove</div>
      </div>
    </div>
  </section>
</template>

<style>
.active-tab-class {
  color: white !important;
}

.even-tab {
  color: lightgreen;
  --tab-bg: lightgreen;
  --tab-border-color: lightgreen;
}

.odd-tab {
  color: darkorchid;
  --tab-bg: darkorchid;
  --tab-border-color: darkorchid;
}
</style>
