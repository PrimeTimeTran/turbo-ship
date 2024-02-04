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
  <section :key="entity._id" :id="`${entity.name}-${entity._id}`" class="ml-1 p-1">
    <div role="tablist" class="flex tabs tabs-lifted">
      <input
        checked
        role="tab"
        type="radio"
        @click="focusTab(0)"
        :name="`entity-tab-${entity._id}`"
        class="text-white tab font-semibold flex-1"
        :aria-label="`${capitalize(entity.name)} (Attributes)`"
        :class="{
          'bg-primary': entityIdx % 2 == 0,
          'bg-accent': !(entityIdx % 2 == 0),
          'active-tab-class': tabIdx === 0,
        }"
      />
      <input
        role="tab"
        type="radio"
        @click="focusTab(1)"
        aria-label="Validations"
        class="text-white tab font-semibold flex-1"
        :name="`entity-tab-${entity._id}`"
        :class="{
          'bg-primary': entityIdx % 2 == 0,
          'bg-accent': !(entityIdx % 2 == 0),
          'active-tab-class': tabIdx === 1,
        }"
      />
      <input
        role="tab"
        type="radio"
        @click="focusTab(2)"
        aria-label="Settings"
        :name="`entity-tab-${entity._id}`"
        class="text-white tab font-semibold flex-1"
        :class="{
          'bg-primary': entityIdx % 2 == 0,
          'bg-accent': !(entityIdx % 2 == 0),
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
      class="flex p-2 rounded tab-content bg-base-100 border-base-300"
      :class="{
        'border-purple': !(entityIdx % 2 == 0),
        'border-lightgreen': entityIdx % 2 == 0,
      }"
    >
      <EntitiesEntityAttributes :entity="entity" />
    </div>
    <div
      v-if="tabIdx === 1 && isOpen"
      class="flex p-2 rounded tab-content bg-base-100 border-base-300"
      :class="{
        'border-purple': !(entityIdx % 2 == 0),
        'border-lightgreen': entityIdx % 2 == 0,
      }"
    >
      <EntitiesEntityValidations :entity="entity" />
    </div>
    <div
      v-if="tabIdx === 2 && isOpen"
      class="flex p-2 rounded tab-content bg-base-100 border-base-300"
      :class="{
        'border-purple': !(entityIdx % 2 == 0),
        'border-lightgreen': entityIdx % 2 == 0,
      }"
    >
      <div class="p-16">
        <h1>Settings</h1>
        <input
          role="tab"
          :id="entity._id"
          v-model="entity.name"
          placeholder="customer, transaction, statement..."
          class="flex py-1 px-2 text-md rounded-t pr-6 font-bold text-blue-500 entity-input dark:text-white dark:placeholder-white border-opacity-0 hover:border-opacity-100 dark:border-gray-500 dark:hover:border-white shadow-md hover:shadow-lg"
        />
        <div>Remove</div>
      </div>
    </div>
  </section>
</template>

<style>
.active-tab-class {
  color: white;
  background-color: darkorchid !important;
}

.even-tab {
  color: lightgreen;
  --tab-bg: lightgreen;
  --tab-border-color: lightgreen;
}

.border-lightgreen {
  border-color: lightgreen;
}
.border-purple {
  border-color: darkorchid;
}

.odd-tab {
  color: darkorchid;
  --tab-bg: darkorchid;
  --tab-border-color: darkorchid;
}
</style>
