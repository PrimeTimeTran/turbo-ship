<script setup>
async function submit(fields) {
  const { data, error } = await useFetch('http://localhost:3000/api/wizards', {
    method: 'post',
    body: JSON.stringify(fields),
  })
  submitted.value = true
}
let submitted = ref(false)
</script>

<template>
  <div class="w-100 dark:bg-neutral-950 pb-6">
    <div class="dark:bg-neutral-950">
      <FormKit
        type="form"
        @submit="submit"
        :actions="false"
        #default="{ value }"
        :classes="{
          help: 'dark:text-white',
          message: 'text-red-500 dark:text-red-300 absolute',
        }"
      >
        <div class="flex pb-8">
          <FormKit
            name="firstName"
            label="First Name"
            :classes="{
              outer: 'flex flex-grow flex-col mr-6 rounded',
              input: 'min-w-full p-1  rounded border dark:bg-neutral-950 dark:text-white border-2 dark:border-gray-700',
              label: 'dark:text-white',
              message: 'text-red-500 dark:text-red-300 absolute',
            }"
          />
          <FormKit
            type="text"
            name="lastName"
            label="Last Name"
            :classes="{
              outer: 'flex flex-grow flex-col rounded',
              input: 'min-w-full p-1  rounded border dark:bg-neutral-950 dark:text-white border-2 dark:border-gray-700',
              label: 'dark:text-white',
              message: 'text-red-500 dark:text-red-300 absolute',
            }"
          />
        </div>
        <FormKit
          type="submit"
          :disabled="disabled"
          :classes="{
            outer: 'bg-green-500 rounded',
            input: 'flex flex-grow justify-center dark:text-white p-3',
            wrapper: 'flex flex-grow text-center',
          }"
        >
          Submit
        </FormKit>
      </FormKit>
    </div>
  </div>
</template>
