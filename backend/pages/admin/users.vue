<template>
  <pre class="dark:text-white"><span v-text="data "/>
  </pre>
</template>

<script setup>
definePageMeta({
  layout: 'admin-layout',
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
