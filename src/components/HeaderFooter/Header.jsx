import { useContext, useState } from 'react'
import { WeatherContext } from '../../context/WeatherContextProvider'
import ToogleTheme from '../ToogleTheme'
import PlacesAutocomplete from 'react-places-autocomplete/dist/PlacesAutocomplete'

function SearchBarHeader() {
  const [input, setInput] = useState('')
  const { searchWeather } = useContext(WeatherContext)
  return (
    <form className='hidden sm:block'>
      <PlacesAutocomplete
        onChange={(address) => setInput(address)}
        value={input}
        onSelect={(newAddress, placeId, suggestion) => {
          searchWeather({ newAddress })
          setInput('')
        }}
        googleCallbackName="initOne"
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div 
            className=' w-full col-span-3 md:col-end-4 md:col-span-2'
            >
            <div className='relative md:w-80'>
              <input {...getInputProps({
                placeholder: `Search Places ...`,
                className: "bg-gray-100 dark:bg-gray-700 h-10 w-full px-5 pr-10 rounded-full text-sm focus:outline-none"
              })} />
              <button disabled className="absolute right-0 top-0 mt-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button> 
            </div>
            <div className='absolute z-50 max-w-xs p-3 bg-white border rounded top-15 h-fit empty:hidden border-cardGray place-self-start'>
              {loading && ''}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? 'mt-2 border-b border-solid border-cardGray'
                  : 'mt-2 border-b border-dashed border-cardGray'
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' }
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
                    })}
                    key={suggestion.description}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </form>
  )
}


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
    <div className='flex justify-between w-full md:px-20 px-5 py-1 text-gray-700 dark:text-white bg-gray-300 dark:bg-gray-900 items-center fixed z-[999]'>
      <h1 className='text-2xl font-semibold lg:col-start-2 text-sky-800 dark:text-white drop-shadow-md'>Weather</h1>
      <div className='flex items-center gap-5'>
        <SearchBarHeader />
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
    </div>
  )
}
