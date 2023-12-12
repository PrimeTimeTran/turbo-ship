<script setup>
const props = defineProps(['item', 'attribute'])

const item = props.item[props.attribute.name]
const isUser = props.attribute.name === 'user'
const isBank = props.attribute.name === 'bank'
const isBranch = props.attribute.name === 'branch'
</script>
<template>
  <div class="dropdown dropdown-hover max-w-64">
    <div role="button" class="truncate text-ellipsis m-1 max-w-64" v-text="props.attribute.name" />
    <div v-if="isUser" class="dropdown-content z-[1] menu p-4 rounded-box w-96 bg-base-100 primary-content shadow-lg">
      <div class="card-body card-compact space-x-2 p-2 m-2">
        <div class="avatar">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div class="">
          <h2 class="card-title text-start">
            {{ item.firstName + ' ' + item.lastName }}
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p v-text="item.bio"></p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Audit</div>
            <div class="badge badge-outline">Profile</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isBank" class="dropdown-content z-[1] menu p-4 rounded-box w-96 bg-base-100 primary-content shadow-lg">
      <div class="space-x-2 p-2 m-2">
        <div class="avatar">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <figure>
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </figure>
          </div>
        </div>
        <div class="card-body">
          <h2 class="card-title">
            {{ item.name }}
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p v-text="item.name"></p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Fashion</div>
            <div class="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isBank" class="dropdown-content z-[1] menu p-4 rounded-box w-96 bg-base-100 primary-content shadow-lg">
      <div class="space-x-2 p-2 m-2">
        <div class="avatar">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <figure>
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </figure>
          </div>
        </div>
        <div class="card-body">
          <h2 class="card-title">
            {{ item.name }}
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p v-text="item.name"></p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Fashion</div>
            <div class="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isBranch" class="dropdown-content z-[1] menu p-4 rounded-box w-96 bg-base-100 primary-content shadow-lg">
      <div class="space-x-2 p-2 m-2">
        <div class="avatar">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <figure>
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </figure>
          </div>
        </div>
        <div class="card-body">
          <h2 class="card-title">
            Branch {{ item._id }}
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p v-text="item.name"></p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Fashion</div>
            <div class="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
