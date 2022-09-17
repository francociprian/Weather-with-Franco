import Img from '../Utils/Img'
import { WEATHER_ICON } from '../Const'
import { WeatherContext } from '../../context/WeatherContextProvider'
import { useContext } from 'react'

export default function CurrentHourCard({ element }) {
  const { degreeType } = useContext(WeatherContext)
  return (
    <div className='w-28 h-44 mt-5 mb-3 mr-3 rounded-md inline-block border-[1.5px] bg-slate-50 dark:bg-slate-700 dark:border-slate-900 text-center'>
      <div className='grid place-content-center place-items-center h-full '>
        <Img
          className='mt-1'
          src={
            WEATHER_ICON[element.condition?.code]?.[
              (element?.condition?.code === 1000 && element?.is_day) === 0
                ? 1
                : 0
            ]
          }
          alt='Weather'
          width={65}
        />
        <p className='dark:text-white font-bold text-sm'>
          {element.time.slice(11, 16)}
        </p>
        <p className='dark:text-white font-bold text-base'>
          {degreeType === 'C' ? element.temp_c + 'ºC' : element.temp_f + 'ºF'}
        </p>
        <p className='dark:text-white font-bold text-sm whitespace-pre-line h-10'>
          {element.condition?.text}
        </p>
      </div>
    </div>
  )
}
