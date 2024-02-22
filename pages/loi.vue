<script setup>
async function onSubmit(e) {
  e.preventDefault()
  const form = new FormData()
  const fileInput = e.target.upload.files[0]
  form.append('file', fileInput)
  try {
    const resp = await fetch('http://localhost:3005/api/file', {
      body: form,
      method: 'POST',
    })

    if (!resp.ok) {
      throw new Error('Failed to upload file')
    }

    const json = await resp.json()
    console.log({ json })
  } catch (error) {
    console.error('Error uploading file:', error)
  }
}
</script>
<template>
  <div class="flex flex-grow overflow-y-auto max-h-screen no-scrollbar md:mr-4 lg:mr-0 pt-8">
    <slot class="w-full" />
    <div class="main-nav visible lg:block md:invisible rounded border z-10 shadow">
      <MenuBurger />
    </div>
    <MenuSidebar>
      <MenuTableOfContents />
    </MenuSidebar>
  </div>
</template>
<style></style>
