const filesOrDirectories = [
  '../../../assets/css/main.css',
  '../../../assets/images',
  '../../../components/Admin/Aside.vue',
  '../../../components/Admin/Form/Field.vue',
  '../../../components/Admin/Form/Pagination.vue',

  '../../../components/The/Navbar',

  '../../../composables/useAPI.ts',
  '../../../composables/useToast.ts',
  '../../../composables/useToggleOpen.ts',

  '../../../layouts/AdminLayout.vue',
  '../../../layouts/default.vue',

  '../../../plugins/fontawesome.ts',

  '../../../server/middleware/01.auth.global.ts',
  '../../../server/middleware/02.user.global.ts',
  '../../../server/middleware/03.pagination.global.ts',

  '../../../utils/Colors.ts',
  '../../../utils/NavItems.ts',
  '../../../utils/QueryStrings.ts',

  '../../../app.vue',
  '../../../package.json',
  '../../../tailwind.config.js',
]

function copyToNuxtTmp() {
  // 1. Copy all files/folders to '../NuxtTmp' recursively.
  // Create any missing directories as necessary.
  // filesOrDirectories....
}
