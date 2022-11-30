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
              src={country.imgUrl}
              alt=""
              className="w-full object-cover shadow-lg"
            />
          </div>
          <div>
            <p className=" text-2xl font-bold mb-10">{country.name}</p>
            <div className=" sm:flex mb-10 w-full gap-10">
              <div className="mb-10">
                <p>Native Name: {getNativeName(country.nativeName)}</p>
                <p>Population: {formatPopulation(country.population)}</p>
                <p>Region: {country.region}</p>
                <p>Sub Region: {country.subRegion}</p>
                <p>Capital: {country.capital}</p>
              </div>
              <div>
                <p>Top Level Domain: {country.topLevelDomain}</p>
                <p>Currencies: {getCurrency(country.currencies)}</p>
                <p>Languages: {getLanguage(country.languages)}</p>
              </div>
            </div>
            <div className="sm:flex sm:space-x-4">
              <p className=" text-xl font-medium mb-5">Border Countries: </p>
              <Borders borders={country.borders} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
