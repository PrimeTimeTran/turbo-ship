<script setup>
Number.prototype.comma_formatter = function () {
  return this.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
}

let getData = function () {
  return {
    date: 'today',
    options: [
      {
        label: 'Today',
        value: 'today',
      },
      {
        label: 'Last 7 Days',
        value: '7days',
      },
      {
        label: 'Last 30 Days',
        value: '30days',
      },
      {
        label: 'Last 6 Months',
        value: '6months',
      },
      {
        label: 'This Year',
        value: 'year',
      },
    ],
    showDropdown: false,
    selectedOption: 0,
    selectOption: function (index) {
      this.selectedOption = index
      this.date = this.options[index].value
      this.renderChart()
    },
    data: null,
    fetch: function () {
      fetch(
        'https://cdn.jsdelivr.net/gh/swindon/fake-api@master/tailwindAlpineJsChartJsEx1.json'
      )
        .then((res) => res.json())
        .then((res) => {
          this.data = res.dates
          this.renderChart()
        })
    },
    renderChart: function () {
      let c = false

      Chart.helpers.each(Chart.instances, function (instance) {
        if (instance.chart.canvas.id == 'chart') {
          c = instance
        }
      })

      if (c) {
        c.destroy()
      }

      let ctx = document.getElementById('chart').getContext('2d')

      let chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.data[this.date].data.labels,
          datasets: [
            {
              label: 'Income',
              backgroundColor: 'rgba(102, 126, 234, 0.25)',
              borderColor: 'rgba(102, 126, 234, 1)',
              pointBackgroundColor: 'rgba(102, 126, 234, 1)',
              data: this.data[this.date].data.income,
            },
            {
              label: 'Expenses',
              backgroundColor: 'rgba(237, 100, 166, 0.25)',
              borderColor: 'rgba(237, 100, 166, 1)',
              pointBackgroundColor: 'rgba(237, 100, 166, 1)',
              data: this.data[this.date].data.expenses,
            },
          ],
        },
        layout: {
          padding: {
            right: 10,
          },
        },
        options: {
          scales: {
            yAxes: [
              {
                gridLines: {
                  display: false,
                },
                ticks: {
                  callback: function (value, index, array) {
                    return value > 1000
                      ? value < 1000000
                        ? value / 1000 + 'K'
                        : value / 1000000 + 'M'
                      : value
                  },
                },
              },
            ],
          },
        },
      })
    },
  }
}
let chartData = {}
onMounted(() => {
  getData().fetch()
  chartData = getData()
})
</script>

<template>
  <div
    class="flex flex-1 flex-col min-h-full p-4 dark:bg-neutral-800 text-gray-500 rounded-lg shadow-xl"
  >
    <div class="flex flex-wrap items-end rounded-full">
      <div class="flex-1">
        <h3
          class="text-xl text-gray-500 dark:text-gray-400 font-bold leading-tight"
        >
          Income
        </h3>
      </div>
      <div
        class="relative"
        @click.away="chartData.showDropdown = false"
      >
        <button
          class="text-xs hover:text-gray-300 h-6 focus:outline-none text-gray"
          @click="chartData.showDropdown = !chartData.showDropdown"
        >
          <span
            x-text="chartData.options[chartData.selectedOption].label"
          ></span
          ><i class="ml-1 mdi mdi-chevron-down"></i>
        </button>
        <div
          class="dark:bg-neutral-800 shadow-lg rounded text-sm absolute top-auto right-0 min-w-full w-32 z-30 mt-1 -mr-3"
          x-show="chartData.showDropdown"
          style="display: none"
          x-transition:enter="transition ease duration-300 transform"
          x-transition:enter-start="opacity-0 translate-y-2"
          x-transition:enter-end="opacity-100 translate-y-0"
          x-transition:leave="transition ease duration-300 transform"
          x-transition:leave-start="opacity-100 translate-y-0"
          x-transition:leave-end="opacity-0 translate-y-4"
        >
          <span
            class="absolute top-0 right-0 w-3 h-3 dark:bg-neutral-800 transform rotate-45 -mt-1 mr-3"
          />
          <div class="dark:bg-neutral-800 rounded w-full relative z-10 py-1">
            <ul class="list-reset text-xs">
              <template x-for="(item,index) in chartData.options">
                <li
                  class="px-4 py-2 hover:dark:bg-neutral-800 hover:text-white transition-colors duration-100 cursor-pointer"
                  :class="{ 'text-white': index == chartData.selectedOption }"
                  @click="
                    () => {
                      chartData.selectOption(index)
                      chartData.showDropdown = false
                    }
                  "
                >
                  <span x-text="item.label"></span>
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-1 items-end mb-5">
      <h4
        class="text-2xl lg:text-3xl dark:text-white font-semibold leading-tight inline-block mr-2"
        x-text="'$'+(chartData.data?chartData.data[chartData.date].total.comma_formatter():0)"
      >
        0
      </h4>
      <span
        class="inline-block"
        :class="
          chartData.data && chartData.data[chartData.date].upDown < 0
            ? 'text-red-500'
            : 'text-green-500'
        "
        ><span
          x-text="chartData.data&&chartData.data[chartData.date].upDown<0?'▼':'▲'"
          >0</span
        >
        <span x-text="chartData.data?chartData.data[chartData.date].upDown:0"
          >0</span
        >%</span
      >
    </div>
    <div>
      <canvas
        id="chart"
        class="w-100"
      ></canvas>
    </div>
  </div>
</template>
