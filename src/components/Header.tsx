import { useCountryContext } from "../context/CountryContext";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export const Header = () => {
  const { handleToggleTheme, isDark } = useCountryContext();
  return (
    <div className="flex justify-between mb-10 px-4 py-6 shadow-md bg-white dark:bg-gray-800">
      <div>Where in the world?</div>
      <div>
        <button onClick={handleToggleTheme}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
          {`${isDark ? " Light" : " Dark"} Mode`}
        </button>
      </div>
    </div>
  );
};
