<script setup>
definePageMeta({
  layout: 't-landing-layout',
})
</script>
<template>
  <div class="h-screen w-screen flex justify-center items-center">
    <div class="rounded-lg overflow-hidden shadow-lg bg-white min-h-64 lg:w-1/4 sm:w-1/2 md:w-1/3">
      <p class="px-2 text-gray-600 mb-2 text-2xl font-thin px-4 pt-3">Contacts</p>
      <div class="px-2">
        <svg
          class="absolute z-50 m-1 text-blue-400"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.71 14H15.5L20.49 19L19 20.49L14 15.5V14.71L13.73 14.43C12.59 15.41 11.11 16 9.5 16C5.90997 16 3 13.09 3 9.5C3 5.90997 5.90997 3 9.5 3C13.09 3 16 5.90997 16 9.5C16 11.11 15.41 12.59 14.43 13.73L14.71 14ZM5 9.5C5 11.99 7.01001 14 9.5 14C11.99 14 14 11.99 14 9.5C14 7.01001 11.99 5 9.5 5C7.01001 5 5 7.01001 5 9.5Z"
            fill="black"
            fill-opacity="0.54"
          />
        </svg>
        <input type="text" class="pl-8 p-1 bg-gray-200 w-full rounded relative" placeholder="Search teams or members" />
      </div>
      <div class="py-5 px-3">
        <div class="flex justify-between px-2 py-2">
          <p class="flex text-gray-700">
            <svg class="w-2 text-gray-500 mx-2" viewBox="0 0 8 8" fill="currentColor">
              <circle cx="4" cy="4" r="3" />
            </svg>
            Tighten Co.
          </p>
          <p class="text-gray-500 font-thin">Team</p>
        </div>
        <div class="flex justify-between px-2 py-2 bg-blue-100 rounded">
          <p class="flex text-gray-700">
            <svg class="h2 w-2 text-teal-500 mx-2" viewBox="0 0 8 8" fill="currentColor">
              <circle cx="4" cy="4" r="3" />
            </svg>
            Taylor Otwell
          </p>
          <p class="text-gray-500 font-thin">Member</p>
        </div>
        <div class="flex justify-between px-2 py-2">
          <p class="flex text-gray-700">
            <svg class="h2 w-2 text-gray-500 mx-2" viewBox="0 0 8 8" fill="currentColor">
              <circle cx="4" cy="4" r="3" />
            </svg>
            Adam Wathan
          </p>
          <p class="text-gray-500 font-thin">Member</p>
        </div>
        <div class="flex justify-between px-2 py-2">
          <p class="flex text-gray-700">
            <svg class="h2 w-2 text-gray-500 mx-2" viewBox="0 0 8 8" fill="currentColor">
              <circle cx="4" cy="4" r="3" />
            </svg>
            Ahmed Ashraf
          </p>
          <p class="text-gray-500 font-thin">Member</p>
        </div>
        <div class="flex justify-between px-2 py-2">
          <p class="flex text-gray-700">
            <svg class="h2 w-2 text-teal-500 mx-2" viewBox="0 0 8 8" fill="currentColor">
              <circle cx="4" cy="4" r="3" />
            </svg>
            Laracasts
          </p>
          <p class="text-gray-500 font-thin">Team</p>
        </div>
      </div>
      <div class="bg-gray-300 flex flex-row-reverse px-2 py-3">
        <button class="bg-blue-500 py-2 px-4 rounded text-white">Invite</button>
        <button class="py-2 px-4 rounded text-gray-600">Cancel</button>
      </div>
    </div>
  </div>
</template>
