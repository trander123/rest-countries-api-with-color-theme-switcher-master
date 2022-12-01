import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCountryContext } from "../context/CountryContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  formatPopulation,
  getCurrency,
  getLanguage,
  getNativeName,
} from "../helpers/countryHelpers";
import { Borders } from "./Borders";

export const CountryDetails = () => {
  const { country } = useCountryContext();
  const [countryDetails, setCountryDetails] = useState<Country>(() => {
    const val = sessionStorage.getItem("country");
    if (val !== null) return JSON.parse(val);
    return country;
  });

  return (
    <>
      <div className="mx-5 mt-10">
        <Link
          to="/"
          className=" pl-2 pr-4 py-2 shadow-lg text-sm rounded-md bg-white dark:bg-gray-800 align-middle"
        >
          <span>
            <ArrowBackIcon /> Back
          </span>
        </Link>

        <div className=" sm:grid sm:grid-cols-2 mt-10 items-center justify-center gap-10">
          <div className="mb-10">
            <img
              src={countryDetails.imgUrl}
              alt=""
              className="w-full object-cover shadow-lg"
            />
          </div>
          <div>
            <p className=" text-2xl font-bold mb-10">{countryDetails.name}</p>
            <div className=" sm:flex mb-10 w-full gap-10">
              <div className="mb-10">
                <p>Native Name: {getNativeName(countryDetails.nativeName)}</p>
                <p>Population: {formatPopulation(countryDetails.population)}</p>
                <p>Region: {countryDetails.region}</p>
                <p>Sub Region: {countryDetails.subRegion}</p>
                <p>Capital: {countryDetails.capital}</p>
              </div>
              <div>
                <p>Top Level Domain: {countryDetails.topLevelDomain}</p>
                <p>Currencies: {getCurrency(countryDetails.currencies)}</p>
                <p>Languages: {getLanguage(countryDetails.languages)}</p>
              </div>
            </div>
            <div className="sm:flex sm:space-x-4">
              <p className=" text-xl font-medium mb-5">Border Countries: </p>
              <Borders borders={countryDetails.borders} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
