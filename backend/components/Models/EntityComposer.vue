<script setup>
const props = defineProps(['entity', 'entities'])

const entity = ref(props.entity)
const entities = ref(props.entities)

const focusedAttr = ref('')
const focusAttr = (item) => {
  if (focusedAttr?.value?._id === item._id) {
    focusedAttr.value = ''
    return
  }
  focusedAttr.value = item
}

const close = (items) => {
  if (entity && entity.value) {
    const a = entity.value.attributes.filter(
      (a) => a._id === focusedAttr.value._id
    )[0]
    a.validators = items
  }
}

const getEntity = (id) => {
  let idx = entities.value.findIndex((item) => item._id == id)
  return entities.value[idx]
}

const onToggleEntityAttributesShow = (id) => {
  const e = getEntity(id)
  e.showAttributes = !e.showAttributes
  showAttributes.value = !showAttributes.value
}
</script>
<template>
  <div>
    <ModelsEntityControl
      :entity="entity"
      :entities="entities"
    />
    <ModelsAttributeForm
      :entity="entity"
      :entities="entities"
    />
    <div
      v-if="!entity.showAddAttribute"
      class="flex justify-between pt-2"
    >
      <div class="flex items-center pt-2">
        <div
          class="px-2 hover:text-blue-600"
          @click="focusAttr(attribute)"
          v-for="(attribute, attrIdx) of AttributeValidator.safeAttributes(
            entity
          )"
        >
          <span
            class="text-gray-500"
            v-text="attrIdx + 1 + '. '"
          />
          <span
            class="font-semibold"
            v-text="attribute.name + ' '"
            :class="{ 'text-blue-500': focusedAttr.name === attribute.name }"
          />
        </div>
      </div>

      <button
        type="button"
        class="px-2 rounded border-slate-200 hover:text-blue-600"
        @click="onToggleEntityAttributesShow(entity._id)"
      >
        <font-awesome-icon
          v-if="entity.showAttributes"
          icon="fa-solid fa-eye-slash"
          class="text-gray-400 mr-2"
        />
        <font-awesome-icon
          v-else
          icon="fa-solid fa-eye"
          class="text-gray-400 mr-2"
        />
        <span v-text="entity.showAttributes ? 'Hide' : 'Show'" />
      </button>
    </div>
    <div
      class="my-2 px-2"
      v-if="focusedAttr"
    >
      <ModelsAttributeTabsForm
        @close="close"
        :entity="entity"
        :entities="entities"
        :focusedAttr="focusedAttr"
      />
    </div>
    <div
      class="flex justify-between"
      v-if="AttributeValidator.safeAttributes(entity).length > 0"
    >
      <label
        class="ml-3 font-bold text-gray-500 mt-4"
        :class="{
          hidden: !entity.showAttributes,
        }"
      >
        Attributes ({{ AttributeValidator.safeAttributes(entity).length }})
      </label>
    </div>
  </div>
</template>
