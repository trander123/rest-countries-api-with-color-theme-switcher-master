import React from "react";
import { Link } from "react-router-dom";

export const CountryDetailsError = () => {
  return (
    <div className="flex min-h-screen w-screen justify-center items-center text-center">
      <Link to={"/"}>
        <p>Seems like you're lost.</p>
        <p className=" text-4xl">Click Here!</p>
      </Link>
    </div>
  );
};
