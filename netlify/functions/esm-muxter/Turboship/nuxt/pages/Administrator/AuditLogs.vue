<script setup>
// https://moment.github.io/luxon/#/formatting
import { DateTime } from 'luxon'

definePageMeta({
  layout: 'admin-layout',
})

const { apiUrl } = useAPI()
let url = apiUrl + '/auditlogs'
const { data } = await useFetch(url)
</script>
<template>
  <AdminTheAuditLogs />
  <div class="overflow-x-auto">
    <table class="table">
      <thead>
        <tr>
          <th class="w-32">Date</th>
          <th class="w-64">
            <details class="dropdown">
              <summary class="m-1 btn btn-xs bg-base-100">Actor</summary>
              <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </details>
          </th>
          <th>Action</th>
          <th>Collection</th>
          <th>Document</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="audit of data.data" class="dark:bg-base-200">
          <td class="max-w-32 w-32"><span v-text="parseTime(audit.timestamp)" /></td>
          <td class="flex flex-col w-64"><span v-text="audit.actorFirstName" /><span v-text="audit.actorEmail" /></td>
          <td><span v-text="audit.action" /></td>
          <td><span v-text="audit.collection" /></td>
          <td><span v-text="audit.documentId" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style></style>
