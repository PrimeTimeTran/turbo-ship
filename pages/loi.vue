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
  <section class="bg-base-100">
    <h1>File upload</h1>
    <form @submit="onSubmit">
      <input name="upload" type="file" />
      <button type="submit">Upload</button>
    </form>
  </section>
</template>
<style></style>
