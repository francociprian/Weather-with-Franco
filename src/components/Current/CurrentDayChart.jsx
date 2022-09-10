import { useContext, useEffect, useState } from 'react'

import { LABELS } from '../Const'
import { Line } from 'react-chartjs-2'
import { WeatherContext } from '../../context/WeatherContextProvider'
import { ThemeContext } from '../../context/themeContext'

export default function CurrentDayChart() {
  const { theme } = useContext(ThemeContext)
  const { degreeType, forecast } = useContext(WeatherContext)
console.log(theme)
  const [data, setData] = useState([])
  useEffect(() => {
    setData([])
    forecast?.forecastday?.[0]?.hour?.forEach((day, index) => {
      setData((prev) => [...prev, degreeType === 'C' ? day.temp_c : day.temp_f])
    })
  }, [forecast, degreeType])

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
    <div className='relative chart-container col-span-4 row-start-3 row-span-2 h-[85%] lg:h-[90%] '>
      <Line options={options} data={data2}/>
    </div>
  )
}
