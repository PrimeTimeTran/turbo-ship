<script setup>
const props = defineProps(['entity'])
const entity = ref(props.entity)

const attribute = ref('')
const focusAttr = (item) => {
  if (attribute?.value?._id === item._id) {
    attribute.value = ''
    return
  }
  attribute.value = item
}

const close = (items) => {
  if (entity && entity.value) {
    const a = entity.value.attributes.filter(
      (a) => a._id === attribute.value._id
    )[0]
    a.validators = items
  }
}
</script>
<template>
  <div>
    <EntitiesEntityControl :entity="entity" />
    <EntitiesAttributeForm :entity="entity" />
    <EntitiesAttributeList
      :entity="entity"
      :attribute="attribute"
      :focusAttr="focusAttr"
    />
    <div
      class="my-2 px-2"
      v-if="attribute"
    >
      <EntitiesAttributeTabsForm
        @close="close"
        :entity="entity"
        :attribute="attribute"
      />
    </div>
    <div
      class="flex"
      v-if="AttributeValidator.safeAttributes(entity).length > 0"
    >
      <label
        class="ml-3 font-bold text-gray-500 mt-4 text-sm"
        :class="{
          hidden: !entity.showAttributes,
        }"
      >
        Attributes ({{ AttributeValidator.safeAttributes(entity).length }})
      </label>
    </div>
  </div>
</template>
