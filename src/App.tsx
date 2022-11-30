import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Countries } from "./components/Countries";
import { useCountryContext } from "./context/CountryContext";
import "./App.css";
import { Header } from "./components/Header";
import { CountryDetails } from "./components/CountryDetails";
import { Container } from "./wrappers/Container";
import { Filters } from "./components/Filters";
import { CountryDetailsError } from "./error-pages/CountryDetailsError";
function App() {
  const { getCountries } = useCountryContext();
  useEffect(() => {
    getCountries();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Container>
          <Header />
          <Filters />
          <Countries />
        </Container>
      ),
    },
    {
      path: "/country/:name",
      element: (
        <Container>
          <Header />
          <CountryDetails />
        </Container>
      ),
      errorElement: <CountryDetailsError />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
