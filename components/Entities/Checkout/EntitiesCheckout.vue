<script setup>
import 'animate.css'
import { faker } from '@faker-js/faker/locale/af_ZA'
import { ref, watch } from 'vue'
const step = ref(1)
const stepTitles = ['Validation', 'Mobile', 'Backend', 'Database']
const transitionClass = ref('animate__slideInRight')

// watch(step, (newStep, oldStep) => {
//   transitionClass.value = newStep > oldStep ? 'animate__slideInRight' : 'animate__slideInLeft'
// })

const modalVisible = ref(false)

function showModal() {
  modalVisible.value = true
  const button = document.getElementById('iEntitiesCheckoutModalBtn')
  if (button) {
    button.classList.toggle('invisible')
    iEntitiesCheckoutModal.showModal()
  }
}
</script>

<template>
  <button class="btn invisible hidden" @click="showModal" id="iEntitiesCheckoutModalBtn">open modal</button>
  <dialog id="iEntitiesCheckoutModal" class="modal">
    <div class="modal-box w-11/12 max-w-5xl h-full max-h-96 flex flex-col justify-start items-center bg-base-300">
      <ul class="steps">
        <li class="step" :class="{ 'step-primary': step > 1, 'step-neutral': step > 0 }">Validate entities</li>
        <li class="step" :class="{ 'step-primary': step > 2, 'step-neutral': step > 1 }">Mobile</li>
        <li class="step" :class="{ 'step-primary': step > 3, 'step-neutral': step > 2 }">Backend</li>
        <li class="step" :class="{ 'step-primary': step > 4, 'step-neutral': step > 3 }">Database</li>
      </ul>
      <div :key="step" class="flex flex-1 flex-col grow w-full slide">
        <h1>{{ stepTitles[step - 1] }}</h1>
        <p>{{ faker.lorem.paragraphs({ min: 1, max: 3 }) }}</p>
      </div>

      <div class="flex flex-row space-x-2">
        <button class="btn btn-warning text-white" @click="step > 1 ? (step = step - 1) : null">Back</button>
        <button class="btn btn-wide btn-success text-white" @click="step = step + 1">Next</button>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop" @click="showModal">
      <button>close</button>
    </form>
  </dialog>
</template>

<style scoped>
.hidden {
  display: none;
}
.invisible {
  visibility: hidden;
}
</style>
