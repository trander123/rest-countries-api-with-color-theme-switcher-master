import React from 'react'
import { useCountryContext } from '../context/CountryContext'
import { Country } from './Country'

export const Countries = () => {
  const {countries} = useCountryContext()
  return (
    <div className='grid grid-cols-1 sm:grid-cols-4 gap-10 justify-center items-center mx-10 sm:mx-15'>
      {countries.map((country) => (
        <Country country={country} key={country.name}/>
      ) )}
    </div>
  )
}
