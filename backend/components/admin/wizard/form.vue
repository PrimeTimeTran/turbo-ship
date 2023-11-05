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
  <div class="w-100 m-6">
    <div v-if="!submitted">
      <FormKit
        type="form"
        submit-label="Create"
        @submit="submit"
        #default="{ value }"
      >
        <FormKit
          name="firstName"
          label="First Name"
          validation="required"
        />
        <FormKit
          type="text"
          name="lastName"
          label="Last Name"
          validation="required"
        />
        <pre wrap>{{ value }}</pre>
      </FormKit>
    </div>
  </div>
</template>
