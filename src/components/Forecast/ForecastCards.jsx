import { DAY, WEATHER_ICON } from '../Const'
import Img from '../Utils/Img'
import TempsData from '../Utils/TempsData'
import { WeatherContext } from '../../context/WeatherContextProvider'
import WindHumData from '../Utils/WindHumData'
import { useContext } from 'react'

export default function ForecastCards({ active, setActive }) {
  const { forecast, degreeType } = useContext(WeatherContext)

  return (
    <div
      className='grid grid-cols-1 grid-rows-3 gap-3 my-3 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-1 delay-500 duration-700 transform opacity-0 transition-all translate-y-12 ease-out'
      data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" } '
    >
      {forecast?.forecastday?.map((day, index) => (
        <div
          key={day.date_epoch}
          className={`border-[1.5px] rounded-md h-44 w-full grid grid-cols-4 grid-rows-2 justify-center items-center p-6 cursor-pointer ${
            active === index
              ? 'border-slate-400 dark:border-cardGray bg-zinc-50 dark:bg-slate-700'
              : 
              'border-cardGray dark:border-slate-700 bg-zinc-200 dark:bg-slate-800'
          }`}
          onClick={() => setActive(index)}
        >
          <div className='col-span-2'>
            <h3 className='text-xl dark:text-gray-100'>
              {DAY[new Date(day.date).getDay()]}
            </h3>
            <h3 className='text-xl text-gray-500 dark:text-cardGray'>
              {day.day.condition.text}
            </h3>
          </div>
          <Img
            className='col-start-4 place-self-end'
            src={WEATHER_ICON[day.day.condition.code][0]}
            alt='Location'
            width={70}
            height={70}
          />

          <div className='col-span-2 gap-3 '>
            <WindHumData src='humidity' text='%' data={day.day.avghumidity} />
            <WindHumData src='wind' text='km/h' data={day.day.maxwind_kph} />
          </div>
          <div className='flex flex-col col-span-2 mt-4 place-items-end'>
            <TempsData
              temp={degreeType === 'C' ? day.day.maxtemp_c : day.day.maxtemp_f}
              max
            />
            <TempsData
              temp={degreeType === 'C' ? day.day.mintemp_c : day.day.mintemp_f}
            />
          </div>
        </div>
      )) || <div>Loading...</div>}
    </div>
  )
}
