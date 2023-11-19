<template>
  <div>
    <ul class="list-decimal text-green-400 px-32">
      <li
        :key="todo.id"
        v-for="todo of todos"
        @click="toggleStatus(todo.id)"
        class="p-3 m-1 border-2 bg-green-400 rounded-lg shadow-md hover:shadow-lg"
      >
        <div
          class="text-white font-bold"
          :class="{
            done: todo.status == 'done' ? 'line-through' : '',
          }"
        >
          <div class="flex justify-between todo text-white font-bold">
            <span
              v-text="todo.firstName"
              class="text-white font-bold"
            />
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
  background: red;
}
</style>
