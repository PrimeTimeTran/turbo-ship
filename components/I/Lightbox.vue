<script setup></script>
<script>
export default {
  data() {
    return {
      imgModal: false,
      imgModalSrc: '',
      imgModalDesc: '',
      images: [
        { imgModalSrc: 'https://picsum.photos/640/480', imgModalDesc: 'Random Image One Description' },
        { imgModalSrc: 'https://picsum.photos/640/480', imgModalDesc: '' },
        { imgModalSrc: 'https://picsum.photos/640/480', imgModalDesc: '' },
        { imgModalSrc: 'https://picsum.photos/640/480', imgModalDesc: '' },
        { imgModalSrc: 'https://picsum.photos/640/480', imgModalDesc: 'This one has description' },
        { imgModalSrc: 'https://picsum.photos/640/480', imgModalDesc: '' },
      ],
    }
  },
  methods: {
    openModal(imgSrc, imgDesc) {
      this.imgModal = true
      this.imgModalSrc = imgSrc
      this.imgModalDesc = imgDesc
    },
    closeModal() {
      this.imgModal = false
      this.imgModalSrc = ''
      this.imgModalDesc = ''
    },
  },
}
</script>

<template>
  <div>
    <template v-if="imgModal">
      <div
        @click="closeModal"
        class="p-2 fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center bg-black bg-opacity-75"
      >
        <div @click.stop="closeModal" class="flex flex-col max-w-3xl max-h-full overflow-auto">
          <div class="z-50">
            <button @click="closeModal" class="float-right pt-2 pr-2 outline-none focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                ></path>
              </svg>
            </button>
          </div>
          <div class="p-2">
            <img :alt="imgModalSrc" class="object-contain h-1/2-screen" :src="imgModalSrc" />
            <p>{{ imgModalDesc }}</p>
          </div>
        </div>
      </div>
    </template>
    <div class="px-2">
      <div class="flex -mx-2">
        <div v-for="(item, index) in images" :key="index" class="w-1/6 px-2">
          <div class="bg-gray-400">
            <a @click="openModal(item.imgModalSrc, item.imgModalDesc)" class="cursor-pointer">
              <img :alt="item.imgModalDesc" class="object-fit w-full" :src="item.imgModalSrc" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
