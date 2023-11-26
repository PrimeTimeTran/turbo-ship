<script setup>
const todos = useState('todos', () => [])
const countDone = computed(() => todos.value.filter((t) => t.done).length)
const countUndone = computed(() => todos.value.filter((t) => !t.done).length)
</script>
<template>
  <div>
    <div>
      <label>Done Count</label>
      <div>
        <span v-text="countDone" />
      </div>
    </div>
    <div>
      <label>Undone Count</label>
      <div>
        <span v-text="countUndone" />
      </div>
    </div>
  </div>
</template>
