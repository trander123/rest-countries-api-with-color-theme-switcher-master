import React from "react";
import { Link } from "react-router-dom";
import { useCountryContext } from "../context/CountryContext";

interface IBorderProps {
  borders: string[] | string;
}

export const Borders = ({ borders }: IBorderProps) => {
  const isArray = typeof borders === "object";
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3">
      {isArray
        ? borders.map((border, index) => (
            <div
              key={`${border}${index}`}
              className=" text-center px-4 py-2 shadow-lg bg-white dark:bg-gray-800 m-5"
            >
              {border}
            </div>
          ))
        : "N/A"}
    </div>
  );
};
