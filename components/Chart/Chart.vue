<script setup>
import Chart from 'chart.js/auto'

const props = defineProps(['type', 'data', 'config'])
const myChart = ref(null)

function setupScatter(chart) {
  const actions = [
    {
      name: 'Randomize',
      handler(chart) {
        chart.data.datasets.forEach((dataset) => {
          dataset.data = Utils.bubbles({ count: 7, rmin: 1, rmax: 1, min: -100, max: 100 })
        })
        chart.update()
        return chart
      },
    },
    {
      name: 'Add Dataset',
      handler(chart) {
        const chartData = chart.data
        const dsColor = Utils.namedColor(chartData.datasets.length)
        const newDataset = {
          label: 'Dataset ' + (chartData.datasets.length + 1),
          backgroundColor: Utils.transparentize(dsColor, 0.5),
          borderColor: dsColor,
          data: Utils.bubbles({ count: 7, rmin: 1, rmax: 1, min: -100, max: 100 }),
        }
        chart.data.datasets.push(newDataset)
        chart.update()
      },
    },
    {
      name: 'Add Data',
      handler(chart) {
        const chartData = chart.data
        if (chartData.datasets.length > 0) {
          for (let index = 0; index < chartData.datasets.length; ++index) {
            chartData.datasets[index].data.push(Utils.bubbles({ count: 1, rmin: 1, rmax: 1, min: -100, max: 100 })[0])
          }
          chart.update()
        }
      },
    },
    {
      name: 'Add Data',
      handler(chart) {
        const chartData = chart.data
        if (chartData.datasets.length > 0) {
          for (let index = 0; index < chartData.datasets.length; ++index) {
            chartData.datasets[index].data.push(Utils.bubbles({ count: 1, rmin: 1, rmax: 1, min: -100, max: 100 })[0])
          }
          console.log({
            datasets: chartData.datasets,
          })
          chart.update()
        }
      },
    },
  ]
  actions.forEach((i) => {
    i.handler(chart)
  })
}

onMounted(() => {
  try {
    const canvas = myChart.value
    const ctx = canvas.getContext('2d')
    let chart = new Chart(ctx, props.config)

    // if (props.config.type === 'scatter') {
    //   setupScatter(chart)
    // }
  } catch (error) {
    console.error(error)
  }
})
</script>
<template>
  <canvas ref="myChart" height="20vh" width="40vw" />
</template>
