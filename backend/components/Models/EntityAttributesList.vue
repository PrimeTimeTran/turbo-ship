<script setup>
const props = defineProps(['entity', 'entities'])

const entities = ref(props.entities)

const getAttr = (id, name) => {
  let idx = entities.value.findIndex((e) => e._id === id)
  const e = entities.value[idx]
  idx = e.attributes.findIndex((a) => a.name == name)
  return e.attributes[idx]
}

const onAttrSave = (entityId, attrName, value) => {
  const attr = getAttr(entityId, attrName)
  attr.name = value
  attr.editing = !attr.editing
}

const onToggleAttrName = (entityId, attrName) => {
  if (protectedAttributes.includes(attrName)) return
  const attr = getAttr(entityId, attrName)
  attr.editing = !attr.editing
  setTimeout(() => {
    document.getElementById(entityId + attrName).focus()
  }, 100)
}

const onEditAttr = (entityId, attrName, value) => {
  if (protectedAttributes.includes(attrName)) return
  const attr = getAttr(entityId, attrName)
  attr.type = value
}
</script>
<template>
  <div
    v-if="entity.showAttributes"
    class="min-h-32 p-2 max-h-96 overflow-auto scrollbar-hide rounded shadow"
  >
    <div
      v-for="(attr, attrIdx) of AttributeValidator.safeAttributes(entity)"
      class="my-2 border-2 border-gray-300 border-opacity-50 hover:border-opacity-100 rounded odd:bg-zinc-100 even:bg-slate-100 shadow"
    >
      <div class="mb-1 p-2 rounded">
        <div class="flex">
          <span
            v-text="attrIdx + 1 + '.'"
            class="text-gray-400 py-1 mr-2"
          />
          <input
            v-if="attr.editing"
            v-model="attr.name"
            v-text="attr.name"
            :id="entity._id + attr.name"
            @click="onToggleAttrName(entity._id, attr.name)"
            class="flex flex-grow px-2 py-1 bg-white border-2 border-slate-200 border-opacity-50 hover:border-opacity-100 rounded"
            @keyup.enter="onAttrSave(entity._id, attr.name, attr.name)"
            :class="{
              'border-0': entity.editing,
              'hover:border-opacity-100': entity.editing,
              'text-gray-400 ': protectedAttributes.includes(attr.name),
              'text-blue-500 ': !protectedAttributes.includes(attr.name),
              'dark:text-blue-500': !protectedAttributes.includes(attr.name),
            }"
          />
          <span
            v-else
            v-text="attr.name"
            class="flex flex-grow px-2 py-1 bg-white border-2 border-slate-200 border-opacity-50 hover:border-opacity-100 rounded"
            @click="onToggleAttrName(entity._id, attr.name)"
            :class="{
              'text-gray-400 ': protectedAttributes.includes(attr.name),
              'text-blue-500 ': !protectedAttributes.includes(attr.name),
              'dark:text-blue-500': !protectedAttributes.includes(attr.name),
              ['hover:border-opacity-100']: !protectedAttributes.includes(
                attr.name
              ),
            }"
          />
        </div>
        <ModelsAttributeTypesSelector
          :attr="attr"
          :entity="entity"
          @onEditAttr="onEditAttr"
          :selectedType="attr.type"
        />
      </div>
    </div>
  </div>
</template>
