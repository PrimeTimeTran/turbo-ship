<script setup>
const props = defineProps(['isSignIn'])
const values = reactive({ email: '', password: '' })
async function onSubmit(e) {
  e.preventDefault()
  console.log({
    email: values.email,
    password: values.password,
  })
}
</script>
<template>
  <form @submit="onSubmit">
    <div>
      <label for="email" class="block text-gray-600 dark:text-white mb-3">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="john@email.com"
        autocomplete="off"
        :onchange="(e) => (values.email = e.target.value)"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
      />
    </div>
    <div class="mb-4">
      <label for="password" class="block text-gray-600 dark:text-white mb-3">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        autocomplete="off"
        placeholder="********"
        :onchange="(e) => (values.password = e.target.value)"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
      />
    </div>
    <div class="mb-4 flex items-center">
      <input id="remember" type="checkbox" name="remember" class="text-blue-500" />
      <label for="remember" class="text-gray-600 dark:text-white ml-2">Remember Me</label>
    </div>
    <div class="mb-6 text-blue-500">
      <a href="#" class="hover:underline">Forgot Password?</a>
    </div>
    <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">
      {{ isSignIn ? 'Login' : 'Create Account' }}
    </button>
  </form>
</template>
<style></style>
