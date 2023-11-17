<script setup>
const props = defineProps(['focusAttr', 'focusedAttribute', 'entity'])
</script>
<template>
  <div class="flex justify-between pt-2 pl-2 cursor-pointer">
    <div class="text-center p-2">
      <span
        v-text="`(${entity.attributes.length - 1})`"
        class="text-gray-400 text-sm"
      />
      <br />
      <span
        v-text="`Attributes`"
        class="text-gray-400 text-sm"
      />
    </div>
    <div class="flex flex-grow overflow-x-auto scrollbar-hide border rounded">
      <div
        class="flex justify-center align-middle items-middle flex-col px-2 hover:bg-gray-100 text-sm min-32 max-w-64"
        @click="focusAttr(a)"
        v-for="(a, attrIdx) of AttributeValidator.safeAttributes(entity)"
      >
        <span
          class="text-gray-500"
          v-text="attrIdx + 1 + '. '"
        />
        <span
          class="font-semibold"
          v-text="a.name + ' '"
          :class="{
            'text-gray-500': !(focusedAttribute._id === a._id),
            'text-blue-500': focusedAttribute._id === a._id,
          }"
        />
      </div>
    </div>
  </div>
</template>
