<script setup>
definePageMeta({
  layout: 't-main-layout',
  layoutTransition: true,
})
const route = useRoute()
const token = route.query.token
const { data } = await useFetch(`/api/auth/confirm-email?token=${token}`)

// Redirect to sign in page
</script>
<template>
  <section class="bg-base-100">
    <h1>Thank you for confirming!</h1>
    {{ token }}
  </section>
</template>
<style></style>
