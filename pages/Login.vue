<template>
  <div class="flex justify-start items-start h-full bg-black-900 max-h-full">
    <!-- Left: Image -->
    <div class="w-1/2 h-screen hidden lg:block">
      <img
        alt="Placeholder Image"
        src="https://blog.calameo.com/wp-content/uploads/2022/01/beasty-hktkNOBN8y8-unsplash-scaled.jpg"
        class="object-fit w-full h-full"
      />
    </div>
    <!-- Right: Login Form -->
    <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
      <h1 class="dark:text-white text-2xl font-semibold mb-4">Login</h1>
      <form
        action="#"
        method="POST"
      >
        <!-- Username Input -->
        <div class="mb-4">
          <label
            for="username"
            class="block text-gray-600 dark:text-white mb-3"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autocomplete="off"
          />
        </div>
        <!-- Password Input -->
        <div class="mb-4">
          <label
            for="password"
            class="block text-gray-600 dark:text-white mb-3"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            autocomplete="off"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <!-- Remember Me Checkbox -->
        <div class="mb-4 flex items-center">
          <input
            id="remember"
            type="checkbox"
            name="remember"
            class="text-blue-500"
          />
          <label
            for="remember"
            class="text-gray-600 dark:text-white ml-2"
          >
            Remember Me
          </label>
        </div>
        <!-- Forgot Password Link -->
        <div class="mb-6 text-blue-500">
          <a
            href="#"
            class="hover:underline"
            >Forgot Password?</a
          >
        </div>
        <!-- Login Button -->
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
        >
          Login
        </button>
      </form>
      <!-- Sign up  Link -->
      <div class="mt-6 text-blue-500 text-center">
        <a
          href="#"
          class="hover:underline"
          >Sign up Here</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'CustomLayout',
})
</script>
