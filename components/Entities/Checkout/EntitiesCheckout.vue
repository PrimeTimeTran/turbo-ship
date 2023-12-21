<script setup>
import { faker } from '@faker-js/faker/locale/af_ZA'

const { invalids } = useEntities()
const step = ref(0)
const stepTitles = ['Validation', 'Mobile', 'Backend', 'Database']

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
    <div class="modal-box w-11/12 max-w-5xl h-4/6 flex flex-row justify-start items-center bg-base-100 space-x-6">
      <div class="flex w-96 rounded-lg h-full">
        <ul class="steps steps-vertical">
          <li class="step" :class="{ 'step-primary': step > 0, 'step-neutral': step === 0 }">Validate entities</li>
          <li class="step" :class="{ 'step-primary': step > 1, 'step-neutral': step === 1 }">Mobile</li>
          <li class="step" :class="{ 'step-primary': step > 2, 'step-neutral': step === 2 }">Backend</li>
          <li class="step" :class="{ 'step-primary': step > 3, 'step-neutral': step === 3 }">Database</li>
        </ul>
      </div>
      <div class="flex rounded-lg h-full w-full max-w-xl flex-col justify-between items-center p-4 border">
        <div :key="step" class="flex flex-1 flex-col w-full justify-start h-full items-center">
          <div class="flex flex-col justify-around h-full">
            <div class="justify-center items-center">
              <h1>{{ stepTitles[step] }}</h1>
              <p v-if="step === 0">These entities are invalid.</p>
              <p v-if="step === 1">Available mobile frameworks</p>
              <p v-if="step === 2">Available backend frameworks.</p>
              <p v-if="step === 3">Ended.</p>
              {{ invalids() }}
            </div>
            <div v-if="step === 0">
              <div class="w-96 bg-base-100 p-6 border rounded-lg m-2">
                <div class="form-control">
                  <label class="label cursor-pointer">
                    <span class="label-text">Red pill</span>
                    <input type="radio" name="radio-10" class="radio radio-primary" checked />
                  </label>
                </div>
                <div class="form-control">
                  <label class="label cursor-pointer">
                    <span class="label-text">Blue pill</span>
                    <input type="radio" name="radio-10" class="radio radio-primary" checked />
                  </label>
                </div>
              </div>
            </div>
            <div v-if="step === 1">
              <div class="w-96 bg-base-100 p-6 border rounded-lg m-2">
                <div class="form-control">
                  <label class="label cursor-pointer">
                    <span class="label-text">Flutter</span>
                    <input type="radio" name="radio-10" class="radio radio-primary" checked />
                  </label>
                </div>
                <div class="form-control">
                  <label class="label cursor-pointer">
                    <span class="label-text text-gray-400">React Native(Coming soon)</span>
                    <input type="radio" name="radio-10" class="radio" disabled />
                  </label>
                </div>
              </div>
            </div>
            <div v-if="step === 2">
              <div class="w-96 bg-base-100 p-6 border rounded-lg m-2">
                <div class="form-control">
                  <label class="label cursor-pointer">
                    <span class="label-text">Nuxt</span>
                    <input type="radio" name="radio-10" class="radio radio-primary" checked />
                  </label>
                </div>
                <div class="form-control">
                  <label class="label cursor-pointer">
                    <span class="label-text text-gray-400">Next(Coming soon)</span>
                    <input type="radio" name="radio-10" class="radio" disabled />
                  </label>
                </div>
                <div class="form-control">
                  <label class="label cursor-pointer">
                    <span class="label-text text-gray-400">.NET(Coming soon)</span>
                    <input type="radio" name="radio-10" class="radio" disabled />
                  </label>
                </div>
              </div>
            </div>

            <div v-if="step === 3">
              <div class="w-96 bg-base-100 p-6 border rounded-lg m-2">
                <div class="form-control">
                  <label class="label cursor-pointer">
                    <span class="label-text">Flutter</span>
                    <input type="radio" name="radio-10" class="radio radio-primary" checked />
                  </label>
                </div>
                <div class="form-control">
                  <label class="label cursor-pointer">
                    <span class="label-text text-gray-400">React Native(Coming soon)</span>
                    <input type="radio" name="radio-10" class="radio" disabled />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row space-x-2">
          <button class="btn btn-outline" @click="step > 1 ? (step = step - 1) : null">Back</button>
          <button class="btn btn-wide btn-success text-white" @click="step = step + 1">Next</button>
        </div>
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
