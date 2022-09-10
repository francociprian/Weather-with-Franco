import TempMin from '../../img/TempMin.png'
import TempMax from '../../img/TempMax.png'
import { WeatherContext } from '../../context/WeatherContextProvider'
import { useContext } from 'react'

export default function TempsData({ temp, max }) {
  const { degreeType } = useContext(WeatherContext)
  return (
    <div className='flex items-center gap-3'>
      <h2 className='text-xl dark:text-gray-100'>
        {temp}º{degreeType}
      </h2>
      <div>
        {max ? (
          <img className='w-7 h-7' src={TempMax} alt='Max temp' />
        ) : (
          <img className='w-7 h-7' src={TempMin} alt='Min temp' />
        )}
      </div>
    </div>
  )
}
