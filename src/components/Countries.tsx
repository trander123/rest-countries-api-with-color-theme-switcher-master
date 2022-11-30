import { useState } from "react";
import { useCountryContext } from "../context/CountryContext";
import { Country } from "./Country";

export const Countries = () => {
  const { countries, filteredCountries } = useCountryContext();
  const fCLength = filteredCountries.length > 0;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 justify-center items-center mx-10 sm:mx-15">
      {fCLength
        ? filteredCountries.map((country) => (
            <Country country={country} key={country.name} />
          ))
        : countries.map((country) => (
            <Country country={country} key={country.name} />
          ))}
    </div>
  );
};
