import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { data } from "autoprefixer";
import ErrorPage from "./components/ErrorPage";
function App() {
  //states
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [region, setRegion] = useState("all");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [notfound, setNotfound] = useState("false");

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
        setCountries(data);
        setFilteredCountries(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    fetchCountries();
  }, []);
  useEffect(() => {
    let result = [...countries];

    if (region !== "all") {
      result = result.filter((item) => item.region === region);
    }
    if (search.length > 1) {
      result = result.filter((item) =>
        item.name.common
          .toLocaleLowerCase()
          .includes(search.trim().toLocaleLowerCase()),
      );
    }
    setFilteredCountries(result);
  }, [search, region]);

  useEffect(() => {
    if (filteredCountries.length === 0 && countries.length > 0) {
      setNotfound(true);
    } else {
      setNotfound(false);
    }
  }, [filteredCountries]);
  return (
    <div>
      <Navbar
        region={region}
        setRegion={setRegion}
        search={search}
        setSearch={setSearch}
      />
      {error ? (
       <ErrorPage/>
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
