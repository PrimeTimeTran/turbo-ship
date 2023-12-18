<script setup>
import Chart from 'chart.js/auto'
const myChartDoughnut = ref(null)

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
      hoverOffset: 4,
    },
  ],
}

onMounted(() => {
  try {
    const canvas = myChartDoughnut.value
    const ctx = canvas.getContext('2d')
    new Chart(ctx, {
      type: 'doughnut',
      data: data,
    })
  } catch (error) {
    console.error(error)
  }
})
</script>
<template>
  <canvas ref="myChartDoughnut" />
</template>
