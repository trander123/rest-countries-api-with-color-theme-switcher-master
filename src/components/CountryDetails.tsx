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
  const [x, setX] = useState<Country>(() => {
    const val = sessionStorage.getItem("country")
    if(val !== null) return JSON.parse(val)
    return country
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
              src={x.imgUrl}
              alt=""
              className="w-full object-cover shadow-lg"
            />
          </div>
          <div>
            <p className=" text-2xl font-bold mb-10">{x.name}</p>
            <div className=" sm:flex mb-10 w-full gap-10">
              <div className="mb-10">
                <p>Native Name: {getNativeName(x.nativeName)}</p>
                <p>Population: {formatPopulation(x.population)}</p>
                <p>Region: {x.region}</p>
                <p>Sub Region: {x.subRegion}</p>
                <p>Capital: {x.capital}</p>
              </div>
              <div>
                <p>Top Level Domain: {x.topLevelDomain}</p>
                <p>Currencies: {getCurrency(x.currencies)}</p>
                <p>Languages: {getLanguage(x.languages)}</p>
              </div>
            </div>
            <div className="sm:flex sm:space-x-4">
              <p className=" text-xl font-medium mb-5">Border Countries: </p>
              <Borders borders={x.borders} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
