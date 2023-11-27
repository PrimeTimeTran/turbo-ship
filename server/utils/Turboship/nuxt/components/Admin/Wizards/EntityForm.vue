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
      <div
        id="Wizard"
        class="form-items-container grid grid-cols-4 gap-x-7 gap-y-7 px-3"
      >
        <div class="item">
          <admin-form-field
            type="text"
            name="email"
            label="Email"
            placeholder="hp87@hogwarts.com"
            :validation="searching ? '' : 'required'"
          />
        </div>

        <div class="item">
          <admin-form-field
            type="text"
            name="firstName"
            label="First Name"
            placeholder="Harry"
            :validation="searching ? '' : 'required'"
          />
        </div>

        <div class="item">
          <admin-form-field
            type="text"
            name="lastName"
            label="Last Name"
            placeholder="Potter"
            :validation="searching ? '' : 'required'"
          />
        </div>

        <div class="item">
          <admin-form-field
            type="text"
            name="city"
            label="City"
            placeholder="London"
            :validation="searching ? '' : 'required'"
          />
        </div>

        <div class="item">
          <admin-form-field
            type="text"
            name="country"
            label="Country"
            placeholder="United Kingdom"
            :validation="searching ? '' : 'required'"
          />
        </div>

        <div class="item">
          <admin-form-field
            type="text"
            name="jobTitle"
            label="Role"
            placeholder="Auror"
            :validation="searching ? '' : 'required'"
          />
        </div>

        <div class="item">
          <admin-form-field
            type="text"
            name="industry"
            label="Industry"
            placeholder="Defense"
            :validation="searching ? '' : 'required'"
          />
        </div>

        <div class="item">
          <admin-form-field
            type="text"
            name="patronus"
            label="Patronus"
            placeholder="Stag"
            :validation="searching ? '' : 'required'"
          />
        </div>

        <div class="item">
          <admin-form-field
            type="number"
            name="potions"
            label="Potions"
            :validation="searching ? '' : 'required'"
            placeholder="10"
            min="1"
            max="10"
          />
        </div>

        <div class="item">
          <admin-form-field
            type="number"
            name="charms"
            label="Charms"
            :validation="searching ? '' : 'required'"
            placeholder="10"
            min="1"
            max="10"
          />
        </div>

        <div class="item">
          <admin-form-field
            type="number"
            name="dada"
            label="D.A.D.A"
            :validation="searching ? '' : 'required'"
            placeholder="10"
            min="1"
            max="10"
          />
        </div>

        <div class="item">
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

        <div class="item">
          <admin-form-field
            name="apparition"
            type="boolean"
            label="Apparate?"
            placeholder="Select apparition"
            :options="{
              true: 'Yes',
              false: 'No',
            }"
          />
        </div>

        <div class="item">
          <admin-form-field
            type="number"
            name="fanScore"
            label="Fan Score"
            :validation="searching ? '' : ''"
            placeholder="10"
            min="1"
            max="10"
          />
        </div>

        <div class="item">
          <admin-form-field
            type="text"
            name="avatarUrl"
            label="Avatar"
            placeholder="https://mypic.com"
            :validation="searching ? '' : 'required'"
          />
        </div>

        <div class="item">
          <admin-form-field
            name="house"
            type="select"
            :multiple="searching"
            label="House"
            :validation="searching ? '' : 'required'"
            placeholder="Select House"
            :options="{
              gryffindor: 'Gryffindor',
              slytherin: 'Slytherin',
              hufflepuff: 'Hufflepuff',
              ravenclaw: 'Ravenclaw',
              unknown: 'Unknown',
            }"
          />
        </div>

        <div class="item">
          <admin-form-field
            name="topSpells"
            type="select"
            :multiple="true"
            label="Top Spells"
            :validation="searching ? '' : 'required'"
            placeholder="Select One"
            :options="{
              hexes: 'Hexes',
              charms: 'Charms',
              curses: 'Curses',
              spells: 'Spells',
              jinxes: 'Jinxes',
              healing: 'Healing',
              counters: 'Counters',
              transfigurations: 'Transfigurations',
            }"
          />
        </div>

        <div class="item">
          <admin-form-field
            name="bookAppearances"
            type="select"
            :multiple="true"
            label="Book Appearances"
            :validation="searching ? '' : 'required'"
            placeholder="Select Multiple"
            :options="{
              1: '1',
              2: '2',
              3: '3',
              4: '4',
              5: '5',
              6: '6',
              7: '7',
              8: '8',
            }"
          />
        </div>
      </div>
      <div class="flex flex-row space-x-1 mt-6">
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
