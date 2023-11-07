<script setup>
async function submit(fields) {
  const {
    public: { apiUrl },
  } = useRuntimeConfig()
  console.log({ fields })
  // const { data, error } = await useFetch(apiUrl + '/wizards', {
  //   method: 'post',
  //   body: JSON.stringify(fields),
  // })
  // submitted.value = true
}
let submitted = ref(false)
</script>

<template>
  <div class="w-100 dark:bg-neutral-950 pb-6">
    <div class="dark:bg-neutral-950">
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
          <FormKit
            name="firstName"
            placeholder="Harry"
            label="First Name"
            :classes="{
              outer: 'flex flex-grow flex-col rounded',
              input:
                'min-w-full p-1 rounded border dark:bg-neutral-950 dark:text-white border-2 dark:border-gray-700',
              label: 'dark:text-white',
              message: 'text-red-500 dark:text-red-300 absolute',
            }"
          />
          <FormKit
            type="text"
            name="lastName"
            placeholder="Potter"
            label="Last Name"
            :classes="{
              outer: 'flex flex-grow flex-col rounded',
              input:
                'min-w-full p-1 rounded border dark:bg-neutral-950 dark:text-white border-2 dark:border-gray-700',
              label: 'dark:text-white',
              message: 'text-red-500 dark:text-red-300 absolute',
            }"
          />
          <FormKit
            name="email"
            placeholder="hp87@hogwarts.com"
            label="Email"
            :classes="{
              outer: 'flex flex-grow flex-col mr-6 rounded',
              input:
                'min-w-full p-1 rounded border dark:bg-neutral-950 dark:text-white border-2 dark:border-gray-700',
              label: 'dark:text-white',
              message: 'text-red-500 dark:text-red-300 absolute',
            }"
          />
          <FormKit
            name="gender"
            label="Gender"
            type="select"
            placeholder="Male"
            :options="{
              male: 'Male',
              female: 'Female',
            }"
            :classes="{
              outer: 'flex flex-grow flex-col mr-6 rounded',
              input:
                'min-w-full p-1 rounded border dark:bg-neutral-950 dark:text-white border-2 dark:border-gray-700',
              label: 'dark:text-white',
              message: 'text-red-500 dark:text-red-300 absolute',
            }"
          />
        </div>
        <div class="flex pb-8 space-x-1">
          <FormKit
            name="city"
            label="City"
            placeholder="London"
            :classes="{
              outer: 'flex flex-grow flex-col rounded',
              input:
                'min-w-full p-1 rounded border dark:bg-neutral-950 dark:text-white border-2 dark:border-gray-700',
              label: 'dark:text-white',
              message: 'text-red-500 dark:text-red-300 absolute',
            }"
          />
          <FormKit
            name="country"
            label="Country"
            placeholder="United Kingdom"
            :classes="{
              outer: 'flex flex-grow flex-col rounded',
              input:
                'min-w-full p-1 rounded border dark:bg-neutral-950 dark:text-white border-2 dark:border-gray-700',
              label: 'dark:text-white',
              message: 'text-red-500 dark:text-red-300 absolute',
            }"
          />
          <FormKit
            name="jobTitle"
            label="Title"
            placeholder="Auror"
            :classes="{
              outer: 'flex flex-grow flex-col rounded',
              input:
                'min-w-full p-1 rounded border dark:bg-neutral-950 dark:text-white border-2 dark:border-gray-700',
              label: 'dark:text-white',
              message: 'text-red-500 dark:text-red-300 absolute',
            }"
          />
          <FormKit
            name="industry"
            label="Industry"
            placeholder="Justice"
            :classes="{
              outer: 'flex flex-grow flex-col rounded',
              input:
                'min-w-full p-1 rounded border dark:bg-neutral-950 dark:text-white border-2 dark:border-gray-700',
              label: 'dark:text-white',
              message: 'text-red-500 dark:text-red-300 absolute',
            }"
          />
        </div>
        <div class="flex pb-8 space-x-1">
          <FormKit
            name="house"
            label="House"
            placeholder="Gryffindor"
            :classes="{
              outer: 'flex flex-grow flex-col rounded',
              input:
                'min-w-full p-1 rounded border dark:bg-neutral-950 dark:text-white border-2 dark:border-gray-700',
              label: 'dark:text-white',
              message: 'text-red-500 dark:text-red-300 absolute',
            }"
          />
          <FormKit
            type="text"
            name="patronus"
            label="Patronus"
            placeholder="Stag"
            :classes="{
              outer: 'flex flex-grow flex-col rounded',
              input:
                'min-w-full p-1 rounded border dark:bg-neutral-950 dark:text-white border-2 dark:border-gray-700',
              label: 'dark:text-white',
              message: 'text-red-500 dark:text-red-300 absolute',
            }"
          />
          <FormKit
            type="number"
            name="potions"
            label="Potions"
            placeholder="8"
            min="1"
            max="10"
            :classes="{
              outer: 'flex flex-grow flex-col rounded',
              input:
                'min-w-full p-1 rounded border dark:bg-neutral-950 dark:text-white border-2 dark:border-gray-700',
              label: 'dark:text-white',
              message: 'text-red-500 dark:text-red-300 absolute',
            }"
          />
          <FormKit
            name="DADA"
            type="number"
            placeholder="10"
            min="1"
            max="10"
            label="Defense Against the Dark Arts"
            :classes="{
              outer: 'flex flex-grow flex-col rounded',
              input:
                'min-w-full p-1 rounded border dark:bg-neutral-950 dark:text-white border-2 dark:border-gray-700',
              label: 'dark:text-white',
              message: 'text-red-500 dark:text-red-300 absolute',
            }"
          />
          <FormKit
            name="charms"
            type="number"
            label="Charms"
            placeholder="10"
            min="1"
            max="10"
            :classes="{
              outer: 'flex flex-grow flex-col rounded',
              input:
                'min-w-full p-1 rounded border dark:bg-neutral-950 dark:text-white border-2 dark:border-gray-700',
              label: 'dark:text-white',
              message: 'text-red-500 dark:text-red-300 absolute',
            }"
          />
          <FormKit
            type="select"
            name="apparition"
            label="Apparition"
            placeholder="Yes"
            :options="{
              true: 'Yes',
              false: 'No',
            }"
            :classes="{
              outer: 'flex flex-grow flex-col rounded',
              input:
                'min-w-full p-1 rounded border dark:bg-neutral-950 dark:text-white border-2 dark:border-gray-700',
              label: 'dark:text-white',
              message: 'text-red-500 dark:text-red-300 absolute',
            }"
          />
        </div>
        <div class="pb-8 space-x-1">
          <FormKit
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
              message: 'text-red-500 dark:text-red-300 absolute',
            }"
          />
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
