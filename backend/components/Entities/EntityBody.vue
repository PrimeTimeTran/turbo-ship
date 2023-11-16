<script setup>
const props = defineProps(['entity', 'idx'])
const entity = ref(props.entity)

const attribute = ref('')

const focusAttr = (item) => {
  if (attribute?.value?._id === item._id) {
    attribute.value = ''
    return
  }
  console.log({ item })
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
      :selectedType="attribute.type"
      :focusedAttribute="attribute"
    />
    <EntitiesAttributeDetailsSelector
      :entity="entity"
      :focusAttr="focusAttr"
      :focusedAttribute="attribute"
    />
    <EntitiesAttributeDetails
      v-if="attribute"
      @close="close"
      :entity="entity"
      :selectedType="attribute.type"
      :focusedAttribute="attribute"
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
