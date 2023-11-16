<script setup>
const props = defineProps(['entity', 'idx'])
const entity = ref(props.entity)

const attribute = ref('')
const attributeEditing = ref(false)
const focusAttr = (item) => {
  if (attribute?.value?._id === item._id) {
    attribute.value = ''
    return
  }
  attributeEditing.value = !attributeEditing.value
  attribute.value = item
}

const close = (items) => {
  const a = entity.value.attributes.filter(
    (a) => a._id === attribute.value._id
  )[0]
  a.validators = items
}
</script>
<template>
  <div>
    <EntitiesEntityControl
      :idx="idx"
      :entity="entity"
    />
    <EntitiesEntityAttributeForm
      :entity="entity"
      :focusAttr="focusAttr"
    />
    <EntitiesAttributeDetailSelector
      :entity="entity"
      :attribute="attribute"
      :focusAttr="focusAttr"
    />
    <EntitiesAttributeDetails
      v-if="attribute"
      @close="close"
      :entity="entity"
      :attribute="attribute"
    />
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
