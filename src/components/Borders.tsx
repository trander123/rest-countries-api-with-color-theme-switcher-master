import React from "react";
import { Link } from "react-router-dom";
import { useCountryContext } from "../context/CountryContext";

interface IBorderProps {
  borders: string[] | string;
}

export const Borders = ({ borders }: IBorderProps) => {
  const { getCountryNameByCca3 } = useCountryContext();
  const isArray = typeof borders === "object";

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3">
      {isArray
        ? borders.map((border, index) => (
            <Link
              key={`${border}${index}`}
              to={`/country/${border}`}
              className=" text-center px-4 py-2 shadow-lg bg-white dark:bg-gray-800 m-5"
            >
              {getCountryNameByCca3(border)}
            </Link>
          ))
        : "N/A"}
    </div>
  );
};
