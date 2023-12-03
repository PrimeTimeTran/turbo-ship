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
      <div id="User" class="form-items-container grid grid-cols-4 gap-x-7 gap-y-7 px-3">
        <div class="item">
          <AdminFormField
            type="text"
            name="email"
            label="Email"
            placeholder="john@email.com"
            :validation="searching ? '' : ''"
          />
        </div>
        <div class="item">
          <AdminFormField
            type="text"
            name="firstName"
            label="FirstName"
            placeholder="John"
            :validation="searching ? '' : ''"
          />
        </div>
        <div class="item">
          <AdminFormField
            type="text"
            name="lastName"
            label="LastName"
            placeholder="Doe "
            :validation="searching ? '' : ''"
          />
        </div>
        <div class="item">
          <AdminFormField
            name="age"
            type="number"
            min="undefined"
            max="undefined"
            label="Age"
            placeholder="18"
            :validation="searching ? '' : ''"
          />
        </div>
        <div class="item">
          <AdminFormField name="owner" type="select" label="Owner" placeholder="true" :options="{}" />
        </div>
        <div class="item">
          <AdminFormField
            name="status"
            type="select"
            label="Status"
            placeholder="pending,open,closed"
            :options="{
              pending: 'Pending',
              open: 'Open',
              closed: 'Closed',
            }"
            :multiple="searching"
            :validation="searching ? '' : ''"
          />
        </div>
        <div class="item">
          <AdminFormField
            name="standing"
            type="select"
            label="Standing"
            placeholder="current,behind"
            :options="{
              current: 'Current',
              behind: 'Behind',
            }"
            :multiple="searching"
            :validation="searching ? '' : ''"
          />
        </div>
      </div>
      <div class="flex flex-row space-x-1 mt-6">
        <FormKit
          type="button"
          label="Clear"
          @click="clear"
          :classes="{
            outer: 'bg-red-500 rounded basis-1/4',
            input: 'flex flex-grow justify-center text-white dark:text-white p-3',
            wrapper: 'flex flex-grow text-center',
          }"
        />
        <FormKit
          type="submit"
          :disabled="disabled"
          :classes="{
            outer: 'bg-green-500 rounded basis-3/4',
            input: 'flex flex-grow justify-center text-white dark:text-white p-3',
            wrapper: 'flex flex-grow text-center',
          }"
        >
          Submit
        </FormKit>
      </div>
    </FormKit>
  </div>
</template>

<style></style>
