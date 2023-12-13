<script setup>
import _ from 'lodash'
import { faker } from '@faker-js/faker'
const placeholders = faker.number.int({ min: 5, max: 10 })
</script>
<template>
  <div class="relative">
    <div class="overflow-x-auto overflow-auto scrollbar-hide">
      <table class="table min-w-full">
        <thead class="bg-base-100">
          <tr class="border-b border-gray-500">
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i of placeholders" :key="i" class="odd:bg-base-100 even: bg-base-200 hover:text-green-400">
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
        </tbody>
      </table>
    </div>
    <footer class="footer absolute bottom-0 flex w-full justify-center mt-20">
      <div class="flex end-0 grow">
        <div class="flex h-10 px-2 grow">
          <div>Left Content</div>
        </div>
        <div class="flex justify-end h-10 px-2 grow">
          <div>Right Content</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
/* Custom CSS */
.footer {
  bottom: 0;
  width: 100%;
  position: sticky;
}
</style>
