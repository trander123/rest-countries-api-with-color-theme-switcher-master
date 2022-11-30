import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import { useCountryContext } from "../context/CountryContext";

export const Filters = () => {
  const { getFilteredCountries, getSearchedCountry } = useCountryContext();
  const [search, setSearch] = useState("");
  const regions = [
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
    "Show All",
  ];
  const [isHidden, setIsHidden] = useState(true);

  const handleToggleFilters = () => {
    setIsHidden((prev) => !prev);
  };

  useEffect(() => {
    getSearchedCountry(search);
  }, [search]);

  return (
    <div className="sm:flex sm:justify-between mx-10 sm:mx-15 mb-10 space-y-10 sm:space-y-0">
      <div className="relative">
        <label htmlFor="input">
          <SearchIcon className=" absolute top-1/4 left-3" />
        </label>
        <input
          id="search"
          name="search"
          type="text"
          value={search}
          placeholder="Search for a country..."
          className="bg-white dark:bg-gray-800 pl-10 pr-4 py-3 w-full sm:w-auto rounded-md"
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
        />
      </div>

      <div className="w-fit relative bg-white dark:bg-gray-800 rounded-md shadow-lg">
        <div className=" pl-4 pr-2 py-3 flex" onClick={handleToggleFilters}>
          <p>Filter by Region</p>
          <button className=" ml-5">
            <ArrowDropDownIcon />
          </button>
        </div>
        {!isHidden && (
          <div className="flex flex-col absolute bg-white dark:bg-gray-800 mt-1 w-full px-4 space-y-2 py-3 rounded-md shadow-lg">
            {regions.map((region, index) => (
              <button
                key={`${region}${index}`}
                className="w-full text-left"
                onClick={() => {
                  handleToggleFilters();
                  getFilteredCountries(region);
                }}
              >
                {region}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
