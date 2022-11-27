import React from "react";

interface ICountry {
  country: Country;
}

export const Country = ({ country }: ICountry) => {
  return (
    <div className=" min-w-full sm:max-w-xs rounded-lg overflow-hidden shadow-lg border border-gray-100">
      <div>
        <img
          src={country.imgUrl}
          alt=""
          className=" h-40 w-full object-cover"
        />
      </div>
      <div className="p-5">
        <p className=" font-bold mb-2.5">{country.name}</p>
        <p>{`Population: ${country.population}`}</p>
        <p>{`Region: ${country.region}`}</p>
        <p>{`Capital: ${country.capital}`}</p>
      </div>
    </div>
  );
};
