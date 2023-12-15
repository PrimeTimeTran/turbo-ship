<script setup>
import { reset } from '@formkit/core'
const props = defineProps(['searching', 'fetchFilteredUsers', 'createForm', 'clear'])
const { addUser } = useUsers()

async function submit(fields) {
  if (props.searching) {
    await props.fetchFilteredUsers(fields)
    return
  }
  const user = addUser(fields)
  if (user) {
    reset('userForm')
  }
}
</script>

<template>
  <div class="relative">
    <FormKit
      id="userForm"
      type="form"
      @submit="submit"
      :actions="false"
      #default="{ value }"
      :classes="{
        help: 'dark:text-white',
        message: 'text-red-500 dark:text-red-300 absolute',
      }"
    >
    </FormKit>
  </div>
</template>

<style></style>
