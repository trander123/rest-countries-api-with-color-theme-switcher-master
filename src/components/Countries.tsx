import React from 'react'
import { useCountryContext } from '../context/CountryContext'
import { Country } from './Country'

export const Countries = () => {
  const {countries} = useCountryContext()
  return (
    <div className='flex flex-col sm:grid sm:grid-cols-4 gap-10 p-8 justify-center items-center'>
      {countries.map((country) => (
        <Country country={country} key={country.name}/>
      ) )}
    </div>
  )
}
