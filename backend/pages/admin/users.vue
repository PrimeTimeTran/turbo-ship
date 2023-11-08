<template>
  <pre class="dark:text-white"><span v-text="data "/></pre>
</template>

<script setup>
definePageMeta({
  layout: 'admin-layout',
})

useHead({
  title: 'Users | Turboship Admin Dashboard',
  meta: [{ name: 'description', content: 'Great admin panels' }],
})

const {
  public: { apiUrl },
} = useRuntimeConfig()

const { data, pending, error, refresh } = await useFetch(apiUrl)

const createUser = async () => {
  const { data, pending, error, refresh } = await useFetch(apiUrl, {
    method: 'POST',
  })
}
</script>
