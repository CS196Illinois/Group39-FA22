import React from 'react'
import { Bar, defaults } from 'react-chartjs-2'



defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

var arr = ['streak 1', 'streak 2', 'streak 3', 'streak 4', 'streak 5', 'streak 6'];
var arrdata = [1, 4, 3, 5, 2, 3];

var arr2 = ['1', '2', '3', '4', '5'];
var arrdata2 = [2, 6, 3, 5, 3];

var selectedata = arrdata;

const BarGraph = () => {
  return (
    <div>
      <Bar
        data={{
          labels: arr,
          datasets: [
            {
              label: 'length of habit streak',
              data: selectedata,
              backgroundColor: 'rgba(0, 60, 0, 0.7)',
              borderColor: 'rgba(0, 0, 0, 0)',
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={400}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 20,
            },
          },
        }}
      />
    </div>
  )
}

export default BarGraph
