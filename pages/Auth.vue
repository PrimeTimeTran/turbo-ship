<script setup>
definePageMeta({
  layout: 'CustomLayout',
})

const values = reactive({ login: true })
</script>

<template>
  <TheNavbar />
  <div class="flex justify-start items-center h-full max-h-full bg-base-content">
    <div class="w-3/4 h-screen hidden lg:block">
      <img
        alt="combining-ideas"
        class="object-fit w-full h-full"
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
    <div class="h-full w-full lg:w-1/4 p-4">
      <h1 class="text-primary-content text-5xl font-semibold mb-4">Turboship</h1>

      <h1 class="text-primary-content text-2xl font-semibold mb-4">
        {{ values.login ? 'Login' : 'New Account' }}
      </h1>
      <hr class="mb-6" />
      <AuthForm :isSignIn="values.login" />
      <div class="mt-6 text-blue-500 text-center">
        <a href="#" @click="(e) => (values.login = !values.login)" class="hover:underline">{{
          values.login ? 'Create Account' : 'Already have an account? Login'
        }}</a>
      </div>
    </div>
  </div>
</template>
