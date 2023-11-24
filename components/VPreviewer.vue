<script setup>
const pronoun = 'Harry'
const verb = ' is '
const adjective = 'magical'
const spells = ['HTML', 'JS', 'Vue']

function hotSpell(spell) {
  return spell === 'Vue' ? 'green' : 'black'
}
</script>
<template>
  <div
    class="fixed left-0 bottom-0 border bg-white dark:bg-slate-900 rounded-lg w-96 h-96 p-2 z-40"
  >
    <div>
      {{ pronoun }} {{ verb }} {{ adjective }}
    </div>
    <ul>
      <li
        v-for="spell of spells"
      >
        <div :style="{color: hotSpell(spell)}">{{ spell }}</div>
      </li>
    </ul>
  </div>
</template>
