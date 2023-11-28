<script setup>
import { Tooltip } from 'flowbite'

const props = defineProps(['tool', 'tip', 'onPress', 'id'])
const tooltip = ref()
function setup() {
  if (process.browser) {
    const $targetEl = document.getElementById('tooltip-default' + props.id)
    const $triggerEl = document.getElementById('tooltipButton' + props.id)
    const options = {
      placement: 'bottom',
      triggerType: 'hover',
      onHide: () => {
        // console.log('tooltip is shown')
      },
      onShow: () => {
        // console.log('tooltip is hidden')
      },
      onToggle: () => {
        // console.log('tooltip is toggled')
      },
    }

    // instance options with default values
    const instanceOptions = {
      id: props.id,
      override: true,
    }
    tooltip.value = new Tooltip($targetEl, $triggerEl, options, instanceOptions)
  }
}
onMounted(() => {
  setup()
})
</script>
<template>
  <div :key="id">
    <button
      type="button"
      v-html="tool"
      :id="'tooltipButton' + id"
      :data-tooltip-target="'tooltip-default' + id"
    />
    <div
      role="tooltip"
      :id="'tooltip-default' + id"
      class="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
    >
      {{ tip }}
      <div class="tooltip-arrow" data-popper-arrow />
    </div>
  </div>
</template>
<style></style>
