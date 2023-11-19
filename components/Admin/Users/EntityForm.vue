<script setup>
const props = defineProps([
  'searching',
  'fetchFilteredUsers',
  'createForm',
  'clear',
])

const { apiUrl } = useAPI()

async function submit(fields) {
  if (props.searching) {
    await props.fetchFilteredUsers(fields)
    return
  }

  let { data, error } = await useFetch(apiUrl + '/users', {
    method: 'post',
    body: JSON.stringify(fields),
  })
  submitted.value = true
}
let submitted = ref(false)
</script>

<template>
  <div class="p-3">
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
        id="User"
        class="form-items-container grid grid-cols-4 gap-x-7 gap-y-7"
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
            label="Last Name"
            placeholder="Potter"
            :validation="searching ? '' : 'required'"
          />
        </div>

        <div class="item">
          <admin-form-field
            type="text"
            name="userName"
            label="Username"
            placeholder="HPotterBolts"
            :validation="searching ? '' : 'required'"
          />
        </div>

        <div class="item">
          <admin-form-field
            name="dob"
            type="select"
            :multiple="searching"
            label="D.O.B."
            :placeholder="searching ? 'Select house/houses' : 'Select house'"
            :validation="searching ? '' : 'required'"
            :options="{
              Gryffindor: 'Gryffindor',
              Slytherin: 'Slytherin',
              Hufflepuff: 'Hufflepuff',
              Ravenclaw: 'Ravenclaw',
              Unknown: 'Unknown',
            }"
            help="Select all that apply by holding command (macOS) or control (PC)."
          />
        </div>

        <div class="item">
          <admin-form-field
            name="createdAt"
            type="select"
            :multiple="searching"
            label="undefined"
            :placeholder="searching ? 'Select house/houses' : 'Select house'"
            :validation="searching ? '' : 'required'"
            :options="{
              Gryffindor: 'Gryffindor',
              Slytherin: 'Slytherin',
              Hufflepuff: 'Hufflepuff',
              Ravenclaw: 'Ravenclaw',
              Unknown: 'Unknown',
            }"
            help="Select all that apply by holding command (macOS) or control (PC)."
          />
        </div>

        <div class="item">
          <admin-form-field
            name="updatedAt"
            type="select"
            :multiple="searching"
            label="undefined"
            :placeholder="searching ? 'Select house/houses' : 'Select house'"
            :validation="searching ? '' : ''"
            :options="{
              Gryffindor: 'Gryffindor',
              Slytherin: 'Slytherin',
              Hufflepuff: 'Hufflepuff',
              Ravenclaw: 'Ravenclaw',
              Unknown: 'Unknown',
            }"
            help="Select all that apply by holding command (macOS) or control (PC)."
          />
        </div>
      </div>
      <div class="flex flex-row px-12 space-x-10 mt-6">
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
