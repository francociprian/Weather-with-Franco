import { useContext, useState } from 'react'

import { WeatherContext } from '../../context/WeatherContextProvider'
import ToogleTheme from '../ToogleTheme'

export default function Header() {
  const { degreeType, changeDegreeType } = useContext(WeatherContext)
  const [degree, setDegree] = useState('C')

  const changeDegree = () => {
    if (degreeType === 'C') {
      setDegree('F')
      changeDegreeType('F')
    } else {
      setDegree('C')
      changeDegreeType('C')
    }
  }

  return (
    <div className='flex justify-around w-full px-5 py-1 text-gray-700 dark:text-white bg-gray-300 dark:bg-gray-900 items-center fixed z-[999]'>
      <h1 className='text-2xl font-semibold lg:col-start-2 text-sky-800 dark:text-white drop-shadow-md'>Weather</h1>
      <div className='flex items-center gap-1 text-base'>
        <button
          className={degree === 'C' ? 'text-yellow-500 font-bold' : 'font-bold'}
          type='button'
          onClick={() => changeDegree()}
        >
          ºC
        </button>
        <span className='font-bold'>/</span>
        <button
          className={
            degree === 'F' ? 'text-yellow-500 font-bold' : ' font-bold'
          }
          type='button'
          onClick={() => changeDegree()}
        >
          ºF
        </button>
        <ToogleTheme />
      </div>
    </div>
  )
}
