<script setup>
import XIcon from '~/assets/images/icons/XIcon.vue'
const hidden = ref(false)
function toggleView() {
  hidden.value = !hidden.value
}

const newTodo = ref('')
const todos = ref([
  {
    id: 1,
    name: 'Read docs',
    done: true,
  },
  {
    id: 2,
    name: 'Try examples',
    done: false,
  },
  {
    id: 3,
    name: 'Build startup',
    done: false,
  },
])

function addTodo() {
  const todo = {
    id: todos.value.length+1,
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
    class="fixed left-2 bottom-0 border bg-white dark:bg-slate-900 rounded-lg w-96 h-64 p-2 z-40 overflow-auto"
    :class="{
      hidden: hidden,
    }"
  >
    <div>
      <h1>Todos</h1>
      <input
        autofocus
        v-model="newTodo"
        class="text-black px-1"
        @keyup.enter="addTodo"
      />
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
    </div>

    <div
      id="previewer"
      @click="toggleView"
    />
  </div>
</template>

<style>
.done {
  color: indianred;
  text-decoration: line-through;
}
</style>
