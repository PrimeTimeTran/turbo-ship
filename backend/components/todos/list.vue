<template>
  <div>
    <ul class="list-decimal">
      <li
        :key="todo.id"
        v-for="todo of todos"
        @click="toggleStatus(todo.id)"
        class="p-3 m-1 border-2 border-green-600"
      >
        <div
          :class="{
            done: todo.status == 'done' ? 'line-through' : '',
          }"
        >
          <div class="flex justify-between">
            <div>
              {{ todo.firstName }}
            </div>
            <div @click="remove(todo.id)">X</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { todos, toggleStatus, remove } = useTodos()
</script>

<style>
.done {
  position: relative;
}

.done::after {
  left: 0;
  top: 50%;
  content: '';
  width: 100%;
  height: 1px;
  position: absolute;
  background: black;
}
</style>
