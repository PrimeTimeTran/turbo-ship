import { ref, computed } from 'vue'

interface Todo {
  firstName: String
  id: String
  lastName?: String
  status: String
  house?: String
}

export function useTodos() {
  const newTodo = ref('')
  let todos = ref(seedData)

  const addTodo = () => {
    const todo: Todo = {
      firstName: newTodo.value,
      id: Date.now().toString(),
      status: 'undone',
    }
    todos.value.push(todo)
    newTodo.value = ''
    return todo
  }

  const toggleStatus = (id: String) => {
    const idx = todos.value.findIndex((todo) => todo.id == id)
    if (idx !== -1) {
      todos.value[idx].status =
        todos.value[idx].status === 'done' ? 'undone' : 'done'
    }
  }

  const remove = (id: String) => {
    const idx = todos.value.findIndex((todo) => todo.id == id)
    if (idx !== -1) {
      todos.value.splice(idx, 1)
      return true
    }
    return false
  }

  const countDone = computed(
    () => todos.value.filter((t) => t.status === 'done').length
  )
  const countUndone = computed(
    () => todos.value.filter((t) => t.status === 'undone').length
  )

  return {
    todos,
    addTodo,
    newTodo,
    toggleStatus,
    remove,
    countDone,
    countUndone,
  }
}

const seedData: Todo[] = [
  {
    id: '1',
    status: 'done',
    firstName: 'Harry',
    lastName: 'Potter',
    house: 'Gryffindor',
  },
  {
    id: '2',
    status: 'done',
    firstName: 'Draco',
    lastName: 'Malfoy',
    house: 'Slytherin',
  },
  {
    id: '3',
    status: 'done',
    firstName: 'Cedric',
    lastName: 'Diggory',
    house: 'Hufflepuff',
  },
  {
    id: '4',
    status: 'done',
    firstName: 'Luna',
    lastName: 'Lovegood',
    house: 'Ravenclaw',
  },
]
