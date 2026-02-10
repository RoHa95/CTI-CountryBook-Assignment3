import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import ErrorPage from "./components/ErrorPage";
function App() {
  //states
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [region, setRegion] = useState("All");
  const [search, setSearch] = useState("");
  const [debounced, setDebounced] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notfound, setNotfound] = useState("false");

  //fetch data
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://restcountries.com/v3.1/all?fields=name,capital,region,languages,flags,population`,
        );
        if (!res.ok) {
          setError(true);
          throw new Error("request failed");
        }
        const data = await res.json();
        const dataWithId = data.map((item) => ({
          ...item,
          id: crypto.randomUUID(),
        }));
        setCountries(dataWithId);
        setFilteredCountries(dataWithId);
        setLoading(false);
        setError(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    fetchCountries();
  }, []);
  //filterd data
  useEffect(() => {
    let result = [...countries];

    if (region !== "All") {
      result = result.filter((item) => item.region === region);
    }
    if (debounced.length > 1) {
      result = result.filter((item) =>
        item.name.common
          .toLocaleLowerCase()
          .includes(debounced.trim().toLocaleLowerCase()),
      );
    }
    setFilteredCountries(result);
  }, [debounced, region]);
  //handle not found data
  useEffect(() => {
    if (filteredCountries.length === 0 && countries.length > 0) {
      setNotfound(true);
    } else {
      setNotfound(false);
    }
  }, [filteredCountries]);
  //debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div>
      <Navbar
        region={region}
        setRegion={setRegion}
        search={search}
        setSearch={setSearch}
      />
      {error ? (
        <ErrorPage />
      ) : (
        <Content
          data={filteredCountries}
          loading={loading}
          notfound={notfound}
        />
      )}
    </div>
  );
}

export default App;
