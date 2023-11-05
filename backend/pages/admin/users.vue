<template>
  <pre class="dark:text-white"
    >{{ data }}
  </pre>
</template>

<script setup>
definePageMeta({
  layout: 'admin-layout',
})

const { data, pending, error, refresh } = await useFetch(
  `http://localhost:3000/api/users`
)

const createUser = async () => {
  const { data, pending, error, refresh } = await useFetch(
    `http://localhost:3000/api/users`,
    {
      method: 'POST',
    }
  )
}
</script>
