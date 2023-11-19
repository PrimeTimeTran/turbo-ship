<script setup>
const props = defineProps([
  'searching',
  'fetchFilteredWizards',
  'createForm',
  'clear',
])
const { apiUrl } = useAPI()

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
</script>

<template>
  <div class="relative">
    <FormKit
      type="form"
      @submit="submit"
      :actions="false"
      #default="{ value }"
      :classes="{
        help: 'dark:text-white',
        message: 'text-red-500 dark:text-red-300 absolute',
      }"
    >
      <div class="flex pb-8 space-x-1">
        <admin-form-field
          type="text"
          name="firstName"
          label="First Name"
          placeholder="Harry"
          :validation="searching ? '' : 'required'"
        />

        <admin-form-field
          type="text"
          name="lastName"
          label="Last Name"
          placeholder="Potter"
          :validation="searching ? '' : 'required'"
        />

        <admin-form-field
          type="text"
          name="email"
          label="Email"
          placeholder="hp87@hogwarts.com"
          :validation="searching ? '' : 'required'"
        />

        <admin-form-field
          name="gender"
          type="select"
          label="Gender"
          placeholder="Select a gender"
          :options="{
            m: 'Male',
            f: 'Female',
          }"
        />
      </div>
      <div class="flex pb-8 space-x-1">
        <admin-form-field
          type="text"
          name="city"
          label="City"
          placeholder="London"
        />
        <admin-form-field
          type="text"
          name="country"
          label="Country"
          placeholder="United Kingdom"
        />
        <admin-form-field
          type="text"
          name="jobTitle"
          label="Title"
          placeholder="Auror"
        />
        <admin-form-field
          type="text"
          name="industry"
          label="Industry"
          placeholder="Justice"
        />
      </div>
      <div class="flex pb-8 space-x-1">
        <admin-form-field
          type="text"
          name="patronus"
          placeholder="Stag"
          label="Patronus"
        />
        <admin-form-field
          type="number"
          name="potions"
          label="Potions"
          placeholder="8"
          min="1"
          max="10"
        />
        <admin-form-field
          type="number"
          name="charms"
          label="Charms"
          placeholder="10"
          min="1"
          max="10"
        />
        <admin-form-field
          type="number"
          name="dada"
          placeholder="10"
          min="1"
          max="10"
          label="dada"
        />
        <admin-form-field
          type="select"
          name="apparition"
          label="Apparition"
          placeholder="Can they Apparition?"
          :multiple="false"
          :options="{
            true: 'Yes',
            false: 'No',
          }"
        />
      </div>
      <div class="pb-8 space-x-1 flex flex-row">
        <admin-form-field
          name="house"
          type="select"
          :multiple="searching"
          :label="searching ? 'Select house/houses' : 'House'"
          :placeholder="searching ? 'Select house/houses' : 'Select house'"
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
          name="topSpells"
          type="select"
          :multiple="true"
          :label="searching ? 'Select top spell/spells' : 'Top Spells'"
          :placeholder="searching ? 'Select spell/spells' : 'Select Spells'"
          :options="{
            Hexes: 'Hexes',
            Charms: 'Charms',
            Curses: 'Curses',
            Spells: 'Spells',
            Jinxes: 'Jinxes',
            Healing: 'Healing',
            Counters: 'Counters',
            Transfigurations: 'Transfigurations',
          }"
          help="Select all that apply by holding command (macOS) or control (PC)."
        />
      </div>
      <div class="flex flex-row px-12 space-x-10">
        <FormKit
          type="button"
          label="Clear"
          @click="clear"
          :classes="{
            outer: 'bg-red-500 rounded basis-1/4',
            input:
              'flex flex-grow justify-center text-white dark:text-white p-3',
            wrapper: 'flex flex-grow text-center',
          }"
        />
        <FormKit
          type="submit"
          :disabled="disabled"
          :classes="{
            outer: 'bg-green-500 rounded basis-3/4',
            input:
              'flex flex-grow justify-center text-white dark:text-white p-3',
            wrapper: 'flex flex-grow text-center',
          }"
        >
          Submit
        </FormKit>
      </div>
    </FormKit>
  </div>
</template>
