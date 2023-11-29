<script setup>
import XIcon from '~/assets/images/icons/XIcon.vue'
const props = defineProps(['right'])

const newTodo = ref('')
const todos = useState('todos', () => [])

function addTodo() {
  const todo = {
    id: todos.value.length + 1,
    name: newTodo.value,
    done: false,
  }
  todos.value.push(todo)
  newTodo.value = ''
}

function toggleStatus(id) {
  const idx = todos.value.findIndex((t) => t.id === id)
  const todo = todos.value[idx]
  todo.done = !todo.done
  todos.value[idx] = todo
}
function removeTodo(id) {
  const idx = todos.value.findIndex((t) => t.id === id)
  todos.value.splice(idx, 1)
}
</script>

<template>
  <div
    v-if="store.showOverlay"
    class="fixed bottom-0 border bg-white dark:bg-slate-900 rounded-lg w-96 h-64 p-2 z-40 overflow-auto"
    :class="{
      hidden: hidden,
      'right-2': right,
      'left-2': !right,
    }"
  >
    <div>
      <h1>Todos</h1>
      <input autofocus v-model="newTodo" class="text-black px-1" @keyup.enter="addTodo" />
      <ol class="text-white">
        <li
          :key="todo.id"
          v-for="todo of todos"
          :class="{ done: todo.done }"
          @click="toggleStatus(todo.id)"
          class="flex flex-row justify-between"
        >
          <span v-text="todo.name" />
          <XIcon @click="removeTodo(todo.id)" />
        </li>
      </ol>
      <VOther />
    </div>
  </div>
</template>

<style>
.done {
  color: indianred;
  text-decoration: line-through;
}
</style>
