import React from "react";
import { Link } from "react-router-dom";
import { useCountryContext } from "../context/CountryContext";
import { formatPopulation } from "../helpers/countryHelpers";

interface ICountry {
  country: Country;
}

export const Country = ({ country }: ICountry) => {
  const { getCountry } = useCountryContext();
  return (
    <Link
      to={`/country/${country.name}`}
      onClick={() => {
        getCountry(country.name)
        sessionStorage.setItem("country", JSON.stringify(country))
      }}
    >
      <div className=" rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800">
        <div>
          <img
            src={country.imgUrl}
            alt=""
            className=" h-40 w-full object-cover"
          />
        </div>
        <div className="p-5">
          <p className=" font-bold mb-2.5">{country.name}</p>
          <p>{`Population: ${formatPopulation(country.population)}`}</p>
          <p>{`Region: ${country.region}`}</p>
          <p>{`Capital: ${country.capital}`}</p>
        </div>
      </div>
    </Link>
  );
};
