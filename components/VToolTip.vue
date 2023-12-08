<script setup>
const props = defineProps(['tool', 'tip', 'onPress', 'id', 'item'])
</script>
<template>
  <div v-if="item.tip" class="w-full tooltip" :data-tip="item.tip">
    <button
      class="flex justify-between w-full"
      v-html="`<span class='mr-auto'>${tool}</span> ${item.shortcut ? item.shortcut : ''}`"
    />
  </div>
  <div v-else class="w-full tooltip">
    <button
      class="flex justify-between w-full"
      v-html="`<span class='mr-auto'>${tool}</span> ${item.shortcut ? item.shortcut : ''}`"
    />
  </div>
</template>

<style scoped>
:deep(u) {
  text-decoration-color: green;
  text-decoration-thickness: 2px;
}
</style>
