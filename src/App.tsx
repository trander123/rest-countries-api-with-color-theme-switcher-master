import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Countries } from "./components/Countries";
import { Country } from "./components/Country";
import { useCountryContext } from "./context/CountryContext";
import './App.css'
function App() {
  const {getCountries} = useCountryContext()
  useEffect(() => {
    getCountries()
  },[])
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Countries />,
    },
    {
      path: "/country/:id",
      element: "",
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
