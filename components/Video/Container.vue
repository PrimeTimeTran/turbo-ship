<template>
  <div
    @mousemove="dragging"
    @mouseup="stopDragging"
    @mousedown="startDragging"
    class="video-container"
    id="draggable-container"
  >
    <iframe
      id="player"
      allowfullscreen
      frameborder="10"
      title="YouTube video player"
      src="https://www.youtube.com/embed/HAvJBhK_vBI?si=qBBz8Js8bplutjuO"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

let isDragging = ref(false)
let offsetX = ref(0)
let offsetY = ref(0)

const startDragging = (event) => {
  isDragging.value = true
  offsetX.value = event.clientX - draggableContainer.offsetLeft
  offsetY.value = event.clientY - draggableContainer.offsetTop
}

const dragging = (event) => {
  if (isDragging.value) {
    const x = event.clientX - offsetX.value
    const y = event.clientY - offsetY.value

    draggableContainer.style.left = `${x}px`
    draggableContainer.style.top = `${y}px`
  }
}

const stopDragging = () => {
  isDragging.value = false
}

// Get the draggable container reference
const draggableContainer = document.getElementById('draggable-container')
</script>

<style>
#player {
  width: 750px;
  height: 500px;
}

.video-container {
  right: 0;
  bottom: 0;
  margin: 20px;
  position: fixed;
  padding-top: 30px;
  background-color: blue;
  cursor: move; /* Add cursor style for draggable */
}

iframe {
  border: 0;
  width: 300px;
  height: 200px;
  padding-top: 30px;
}
</style>
