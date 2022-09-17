import { useContext, useState } from 'react'

import PlacesAutocomplete from 'react-places-autocomplete/dist/PlacesAutocomplete'
import { WeatherContext } from '../../context/WeatherContextProvider'

export default function SearchBar() {
  const [input, setInput] = useState('')
  const { searchWeather } = useContext(WeatherContext)
  return (
    <form className='relative z-10 grid grid-cols-2 sm:hidden'>
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
          <div className=' w-full col-span-3 md:col-end-4 md:col-span-2'>
            <div className='relative md:w-80 mt-5 text-black '>
              <input {...getInputProps({
                placeholder: `Search Places ...`,
                className: "h-10 w-full px-5 pr-10 rounded-full text-base focus:outline-none text-black border"
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