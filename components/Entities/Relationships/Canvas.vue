<script setup>
const { entities } = useEntities()
watch(entities, () => {
  setCanvasDimensions()
})
function drawEntities() {
  // Todo: Enable vertical scroll if content grows taller than viewport
  if (canvas.value.getContext) {
    const ctx = canvas.value.getContext('2d')
    let startY = 10
    let startX = 10
    let col = 1
    ctx.font = '30px serif'
    entities.forEach((e) => {
      startX += 10
      startY += 20
      if (startX != 20) {
        startX = col * 170 + 10
        startY = 30
        col += 1
      }
      const itemsHeight = e.attributes.length * 30

      // Hor, Ver, Width, Height
      ctx.fillRect(startX, startY, 150, itemsHeight + 20)
      ctx.fillStyle = 'grey'
      ctx.font = '30px serif'
      ctx.fillText(e.name, startX, startY)

      let attributeHeight = startY + 20
      let count = 0
      e.attributes.forEach((a) => {
        count += 1
        let color = count % 2 == 0 ? '#ffb3ba' : '#bae1ff'
        ctx.font = '20px serif'
        ctx.fillStyle = color
        ctx.fillRect(startX, attributeHeight, 150, 30)
        ctx.fillStyle = 'gray'
        ctx.fillText(a.name, startX, attributeHeight + 16)
        attributeHeight += 30
      })
      ctx.fillStyle = 'grey'
      startY = attributeHeight + 10
    })
  }
}

const canvas = ref(null)

function setCanvasDimensions() {
  if (process.browser) {
    canvas.value = document.getElementById('canvas')
    const navBarHeight = document.getElementById('TheNavBar').offsetHeight
    const height = window.innerHeight - (navBarHeight + 50)
    canvas.value.width = window.innerWidth
    canvas.value.height = height
    drawEntities()
  }
}

onMounted(() => {
  // document.getElementById('showLeft').click()
  // document.getElementById('showRight').click()
  setCanvasDimensions()
})
</script>
<template>
  <div id="canvasContainer">
    <canvas id="canvas" />
  </div>
</template>

<style scoped>
#canvasContainer {
  margin: 5px;
  overflow: auto;
}
</style>
