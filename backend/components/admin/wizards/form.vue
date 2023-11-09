<script setup>
const props = defineProps(['searching', 'fetchFilteredWizards', 'createForm'])

const { apiUrl } = useAPI()

// [ ] Submit support create, search, update
// Supports create, search
async function submit(fields) {
  if (props.searching) {
    await props.fetchFilteredWizards(fields)
    return
  }

  let { data, error } = await useFetch(apiUrl + '/wizards', {
    method: 'post',
    body: JSON.stringify(fields),
  })
  submitted.value = true
}
let submitted = ref(false)

const inputClasses =
  'min-w-full p-1 rounded border dark:bg-neutral-950 dark:text-white border-2 dark:border-gray-700'
const messageClasses = 'text-red-500 dark:text-red-300 absolute'
const outerClasses = 'flex flex-grow flex-col rounded'
const allClasses = {
  outer: outerClasses,
  input: inputClasses,
  label: 'dark:text-white',
  message: messageClasses,
}
</script>

<template>
  <div
    class="w-100 dark:bg-neutral-950 p-3"
    :class="{ hidden: !searching && !createForm }"
  >
    <div class="dark:bg-neutral-950">
      <FormKit
        type="form"
        @submit="submit"
        :actions="false"
        #default="{ value }"
        :classes="{
          help: 'dark:text-white',
          message: messageClasses,
        }"
      >
        <div class="flex pb-8 space-x-1">
          <FormKit
            name="firstName"
            placeholder="Harry"
            label="First Name"
            :classes="allClasses"
          />
          <FormKit
            type="text"
            name="lastName"
            placeholder="Potter"
            label="Last Name"
            :classes="allClasses"
          />
          <FormKit
            label="Email"
            name="email"
            placeholder="hp87@hogwarts.com"
            :classes="{
              outer: 'flex flex-grow flex-col mr-6 rounded',
              input: inputClasses,
              label: 'dark:text-white',
              message: messageClasses,
            }"
          />
          <FormKit
            name="gender"
            label="Gender"
            type="select"
            placeholder="Select a gender"
            :options="{
              m: 'Male',
              f: 'Female',
            }"
            :classes="{
              outer: 'flex flex-grow flex-col mr-6 rounded',
              input: inputClasses,
              label: 'dark:text-white',
              message: messageClasses,
            }"
          />
        </div>
        <div class="flex pb-8 space-x-1">
          <FormKit
            name="city"
            label="City"
            placeholder="London"
            :classes="allClasses"
          />
          <FormKit
            name="country"
            label="Country"
            placeholder="United Kingdom"
            :classes="allClasses"
          />
          <FormKit
            name="jobTitle"
            label="Title"
            placeholder="Auror"
            :classes="allClasses"
          />
          <FormKit
            name="industry"
            label="Industry"
            placeholder="Justice"
            :classes="allClasses"
          />
        </div>
        <div class="flex pb-8 space-x-1">
          <FormKit
            multiple
            v-if="searching"
            type="select"
            label="Select house/houses"
            name="house"
            :classes="allClasses"
            :options="{
              Gryffindor: 'Gryffindor',
              Slytherin: 'Slytherin',
              Hufflepuff: 'Hufflepuff',
              Ravenclaw: 'Ravenclaw',
              Unknown: 'Unknown',
            }"
            help="Select all that apply by holding command (macOS) or control (PC)."
          />
          <FormKit
            v-else
            name="house"
            label="House"
            type="select"
            placeholder="Select a house"
            :classes="allClasses"
            :options="{
              Gryffindor: 'Gryffindor',
              Slytherin: 'Slytherin',
              Hufflepuff: 'Hufflepuff',
              Ravenclaw: 'Ravenclaw',
              Unknown: 'Unknown',
            }"
            help="Select all that apply by holding command (macOS) or control (PC)."
          />
          <admin-form-field
            type="text"
            name="patronus"
            placeholder="Stag"
            label="Patronus"
          />
          <FormKit
            type="number"
            name="potions"
            label="Potions"
            placeholder="8"
            min="1"
            max="10"
            :classes="allClasses"
          />
          <FormKit
            name="charms"
            type="number"
            label="Charms"
            placeholder="10"
            min="1"
            max="10"
            :classes="allClasses"
          />
          <FormKit
            name="DADA"
            type="number"
            placeholder="10"
            min="1"
            max="10"
            label="DADA"
            :classes="allClasses"
          />
          <admin-form-field
            type="select"
            name="apparition"
            label="Apparition"
            :options="{
              true: 'Yes',
              false: 'No',
            }"
          />
        </div>
        <div class="pb-8 space-x-1">
          <!-- <FormKit
            type="radio"
            name="topSpells"
            label="Top Spells"
            :options="{
              charms: 'Charms',
              curses: 'Curses',
              transfigurations: 'Transfigurations',
              healing: 'Healing',
              spells: 'Spells',
              jinxes: 'Jinxes',
              hexes: 'Hexes',
              counters: 'Counters',
            }"
            :classes="{
              outer: 'rounded',
              fieldset: 'max-w-100  flex-row',
              input:
                'bg-red-100 p-1 rounded border dark:bg-neutral-950 dark:text-white border-2 dark:border-gray-700',
              label: 'dark:text-white',
              message: messageClasses
            }"
          /> -->
        </div>
        <FormKit
          type="submit"
          :disabled="disabled"
          :classes="{
            outer: 'bg-green-500 rounded',
            input: 'flex flex-grow justify-center dark:text-white p-3',
            wrapper: 'flex flex-grow text-center',
          }"
        >
          Submit
        </FormKit>
      </FormKit>
    </div>
  </div>
</template>
