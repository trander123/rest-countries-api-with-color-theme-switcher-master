import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";

export const Filters = () => {
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submitted");
  };
  return (
    <div className="sm:flex sm:justify-between mx-10 sm:mx-15 mb-10 space-y-10 sm:space-y-0">
      <div className="relative">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="input">
            <SearchIcon className=" absolute top-1/4 left-3" />
          </label>
          <input
            id="input"
            type="text"
            placeholder="Search for a country..."
            className="bg-white dark:bg-gray-800 pl-10 pr-4 py-3 w-full sm:w-auto rounded-md"
          />
        </form>
      </div>

      <div className="w-fit relative bg-white dark:bg-gray-800 rounded-md shadow-lg">
        <div className=" pl-4 pr-2 py-3 flex">
          <p>Filter by Region</p>
          <button className=" ml-5">
            <ArrowDropDownIcon />
          </button>
        </div>
        <div className="flex flex-col absolute bg-white dark:bg-gray-800 mt-1 w-full px-4 space-y-2 py-3 rounded-md shadow-lg">
          {regions.map((region, index) => (
            <button key={`${region}${index}`} className="w-full text-left">
              {region}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
