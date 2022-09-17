import { CurrentDayCard, CurrentHourCard } from './Current'
import { ForecastCards, ForecastDayCard } from '../components/Forecast'
import { useContext, useEffect, useState } from 'react'

import { SearchBar } from '../components/Utils'
import { WeatherContext } from '../context/WeatherContextProvider'
import { useDate, TimeClock } from '../hooks/useDate'

export default function MainPanel() {
  const [active, setActive] = useState(0)
  const { currentDate } = useDate()
  const { currentTime } = TimeClock()
  const { address, forecast } = useContext(WeatherContext)
  useEffect(() => {
    const transition = () => {
      setTimeout(function () {
        const replacers = document.querySelectorAll('[data-replace]')
        for (let i = 0; i < replacers.length; i++) {
          const replaceClasses = JSON.parse(
            replacers[i].dataset.replace.replace(/'/g, '"')
          )
          Object.keys(replaceClasses).forEach(function (key) {
            replacers[i].classList.remove(key)
            replacers[i].classList.add(replaceClasses[key])
          })
        }
      }, 100)
    }
    transition()
  }, [])
  
  return (
    <div className='relative z-0 grid justify-center min-h-screen gap-3 px-4 bg-white dark:bg-slate-800 pt-20 pb-16'>
      {location ? (
        <div className='container max-w-5xl'>
          <div
            className='relative z-20 grid items-start w-full grid-cols-1 grid-rows-2 md:grid-cols-3 md:grid-rows-1 sm:items-center delay-150 duration-700 transform opacity-0 transition-all translate-y-12 ease-out'
            data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'
          >
            <div>
              <h2 className='text-xl font-bold dark:text-gray-100'>
                Local time:
              </h2>
              <h2 className='font-bold text-7xl dark:text-gray-100'>
                {/* {time || ''} */}
                {currentTime}
              </h2>
              <h2 className='col-span-2 text-2xl dark:text-gray-100'>
                {currentDate || ''}
              </h2>
            </div>

            <div className='w-full col-span-1 gap-3 text-left md:col-span-2'>
              <SearchBar />  
              <div className='flex items-center justify-end w-full my-3'>
                {/* <img
                  src={locationImage}
                  alt='Location'
                  width={25}
                  height={25}
                /> */}
                <div className='text-red-600'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" w-7 h-7">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className='text-base font-bold dark:text-gray-100'>
                  {address}
                </h2>
              </div>
            </div>
          </div>
          <h2
            className='relative -z-10 my-5 text-3xl font-semibold delay-200 duration-700 transform opacity-0 transition-all translate-y-12 ease-out dark:text-gray-100'
            data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'
          >
            Current Day
          </h2>
          <CurrentDayCard />
          <div className='relative flex items-center' >
            <div className='whitespace-nowrap overflow-x-auto overflow-y-hidden max-w-[90vw] m-auto '>
              {forecast?.forecastday?.[0].hour.map((element, index) => (
                  <CurrentHourCard key={index} element={element} />
              ))}
            </div>
          </div>
          <h2
            className='my-5 text-3xl font-semibold delay-300 duration-700 transform opacity-0 transition-all translate-y-12 ease-out dark:text-gray-100'
            data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'
          >
            Forecast
          </h2>
          <ForecastCards active={active} setActive={setActive} />
          <ForecastDayCard active={active} />
          {/* <div className='whitespace-nowrap overflow-x-auto overflow-y-hidden max-w-[90vw] '>
            {forecast?.forecastday?.[active].hour.map((element, index) => (
              <CurrentHourCard key={index} element={element} />
            ))}
          </div> */}
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  )
}
