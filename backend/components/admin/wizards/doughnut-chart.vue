<script setup>
onMounted(() => {
  const data = {
    labels: ['JavaScript', 'Python', 'Ruby'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(133, 105, 241)',
          'rgb(164, 101, 241)',
          'rgb(101, 143, 241)',
        ],
        hoverOffset: 4,
      },
    ],
  }
  const options = {
    type: 'doughnut',
    data: data,
    options: {
      plugins: {
        legend: {
          position: 'left',
        },
      },
    },
  }
  const chart = new Chart(document.getElementById('chartDoughnut'), options)
})
</script>

<template>
  <div
    class="flex flex-1 flex-col justify-between shadow-xl rounded-lg bg-white dark:bg-neutral-800"
  >
    <div
      class="text-xl text-gray-500 dark:text-gray-400 font-bold leading-tight"
    >
      Programming Languages
    </div>
    <canvas id="chartDoughnut" />
  </div>
</template>
