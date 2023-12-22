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

// Validate entities
// Choose mobile
//  - Flutter, RN
//  - Material,
//  - Color
// Choose backend
//  - Nuxt, Next
//  - Vuetify, Tailwind
//  - Mongo, PQSL
// Env configs
//  - Firebase, Stripe, Sendgrid
//
</script>

<template>
  <button class="btn invisible hidden" @click="showModal" id="iEntitiesCheckoutModalBtn">open modal</button>
  <dialog id="iEntitiesCheckoutModal" class="modal">
    <div class="modal-box w-11/12 max-w-5xl h-4/6 flex flex-row justify-between items-center bg-base-100 space-x-6">
      <div class="flex flex-1 rounded-lg h-full w-full max-w-xl flex-col justify-between items-center p-4 border">
        <div :key="step" class="flex flex-1 flex-col">
          <div class="flex flex-col justify-around h-full w-full">
            <div class="flex flex-2 flex-col justify-center items-start">
              <h1>{{ stepTitles[step] }}</h1>
              <p v-if="step === 0">These entities are invalid.</p>
              <p v-if="step === 1">Available mobile frameworks</p>
              <p v-if="step === 2">Available backend frameworks.</p>
              <p v-if="step === 3">Firebase, SendGrid, Stripe</p>
              <p v-if="step > 3">Congratulations</p>
            </div>
            <div v-if="step === 0" class="flex flex-1 flex-col justify-around">
              <!-- <div>
                {{ invalids() }}
              </div> -->
              <div class="w-96 bg-base-100 px-6 py-3 border rounded-lg">
                <div class="form-control">
                  <label class="label cursor-pointer">
                    <span class="label-text">Red pill</span>
                    <input type="radio" name="radio-10" class="radio radio-accent" checked />
                  </label>
                </div>
                <div class="divider"></div>
                <div class="form-control">
                  <label class="label cursor-pointer">
                    <span class="label-text">Blue pill</span>
                    <input type="radio" name="radio-10" class="radio radio-accent" checked />
                  </label>
                </div>
              </div>
            </div>
            <div v-if="step === 1" class="flex flex-1 flex-col justify-around">
              <div class="w-96 bg-base-100 px-6 py-3 border rounded-lg">
                <div class="form-control">
                  <label class="label cursor-pointer">
                    <span class="label-text">Flutter</span>
                    <input type="radio" name="radio-10" class="radio radio-accent" checked />
                  </label>
                </div>
                <div class="divider"></div>
                <div class="form-control">
                  <label class="label cursor-pointer">
                    <span class="label-text text-gray-400">React Native(Coming soon)</span>
                    <input type="radio" name="radio-10" class="radio" disabled />
                  </label>
                </div>
              </div>
            </div>
            <div v-if="step === 2" class="flex flex-1 flex-col justify-around">
              <div class="w-96 bg-base-100 px-6 py-3 border rounded-lg">
                <div class="form-control">
                  <label class="label cursor-pointer">
                    <span class="label-text">Nuxt</span>
                    <input type="radio" name="radio-10" class="radio radio-accent" checked />
                  </label>
                </div>
                <div class="divider"></div>
                <div class="form-control">
                  <label class="label cursor-pointer">
                    <span class="label-text text-gray-400">Next(Coming soon)</span>
                    <input type="radio" name="radio-10" class="radio" disabled />
                  </label>
                </div>
                <div class="divider"></div>
                <div class="form-control">
                  <label class="label cursor-pointer">
                    <span class="label-text text-gray-400">.NET(Coming soon)</span>
                    <input type="radio" name="radio-10" class="radio" disabled />
                  </label>
                </div>
              </div>
            </div>
            <div v-if="step === 3" class="flex flex-1 flex-col justify-around">
              <div class="w-96 bg-base-100 p-6 border rounded-lg m-2">
                <div class="form-control">
                  <label class="label cursor-pointer">
                    <span class="label-text">Mongo(Mongoose)</span>
                    <input type="radio" name="radio-10" class="radio radio-accent" checked />
                  </label>
                </div>
                <div class="divider"></div>
                <div class="form-control">
                  <label class="label cursor-pointer">
                    <span class="label-text text-gray-400">PostgreSQL (Coming soon)</span>
                    <input type="radio" name="radio-10" class="radio" disabled />
                  </label>
                </div>
              </div>
            </div>
            <div v-if="step === 4" class="flex flex-1 flex-col justify-around">
              <div class="w-96 bg-base-100 p-6 border rounded-lg m-2">
                <div class="form-control">
                  <label class="label cursor-pointer">
                    <span class="label-text">Mongo(Mongoose)</span>
                    <input type="radio" name="radio-10" class="radio radio-accent" checked />
                  </label>
                </div>
                <div class="divider"></div>
                <div class="form-control">
                  <label class="label cursor-pointer">
                    <span class="label-text text-gray-400">PostgreSQL (Coming soon)</span>
                    <input type="radio" name="radio-10" class="radio" disabled />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row space-x-2">
          <button class="btn btn-outline" @click="step > 0 ? (step = step - 1) : null">Back</button>
          <button class="btn btn-wide btn-accent text-white" @click="step = step + 1">Next</button>
        </div>
      </div>
      <div class="flex rounded-lg h-full justify-end">
        <ul class="steps steps-vertical">
          <li class="step" :class="{ 'step-accent': step > 0, 'step-neutral': step === 0 }">Validate entities</li>
          <li class="step" :class="{ 'step-accent': step > 1, 'step-neutral': step === 1 }">Mobile</li>
          <li class="step" :class="{ 'step-accent': step > 2, 'step-neutral': step === 2 }">Backend</li>
          <li class="step" :class="{ 'step-accent': step > 3, 'step-neutral': step === 3 }">Database</li>
        </ul>
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
