import React, { useContext } from 'react'
import { LABELS } from '../Const'
import { Line } from 'react-chartjs-2'
import { ThemeContext } from '../../context/themeContext'

export default function ForecastDayChart({ data }) {
  const { theme } = useContext(ThemeContext)
  const data2 = {
    labels: LABELS,
    datasets: [
      {
        label: 'Temperature',
        fill: true,
        borderWidth: 2,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: "rgba(53, 162, 235, 0.3)",
        hoverBackgroundColor:'#ff5722',
        pointBorderWidth:0.3,
        data,
      }
    ]
  }
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 3,
    plugins: {
      legend: {
        position: 'top',
        display: false
      }
    },
    scales: {
      x: {
        ticks: {
          color: `${theme === 'dark' ? 'white' : 'gray'}`
        }
      },
      y: {
        ticks: {
          color: `${theme === 'dark' ? 'white' : 'gray'}`
        }
      }
    }
  }

  return (
    <div className='chart-container col-span-4 row-start-3 row-span-2'>
      <Line options={options} data={data2} />
    </div>
  )
}
