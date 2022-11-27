import { createContext, ReactNode, useState, useContext } from "react";
import axios from "axios";
type CountryProviderProps = {
  children: ReactNode;
};

type CountryContext = {
  getCountries: () => void;
  getCountry: (countryName: string) => void
  countries: Country[];
  country: Country
};

const CountryContext = createContext({} as CountryContext);

export const useCountryContext = () => {
  return useContext(CountryContext)
}

export const CountryContextProvider = ({ children }: CountryProviderProps) => {
  const [countries, setCountries] = useState([] as Country[])
  const [country, setCountry] = useState({} as Country)
 
  const getCountries = async () => {
    const data = await axios.get("https://restcountries.com/v3.1/all");
    const countriesData = data.data;
    //console.log(countriesData)
    const d: Country[] = countriesData.map((country: any) => {
      return {
        imgUrl: country.flags.png,
        name: country.name.common,
        population: country.population,
        region: country.region,
        capital: country.capital,
        nativeName: "Native Name",
        subRegion: country.subregion,
        topLevelDomain: "Top Level Domain",
        currencies: "Currencies",
        languages: country.languages,
        borders: country.borders,
      };
    });
    setCountries(d)
  };

  const getCountry = (countryName: string) => {
    const countryIndex = countries.findIndex(country => country.name == countryName)
    setCountry(countries[countryIndex])
  }

  return (
    <CountryContext.Provider value={{country, getCountry, getCountries, countries }}>
      {children}
    </CountryContext.Provider>
  );
};
