<script setup>
const props = defineProps(['focusAttr', 'focusedAttribute', 'entity'])
</script>
<template>
  <div class="flex justify-between pt-2 pl-2 cursor-pointer">
    <div class="flex overflow-x-auto scrollbar-hide">
      <div
        class="px-2 hover:text-blue-600 text-sm"
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
          :class="{ 'text-blue-500': focusedAttribute.name === a.name }"
        />
      </div>
    </div>
  </div>
</template>
