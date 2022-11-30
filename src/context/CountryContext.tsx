import { createContext, ReactNode, useState, useContext } from "react";
import axios from "axios";
type CountryProviderProps = {
  children: ReactNode;
};

type CountryContext = {
  getCountries: () => void;
  getCountry: (countryName: string) => void;
  countries: Country[];
  filteredCountries: Country[];
  country: Country;
  isDark: boolean;
  getCountryNameByCca3: (cca3: string) => string;
  handleToggleTheme: () => void;
  getFilteredCountries: (region: string) => void;
  getSearchedCountry: (countryName: string) => void;
};

const CountryContext = createContext({} as CountryContext);

export const useCountryContext = () => {
  return useContext(CountryContext);
};

export const CountryContextProvider = ({ children }: CountryProviderProps) => {
  const [countries, setCountries] = useState([] as Country[]);
  const [filteredCountries, setFilteredCountries] = useState([] as Country[]);
  const [country, setCountry] = useState({} as Country);
  const [isDark, setIsDark] = useState(false);

  const url = "https://restcountries.com/v3.1";

  const getCountries = async () => {
    try {
      const data = await axios.get(`${url}/all`);
      const countriesData = data.data;
      const d: Country[] = countriesData.map((country: any) => {
        return {
          imgUrl: country.flags.png,
          name: country.name.common,
          population: country.population,
          region: country.region,
          capital: country.capital,
          nativeName: country.name.nativeName,
          subRegion: country.subregion,
          topLevelDomain: country.tld,
          currencies: country.currencies,
          languages: country.languages,
          borders: country.borders,
          cca3: country.cca3,
        };
      });
      setCountries(d);
    } catch (err) {
      console.log(err);
    }
  };

  const getFilteredCountries = (region: string) => {
    const filteredCountries = countries.filter(
      (country) => country.region === region
    );
    setFilteredCountries(filteredCountries);
  };

  const getSearchedCountry = (countryName: string) => {
    const searchedCountry = countries.filter((country) =>
      country.name.toLowerCase().includes(countryName)
    );
    setFilteredCountries(searchedCountry);
  };

  const getCountry = async (countryName: string) => {
    const countryIndex = countries.findIndex(
      (country) => country.name === countryName
    );
    setCountry(countries[countryIndex]);
  };

  const getCountryNameByCca3 = (cca3: string) => {
    const x = countries.filter((country) => country.cca3 === cca3);

    return `${x[0].name}`;
  };

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <CountryContext.Provider
      value={{
        getSearchedCountry,
        filteredCountries,
        getFilteredCountries,
        isDark,
        handleToggleTheme,
        getCountryNameByCca3,
        country,
        getCountry,
        getCountries,
        countries,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};
